import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { UserComponent } from '../user/user.component';
import { ReposComponent } from '../repos/repos.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}

export const routingComponents = [UserComponent, ReposComponent];
