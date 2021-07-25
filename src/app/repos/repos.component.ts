import { Component, OnInit } from '@angular/core';
import { ReposService } from '../services/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(repoService:ReposService) { }

  ngOnInit(): void {
  }

}
// export class UserComponent implements OnInit {
//   private searchPattern:string ="Jerry-Wemisiko";
//   private aboutUser:any;
//   constructor(private userService:UserService) { }

//   ngOnInit(): void {
//     this.userService.getUsers(this.searchPattern)
//     .subscribe((results)=> {
//       this.aboutUser = results;
//       console.log(results);
//     });
//   }

// }