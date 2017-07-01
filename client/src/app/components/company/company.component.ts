import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  public currentCompanies: any;
  selectedCompanies: any;
  user: any;
  constructor(private companyServices: CompanyService) {}

  ngOnInit() {
    this.selectedCompanies = [];

    this.getAllCompanies();

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getAllCompanies() {
    this.companyServices.getAllCompanies().then(
      res => {
        this.currentCompanies = res;
      },
      err => {
        throw err;
      }
    );
  }

  selectElement(event) {
    if (event.target.checked) {
      this.selectedCompanies.push(event.target.value);
    } else {
      for (let i = 0; i < this.selectedCompanies.length; i++) {
        if (this.selectedCompanies[i] === event.target.value) {
          this.selectedCompanies.splice(i, 1);
        }
      }
    }
  }

  deleteComapnies() {
    this.companyServices.deleteCompanies(this.selectedCompanies).then(
      res => {
        this.getAllCompanies();
      },
      err => {
        console.error(err);
      }
    );
  }

  deactivateComapnies() {
    this.companyServices.deactivateRoles(this.selectedCompanies).then(
      res => {
        this.getAllCompanies();
      },
      err => {
        console.error(err);
      }
    );
  }

  reactivateComapnies() {
    this.companyServices.reactivateRoles(this.selectedCompanies).then(
      res => {
        this.getAllCompanies();
      },
      err => {
        console.error(err);
      }
    );
  }
}
