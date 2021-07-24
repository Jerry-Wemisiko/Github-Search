import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {UInterface} from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user_url_search:string="https://api.github.com/users/";
 
  
  constructor(private http:HttpClient) { }
   
  //Multiple Users
  getUsers(username:string):Observable<UInterface>{
    var outputUrl = this.user_url_search +username
    var data:Observable<UInterface> =this.http.get<UInterface>(outputUrl);
    return data;
  }
}
