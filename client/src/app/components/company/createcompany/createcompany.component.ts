import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
//TO usejQuery and toastr jQuery Plugins
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css'],
})
export class CreatecompanyComponent implements OnInit {
  public newCompany: any;

  companyName: any;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {
    this.newCompany = {
      name: '',
      status: Boolean,
    };
  }

  onSubmit() {
    this.newCompany.name = this.companyName;
    this.newCompany.status = true;
    this.companyService.createCompany(this.newCompany).then(
      res => {
       if(!res['success']) {
          toastr.error('Sorry, create new company, please try again');
        } else {
          toastr.success('Success !!!');
          this.router.navigate(['/companies']);
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/companies']);
  }
}
