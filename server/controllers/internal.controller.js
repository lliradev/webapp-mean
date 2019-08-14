const Internal = require('../models/internal');
const internalCtrl = {};

internalCtrl.findAll = async (req, res) => {
  const findAll = await Internal.find();
  res.json(findAll);
};

internalCtrl.createInternal = async (req, res) => {
  const internal = new Internal({
    type: req.body.type,
    responsible: req.body.responsible,
    amount: req.body.amount,
    reason: req.body.reason
  });
  await internal.save();
  res.json({ status: "Internal saved!" })
};

internalCtrl.getInternal = async (req, res) => {
  const internal = await Internal.findById(req.params.id);
  res.json(internal);
};

internalCtrl.editInternal = async (req, res) => {
  const { id } = req.params;
  const internal = {
    type: req.body.type,
    responsible: req.body.responsible,
    amount: req.body.amount,
    reason: req.body.reason
  };
  await Internal.findByIdAndUpdate(id, { $set: internal }, { new: true });
  res.json({ status: "Internal updated!" });
};

internalCtrl.deleteInternal = async (req, res) => {
  await Internal.findByIdAndRemove(req.params.id);
  res.json({ status: "Internal deleted!" });
};

internalCtrl.download = async (req, res) => {
  try {
    const templateBody = `<h1>Hello Nito Jicote</h1>`;
    const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Internal</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
      <body>
        ${templateBody}
      </body>
    </html>`;
    res.pdfFromHTML({
      filename: 'hello-world.pdf',
      htmlContent: html,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
}

module.exports = internalCtrl;