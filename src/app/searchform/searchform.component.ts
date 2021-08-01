import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css'],
})
export class SearchformComponent implements OnInit {
  // newUser = new User();
  searchedUser: string;
  @Output() findUser = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  searchInfo() {
    this.findUser.emit(this.searchedUser);
  }
}
