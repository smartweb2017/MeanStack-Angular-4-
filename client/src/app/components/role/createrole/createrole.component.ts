import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';
//TO usejQuery and toastr jQuery Plugins
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-createrole',
  templateUrl: './createrole.component.html',
  styleUrls: ['./createrole.component.css'],
})
export class CreateroleComponent implements OnInit {
  newRole: any;
  currentRoles: any;
  error: any;
  staff: any;
  customer: any;
  store: any;
  order: any;
  role: any;
  company: any;
  home_url: any;
  status: any;
  display_dashboard: any;
  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit() {
    this.getAllRoles();
    this.error = '';
    this.newRole = {
      role_name: '',
      staff: '',
      customer: '',
      store: '',
      order: '',
      role: '',
      company: '',
      home_url: '',
      status: '',
    };

    this.staff = {
      create: '',
      edit: '',
      delete: '',
      view: '',
    };

    this.customer = {
      create: '',
      edit: '',
      delete: '',
      view: '',
    };

    this.store = {
      create: '',
      edit: '',
      delete: '',
      view: '',
    };

    this.order = {
      create: '',
      edit: '',
      delete: '',
      view: '',
    };

    this.role = {
      create: '',
      edit: '',
      delete: '',
      view: '',
    };

    this.company = {
      create: '',
      edit: '',
      delete: '',
      view: '',
    };

    this.display_dashboard = true;
    this.home_url = '';
  }
  getAllRoles() {
    this.roleService.getAllRoles().then(
      res => {
        this.currentRoles = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    this.newRole.staff = this.staff;
    this.newRole.customer = this.customer;
    this.newRole.store = this.store;
    this.newRole.order = this.order;
    this.newRole.role = this.role;
    this.newRole.company = this.company;
    this.newRole.home_url = this.home_url;
    this.newRole.status = true;
    this.newRole.display_dashboard = this.display_dashboard;
    this.roleService.saveRole(this.newRole).then(
      res => {
         if(!res['success']) {
          toastr.error('Sorry, cannot create new role, please try again');
        } else {
          toastr.success('Success !!!');
          this.router.navigate(['/roles']);
        }
      },
      err => {
        alert('Something went wrong!!!');
      }
    );
  }
  cancel() {
    this.router.navigate(['/roles']);
  }
}
