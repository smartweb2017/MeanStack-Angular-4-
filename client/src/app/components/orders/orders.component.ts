import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  rows = [];
  temp = [];

  user: any;

  constructor() {
    this.fetch(data => {
      //cache our list
      this.temp = [...data];

      //push our initial complete list
      this.rows = data;
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/order.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value;

    //filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }
}
