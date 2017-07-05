import { Component, OnInit } from '@angular/core';
//TO usejQuery and toastr jQuery Plugins
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
