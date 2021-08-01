import { Component, OnInit } from '@angular/core';
import { Repos } from '../models/repos';
import { SearchHttpRequestService } from '../searchhttprequest.service';
import { SearchformComponent } from '../searchform/searchform.component';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
  repo: Repos;
  public searchQuery: string;
  public resultCount = 30;

  searchRepos() {
    this.searchQuery = '';
    this.resultCount = 20;
    this.getData();
  }

  constructor(public repoService: SearchHttpRequestService) {}

  ngOnInit() {
    this.repoService.getRepos(this.searchQuery);
    console.log(this.repoService);
  }

  getData() {
    this.repoService.getRepos(this.searchQuery);
  }
}
