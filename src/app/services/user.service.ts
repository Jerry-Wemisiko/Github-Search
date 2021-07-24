import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user_url_search:string="https://api.github.com/users/{user}";
 
  
  constructor(private http:HttpClient) { }
   
  //Multiple Users
  getUsers(username:string){
    var outputUrl = this.user_url_search +username
    console.log(this.http.get(outputUrl))
  }
}
