import {
  Component,
  OnInit
} from '@angular/core';
import {
  EmailValidator
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  RoleService
} from '../../../../services/role.service';
import {
  CompanyService
} from '../../../../services/company.service';
import {
  UsersService
} from '../../../../services/users.service';
import {
  Staff
} from './staff.interface';

import MaskedInput from '@msafi/angular2-text-mask';


@Component({
  selector: 'staff-user',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  users = []; //For select Parent user

  public staff: any;

  public parent: any;

  public child: any;

  public user_info: any;

  customerPermission: any;

  staffPermission: any;

  storePermission: any;

  orderPermission: any;

  rolePermission: any;

  companyPermission: any;

  display_dashboard: any;

  home_url: any;

  currentCompanies: any = [];

  newCompany: any;

  roles: any;

  user: any;

  public modalValid = true;

  constructor(private router: Router, private roleService: RoleService, private companyService: CompanyService, private userService: UsersService) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));

    this.newCompany = {
      name: '',
      status: ''
    };

    this.staff = {
      username: '',
      parent: '',
      password: '',
      company: '',
      role_name: '',
      special_permissions: {}
    };

    this.user_info = {
      email: '',
      phone: '',
      mobile: ''
    };
    this.staffPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };

    this.customerPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };

    this.storePermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };

    this.orderPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };


    this.rolePermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };

    this.companyPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };

    this.getAllCompanies();
    this.getAllRoles();
    this.getAllUsers();
  }

  //Get All Users
  getAllUsers() {

    this.userService.getAllUsers().then((res) => {

      for (let i = 0; i < Object.keys(res).length; i++) {

        if (res[i].accounttype === 'staff' ) {

          this.users.push(res[i].username);

        }

      }
    }, (err) => {

      console.log(err);

    });
  }


  //Get Current Companies
  getAllCompanies() {
    this.companyService.getAllCompanies().then((res) => {
      this.currentCompanies = [];
      for(let i = 0; i<Object.keys(res).length; i++ ) {
        this.currentCompanies.push(res[i]);
      }
    }, (err) => {
      console.log(err);
    });
  }
  //Get Current Roles
  getAllRoles() {
    this.roleService.getAllRoles().then((res) => {
      this.roles = res;
    }, (err) => {
      console.log(err);
    });
  }


  onSubmit() {
    this.staff['user_info'] = this.user_info;
    this.staff.user_info.phone = this.user_info.phone;
    this.staff.user_info.mobile = this.user_info.mobile;
    this.staff['status'] = 'active';
    this.staff['accounttype'] = 'staff';
    this.userService.createNewUser(this.staff).then((result) => {
      this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }


  createCompany () {
    this.currentCompanies.push(this.newCompany.name);
    this.staff.company = this.newCompany.name;
    this.newCompany.status = 'active';
    this.companyService.createCompany(this.newCompany).then((res) => {
      this.getAllCompanies();
    }, (err) => {
      console.log(err);
    });
  }
  savePermissions() {
    
    this.staff.special_permissions.staff = this.staffPermission;

    this.staff.special_permissions.customer = this.customerPermission;

    this.staff.special_permissions.store = this.storePermission;

    this.staff.special_permissions.order = this.orderPermission;

    this.staff.special_permissions.company = this.companyPermission;

    this.staff.special_permissions.role = this.rolePermission;

    this.staff.special_permissions.display_dashboard = this.display_dashboard;

    this.staff.special_permissions.home_url = this.home_url;

    this.staff.role_name = '';

    this.modalValid = false;
  }

}