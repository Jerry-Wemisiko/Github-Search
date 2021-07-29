import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { UserService } from './services/user.service';
import { ReposService } from './services/repos.service';
import { FormsModule } from '@angular/forms';
import { SearchformComponent } from './searchform/searchform.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    SearchformComponent,
    LandingPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  
  ],
  providers: [UserService,ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
