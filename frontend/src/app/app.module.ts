// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';

import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { InternalComponent } from './components/internal/internal.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserService } from './services/user.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        PhotosComponent,
        HomeComponent,
        SuppliersComponent,
        InternalComponent,
        MenuComponent,
        UserComponent,
        SignUpComponent,
        UserProfileComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }, AuthGuard, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
