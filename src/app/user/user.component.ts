import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private searchPattern:string ="Jerry-Wemisiko";
  private aboutUser:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers(this.searchPattern)
    .subscribe((results)=> {
      this.aboutUser = results;
      console.log(results);
    });
  }

}
