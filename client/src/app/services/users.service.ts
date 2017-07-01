import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

  authToken: any; 

  constructor(private http:Http) { }

 getUserDetails(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/users/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  createNewUser(newUser) {
    let headers = new Headers();
    
    this.authToken = localStorage.getItem('id_token');    
    
    headers.append('Authorization', this.authToken);
    
    headers.append('Content-Type','application/json'); 
    
    return new Promise((resolve, reject) => {
    this.http.post('/users/register',newUser , {headers: headers})
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  
}
  updateUser(id, data) {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('id_token'));
    
    headers.append('Content-Type','application/json');
    return new Promise((resolve, reject) => {
        this.http.put('/users/'+id, data, {headers: headers})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
  inActivateUser(users) {
    let headers = new Headers();
    
    this.authToken = localStorage.getItem('id_token');    
    
    headers.append('Authorization', this.authToken);
    
    headers.append('Content-Type','application/json'); 

    return this.http.post('/users/inactivate', users , {headers: headers})
      .map(res => res.json());
    
}
  deActivateUsers(users) {
    let headers = new Headers();
    
    this.authToken = localStorage.getItem('id_token');    
    
    headers.append('Authorization', this.authToken);
    
    headers.append('Content-Type','application/json'); 

    return this.http.post('/users/activate', users , {headers: headers})
      .map(res => res.json());
  }
  deleteUsers(users) {
    let headers = new Headers();
    
    this.authToken = localStorage.getItem('id_token');    
    
    headers.append('Authorization', this.authToken);
    
    headers.append('Content-Type','application/json'); 

    return this.http.post('/users/delete', users , {headers: headers})
      .map(res => res.json());
  }



  getAllUsers(){
    
    let headers = new Headers();
    
    this.authToken = localStorage.getItem('id_token');    
    
    headers.append('Authorization', this.authToken);
    
    headers.append('Content-Type','application/json'); 

    return new Promise((resolve, reject) => {
      
    this.http.get('/users', {headers: headers})
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  }
}
