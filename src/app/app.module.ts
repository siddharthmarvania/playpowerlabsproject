import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDXnn9kqi5KtqSR9KZm1rwvnPlb7jt999o",
      authDomain: "playpowerlabsproject.firebaseapp.com",
      projectId: "playpowerlabsproject",
      storageBucket: "playpowerlabsproject.appspot.com",
      messagingSenderId: "799100330509",
      appId: "1:799100330509:web:87287399dfca95c2bd2b44"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
