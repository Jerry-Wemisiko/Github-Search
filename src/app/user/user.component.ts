import { Component, OnInit,Input,Output } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  // @Input() user :any;
 

  private searchPattern:string ="Jerry-Wemisiko";
  private aboutUser:User;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(this.searchPattern)
    .subscribe((results)=> {
      this.aboutUser = results;
      console.log(results);
    });
  }

}
