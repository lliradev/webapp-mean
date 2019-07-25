const User = require('../models/user');
const passport = require('passport');
const _ = require('lodash');
const userCtrl = {};
const nodemailer = require('nodemailer');
const async = require('async');

userCtrl.register = async (req, res, next) => {
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password
  });
  await user.save((err, doc) => {
    if (!err)
      res.send(doc);
    else {
      console.log(err);
      if (err.code == 11000)
        res.status(422).send(['Duplicate email adrress found.']);
      else
        return next(err);
    }
  });
};

userCtrl.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate('local', (err, user, info) => {
    // error from passport middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) return res.status(200).json({ "token": user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
}

userCtrl.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id },
    (err, user) => {
      if (!user)
        return res.status(404).json({ status: false, message: 'User record not found.' });
      else
        return res.status(200).json({ status: true, user: _.pick(user, ['fullname', 'email']) });
    }
  );
}

userCtrl.forgot = (req, res, next) => {
  async.waterfall([
    function (done) {
      bcrypt.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },

    function (token, done) {
      User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          console.log(res);
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        user.save(function (err) {
          done(err, token, user);
        });
      });
    },

    function (token, user, done) {
      var smtpTransport = nodemailer.createTransport('SMTP', {
        service: 'SendGrid',
        auth: {
          user: '!!! YOUR SENDGRID USERNAME !!!',
          pass: '!!! YOUR SENDGRID PASSWORD !!!'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'abilira34@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function (err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function (err) {
    if (err) return next(err);
    console.log(res);
  });
};

module.exports = userCtrl;