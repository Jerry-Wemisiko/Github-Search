import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { UserService } from './services/user.service';
import { ReposService } from './services/repos.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
  
  ],
  providers: [UserService,ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
