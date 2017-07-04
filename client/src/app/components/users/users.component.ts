import {Component, ViewChild, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersService} from '../../services/users.service';
import { CompanyService } from '../../services/company.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  currentCompanies: any;
  
  users: any;

  temp: any;

  user: any;

  filterUserType: any;

  customertype: any;

  selectedUsers: any;

  childs: any;

  constructor(
    private usersService: UsersService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.filterUserType = '';
    this.selectedUsers = [];
    this.childs = [];
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getAllUsers();
    this.getAllCompanies();
  }

  filter() {
    let temp1 = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].accounttype === this.filterUserType) {
        temp1.push(this.users[i]);
      }
    }
    this.temp = temp1;
  }

  //Get Current Companies
  getAllCompanies() {
    this.companyService.getAllCompanies().then((res) => {
      this.currentCompanies = [];
      for(let i = 0; i<Object.keys(res).length; i++ ) {
        if(res[i].status === true) {
          this.currentCompanies.push(res[i]);
        }        
      }
    }, (err) => {
      console.log(err);
    });
  }
  getAllUsers() {
    this.usersService.getAllUsers().then(
      (res) => {
        this.users = res;
        this.temp = this.users;
        if (this.user.accounttype === 'customer') {
          this.usersService.getUserDetails(this.user.id).then(
            (res) => {
              this.user.child = res['user'].child;
              for(let i=0; i<this.user.child.length; i++) {
                for( let j=0; j<this.users.length; j++) {
                  if(this.users[j].username === this.user.child[i]) {
                    this.childs.push(this.users[j]);
                  }
                }
              }
             
            },
            (error) => {
              console.log(error);
            }
          );          
        } 
      },
      (err) => {
        console.log(err);
      }
    );
  }
  selectElement(event) {
    if (event.target.checked) {
      this.selectedUsers.push(event.target.value);
    } else {
      for (let i = 0; i < this.selectedUsers.length; i++) {
        if (this.selectedUsers[i] === event.target.value) {
          this.selectedUsers.splice(i, 1);
        }
      }
    }
  }

  inActivateUsers() {
    this.usersService.inActivateUser(this.selectedUsers).subscribe(data => {
      console.log(data);
      this.getAllUsers();
      this.selectedUsers = [];
    });
  }

  reActivateUsers() {
    this.usersService.deActivateUsers(this.selectedUsers).subscribe(data => {
      console.log(data);
      this.getAllUsers();
      this.selectedUsers = [];
    });
  }

  deleteUsers() {
    this.usersService.deleteUsers(this.selectedUsers).subscribe(data => {
      console.log(data);
      this.getAllUsers();
      this.selectedUsers = [];
    });
  }

  createNewUser() {
    this.router.navigate(['/user']);
  }
}
