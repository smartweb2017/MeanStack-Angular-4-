import {Component, OnInit, Input} from '@angular/core';
import {EmailValidator} from '@angular/forms';
import {Router} from '@angular/router';
import {RoleService} from '../../../../services/role.service';
import {CompanyService} from '../../../../services/company.service';
import {UsersService} from '../../../../services/users.service';
import MaskedInput from '@msafi/angular2-text-mask';

@Component({
  selector: 'edit-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffEditComponent implements OnInit {
  @Input() user: any;

  public staff: any;

  public user_info: any;

  currentCompanies: any = [];

  customerPermission: any;

  staffPermission: any;

  storePermission: any;

  orderPermission: any;

  rolePermission: any;

  companyPermission: any;

  display_dashboard: any;

  home_url: any;

  newCompany: any;

  roles: any;

  users = [];

  currentUser: any;

  public modalValid = true;

  constructor(
    private router: Router,
    private roleService: RoleService,
    private companyService: CompanyService,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.roles = [];
    this.staff = this.user.user;
    this.user_info = this.user.user['user_info'];
    this.newCompany = {
      name: '',
      status: '',
    };
    if (this.staff.special_permissions) {
      this.companyPermission = this.staff.special_permissions.company;
      this.staffPermission = this.staff.special_permissions.staff;
      this.customerPermission = this.staff.special_permissions.customer;
      this.orderPermission = this.staff.special_permissions.order;
      this.storePermission = this.staff.special_permissions.store;
      this.rolePermission = this.staff.special_permissions.role;
      this.home_url = this.staff.special_permissions.home_url;
      this.display_dashboard = this.staff.special_permissions.display_dashboard;
    } else {
      this.staffPermission = {
        create: '',
        edit: '',
        delete: '',
        view: '',
      };

      this.customerPermission = {
        create: '',
        edit: '',
        delete: '',
        view: '',
      };

      this.storePermission = {
        create: '',
        edit: '',
        delete: '',
        view: '',
      };

      this.orderPermission = {
        create: '',
        edit: '',
        delete: '',
        view: '',
      };

      this.rolePermission = {
        create: '',
        edit: '',
        delete: '',
        view: '',
      };

      this.companyPermission = {
        create: '',
        edit: '',
        delete: '',
        view: '',
      };

      this.staff.special_permissions = {};
    }
    this.getAllCompanies();
    this.getAllRoles();
    this.getAllUsers();
  }

  //Get All Users
  getAllUsers() {
    this.userService.getAllUsers().then(
      res => {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (
            res[i].accounttype === 'staff' &&
            res[i].username !== this.user.username
          ) {
            this.users.push(res[i].username);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  //Get Current Companies
  getAllCompanies() {
    this.companyService.getAllCompanies().then(
      res => {
        this.currentCompanies = [];
        for (let i = 0; i < Object.keys(res).length; i++) {
          if(res[i].status === true) {
            this.currentCompanies.push(res[i]);
          }          
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  //Get Current Roles
  getAllRoles() {
    this.roleService.getAllRoles().then((res) => {
      for( let i=0; i<Object.keys(res).length; i++) {
        if(res[i].status === true) {
          this.roles.push(res[i]);
        }
      }

    }, (err) => {

      console.log(err);

    });
  }
  onSubmit() {
    this.staff['user_info'] = this.user_info;
    this.staff['status'] = 'active';
    this.staff['accounttype'] = 'staff';
    if (this.staff.role) {
      delete this.staff.special_permissions;
    }
    this.userService.updateUser(this.staff['id'], this.staff).then(
      result => {
        this.router.navigate(['/users']);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/users']);
  }

  createCompany() {
    this.currentCompanies.push(this.newCompany.name);
    this.staff.company = this.newCompany.name;
    this.newCompany.status = 'active';
    this.companyService.createCompany(this.newCompany).then(
      res => {
        this.getAllCompanies();
      },
      err => {
        console.log(err);
      }
    );
  }

  selectRole(event) {
    this.staff.role = event.target.value;
    if (this.staff.special_permissions) {
      delete this.staff.special_permissions;
    }
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

    this.staff.role = '';

    this.modalValid = false;

    console.log(this.staff.special_permissions);
  }
}
