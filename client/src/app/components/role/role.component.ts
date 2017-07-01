import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoleService} from '../../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  roles: any;

  selectedRoles: any;

  user: any;

  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit() {
    this.roles = [];
    this.selectedRoles = [];
    this.getAllRoles();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getAllRoles() {
    this.roleService.getAllRoles().then(
      res => {
        this.roles = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  selectElement(event) {
    if (event.target.checked) {
      this.selectedRoles.push(event.target.value);
    } else {
      for (let i = 0; i < this.selectedRoles.length; i++) {
        if (this.selectedRoles[i] === event.target.value) {
          this.selectedRoles.splice(i, 1);
        }
      }
    }
  }

  deleteRoles() {
    this.roleService.deleteRoles(this.selectedRoles).then(
      res => {
        if (res['success']) {
          this.getAllRoles();
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  reactivateRoles() {
    this.roleService.reactivateRoles(this.selectedRoles).then(
      res => {
        this.getAllRoles();
      },
      err => {
        console.error(err);
      }
    );
  }

  deactivateRoles() {
    this.roleService.deactivateRoles(this.selectedRoles).then(
      res => {
        this.getAllRoles();
      },
      err => {
        console.error(err);
      }
    );
  }
}
