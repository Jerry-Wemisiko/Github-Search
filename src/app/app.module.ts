import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchformComponent } from './searchform/searchform.component';
import { RoutingModule, routingComponents } from './routing/routing.module';
import { SearchHttpRequestService } from './searchhttprequest.service';
import { HighlightDirective } from './highlight.directive';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    SearchformComponent,
    LandingPageComponent,
    routingComponents,
    HighlightDirective,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    RouterModule,
  ],
  providers: [SearchHttpRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
