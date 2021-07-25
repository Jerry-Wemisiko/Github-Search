import { Component, OnInit } from '@angular/core';
import { RepoInterface } from '../interfaces/repo';
import { ReposService } from '../services/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  private searchQuery: string = ''
  private repoInfo:any
  
  constructor(private repoService:ReposService) { }

  ngOnInit(): void {
    this.repoService.getRepos(this.searchQuery)
    .subscribe((thedata)=> {
      this.repoInfo = thedata;
       console.log(thedata)
    })
  }
}