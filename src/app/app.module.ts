import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReposService } from './services/repos.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService,ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
