import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { UserComponent } from '../user/user.component';
import { ReposComponent } from '../repos/repos.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'repos', component: ReposComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}

export const routingComponents = [UserComponent, ReposComponent];
