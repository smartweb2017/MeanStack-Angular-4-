import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  authToken: any;

  constructor(private http: Http) { }

  getAllCompanies() {

    return new Promise((resolve, reject) => {
      this.http.get('/companies')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCompanyDetail(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/companies/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  createCompany(company) {
    return new Promise((resolve, reject) => {
      this.http.post('/companies',{company})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    }); 
  }

  updateCompany(id, company) {
    return new Promise((resolve, reject) => {
      this.http.put('/companies/'+id, {company})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    }); 
  }

  deleteCompanies(companies) {
    return new Promise((resolve, reject) => {
      this.http.post('/companies/delete', companies)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    }); 
  }

  deactivateRoles(companies) {
    return new Promise((resolve, reject) => {
      this.http.post('/companies/deactivate', companies)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  reactivateRoles(companies) {
    return new Promise((resolve, reject) => {
      this.http.post('/companies/reactivate', companies)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
