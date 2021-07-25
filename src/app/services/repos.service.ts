import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { RepoInterface } from '../interfaces/repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private repo_search ="https://api.github.com/users/Jerry-Wemisiko/repos"


  constructor(private http:HttpClient) { }
   
  getRepos(reponame:string){
      var yourRepoSearch =this.repo_search + reponame;
      var outPut:Observable<RepoInterface> =this.http.get<RepoInterface>(yourRepoSearch);
      return outPut;

  }

}
