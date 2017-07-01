import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
})
export class NavmenuComponent implements OnInit {
  user: any;
  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }
}
