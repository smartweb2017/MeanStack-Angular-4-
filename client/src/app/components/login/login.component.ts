import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {BlankComponent} from '../blank/blank.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  error: String;
  user: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.error = '';
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.accounttype === 'super') {
          this.router.navigate(['/dashboard']);
        }

        if (
          this.user.accounttype === 'staff' ||
          this.user.accounttype == 'customer'
        ) {
          if (!this.user.role) {
            if (!this.user.special_permissions) {
              this.router.navigate(['/blank']);
            } else { 
              this.router.navigate([
                '/' + this.user.special_permissions.home_url,
              ]);
            }
          } else {
            if(this.user.role.status !== true) {
              this.router.navigate(['/blank']);
            } else {
                if (!this.user.role.home_url) {
                this.router.navigate(['/dashboard']);
              } else {
                this.router.navigate(['/' + this.user.role.home_url]);
              }
            }            
          }
        }

        //this.router.navigate([this.user.role.home_url]);
      } else {
        this.router.navigate(['login']);
        this.error = data.msg;
      }
    });
  }
}
