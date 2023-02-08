import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordComponent } from './password/password.component';
import { ParentComponent } from './parent/parent.component';
import { ChatPannelComponent } from './chat-pannel/chat-pannel.component';
import { HeaderComponent } from './header/header.component';
import { UserWindowComponent } from './user-window/user-window.component';

@NgModule({
  declarations: [
    AppComponent,
   routingComponent,
   ParentComponent,
   ChatPannelComponent,
   HeaderComponent,
   UserWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
