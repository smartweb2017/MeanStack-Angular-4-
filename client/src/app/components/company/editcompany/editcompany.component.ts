import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
//TO usejQuery and toastr jQuery Plugins
declare var $: any;
declare var toastr: any;

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css'],
})
export class EditcompanyComponent implements OnInit {
  public currentCompany: any;

  companyName: any;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentCompany = {
      name: '',
      status: Boolean,
    };
    this.getCompanyDetails(this.route.snapshot.params['id']);
  }

  getCompanyDetails(id) {
    this.companyService.getCompanyDetail(id).then(
      res => {
        this.currentCompany = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  onSubmit() {
    this.companyService
      .updateCompany(this.currentCompany._id, this.currentCompany)
      .then(
        res => {
          if(!res['success']) {
            toastr.error('Sorry, edit this  company, please try again');
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
