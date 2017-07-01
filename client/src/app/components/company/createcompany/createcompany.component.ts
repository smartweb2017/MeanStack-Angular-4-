import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/company.service';
import {Router} from '@angular/router';
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
        this.router.navigate(['/companies']);
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
