import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user_url_search:string="https://api.github.com/users/{user}";
  private userInput:string ="Jerry-Wemisiko";
  private outputUrl:string =this.user_url_search + this.userInput
  
  constructor(private http:HttpClient) { }
   
  getUser(username:string){
    console.log(this.http.get(this.outputUrl))
  }
}
