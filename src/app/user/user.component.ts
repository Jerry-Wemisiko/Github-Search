import { Component, OnInit } from '@angular/core';
import { Repos } from '../models/repos';
import { User } from '../models/user';
import { SearchHttpRequestService } from '../searchhttprequest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [SearchHttpRequestService],
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public searchPattern: string = 'Jerry-Wemisiko';
  public aboutUser: string;

  users: User;
  repo: Repos;
  public searchRepo: string;
  public resultCount = 20;

  getUser(username: any) {
    this.aboutUser = '';
    this.searchPattern = username;
    this.ngOnInit();
  }

  constructor(
    public userService: SearchHttpRequestService,
    public userRepos: SearchHttpRequestService
  ) {}

  ngOnInit() {
    this.userService.aboutUser(this.searchPattern);
    this.users = this.userService.users;
    this.userRepos.getUserRepos(this.searchPattern);
    console.log(this.userRepos);
  }

  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
  }
}
