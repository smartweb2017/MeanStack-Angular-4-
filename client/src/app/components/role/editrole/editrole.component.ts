import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleService} from '../../../services/role.service';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css'],
})
export class EditroleComponent implements OnInit {
  currentRole: any = {};
  staff: any = {};
  customer: any = {};
  store: any = {};
  order: any = {};
  role: any = {};
  status: any;
  company: any = {};
  display_dashboard: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    this.getRoleDetails(this.route.snapshot.params['id']);
  }

  getRoleDetails(id) {
    this.roleService.getRoleDetails(id).then(
      res => {
        this.currentRole = res;
        this.staff = res['staff'];
        this.customer = res['customer'];
        this.store = res['store'];
        this.order = res['order'];
        this.role = res['role'];
        this.company = res['company'];
        this.status = res['status'];
        this.display_dashboard = res['display_dashboard'];
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    this.currentRole.staff = this.staff;
    this.currentRole.customer = this.customer;
    this.currentRole.order = this.order;
    this.currentRole.store = this.store;
    this.currentRole.role = this.role;
    this.currentRole.status = this.status;
    this.currentRole.display_dashboard = this.display_dashboard;
    console.log(this.currentRole);
    this.roleService.updateRole(this.currentRole._id, this.currentRole).then(
      res => {
        this.router.navigate(['/roles']);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/roles']);
  }
}
