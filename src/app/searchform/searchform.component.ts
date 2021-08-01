import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css'],
})
export class SearchformComponent implements OnInit {
  searchedString = new Search('');
  @Output() findUser = new EventEmitter<Search>();

  constructor() {}

  ngOnInit() {}

  searchInfo(info: any) {
    this.findUser.emit(info.value.track);
    console.log(info.value.track);
    info.reset();
  }
}
