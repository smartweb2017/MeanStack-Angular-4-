import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http'
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../../../../services/role.service';
import { CompanyService } from '../../../../services/company.service';
import { UsersService } from '../../../../services/users.service';
import MaskedInput from '@msafi/angular2-text-mask';

@Component({
  selector: 'edit-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerEditComponent implements OnInit {

  @Input() user: any;

  filesToUpload: Array<File> = [];
  
  filesToPhoto: Array<File> = [];
  
  confirmPassword: any;
  
  logo: File;
  
  photo: File;
  
  public customer: any;
  
  public user_info: any;
  
  public customer_info: any;
  
  public modalValid = true;
  
  address: any;
  
  currentCompanies: any;
  
  customerPermission: any ;
  
  storePermission: any ;

  orderPermission: any ;

  rolePermission: any ;

  companyPermission: any ;

  display_dashboard: any;

  home_url: any;
  
  parents: any;
  
  childs: any;
  
  roles: any;
  
  users = [];
  
  usersForParents = [];
  
  usersForChilds = [];

  newCompany: any;

  currentUser: any;

  //Logo Url
  
  public logoUrl: string;
  
  public photoUrl: string;
  
  regionData = {
    "Northland": ["Far North", "Kaipara", "Whangarei"],
    "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
    "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
    "Coromandel": ["Thames-Coromandel"],
    "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
    "Gisborne": ["Gisborne"],
    "Central North Island": ["Ruapehu", "Taupo"],
    "Hawkes Bay": ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
    "Taranaki": ["New Plymouth", "South Taranaki", "Stratford"],
    "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
    "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
    "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
    "Marlborough": ["Kaikoura", "Marlborough"],
    "Nelson & Bays": ["Nelson", "Tasman"],
    "West Coast": ["Buller", "Grey", "Westland"],
    "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
    "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
    "Otago": ["Clutha", "Dunedin City", "Waitaki"],
    "Southland": ["Gore", "Invercargill City", "Southland"],
    "Pacific Islands": ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]

  }
  
  regions = Object.keys(this.regionData);
  
  cities: any;
  
  
  
  constructor(private http: Http, private router: Router, private roleService: RoleService, private companyService: CompanyService, private userService: UsersService) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.customer = this.user.user;
    this.user_info = this.user.user['user_info'];
    this.logoUrl = '/uploads/logo/' + this.customer.logo;
    this.photoUrl = '/uploads/logo/' + this.customer.photo;
    this.customer_info = this.user.user.customer_info;
    this.address = this.customer_info.address;
    this.cities = this.regionData[this.customer.customer_info.region];
    this.childs = this.customer.child;
    this.roles = [];
    this.newCompany = {
      name: '',
      status: ''
    }
    if(this.customer.special_permissions) {
      this.companyPermission = this.customer.special_permissions.company;
      this.customerPermission = this.customer.special_permissions.customer;
      this.orderPermission = this.customer.special_permissions.order;
      this.storePermission = this.customer.special_permissions.store;
      this.rolePermission = this.customer.special_permissions.role;      
      this.home_url = this.customer.special_permissions.home_url; 
      this.display_dashboard = this.customer.special_permissions.display_dashboard;
    } else {
      this.customerPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };
  
    this.storePermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };
  
    this.orderPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };
  
    this.rolePermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };
  
    this.companyPermission = {
      create: '',
      edit: '',
      delete: '',
      view: ''
    };
    }
    

    this.getAllCompanies();
    this.getAllRoles();
    this.getAllUsers();
  }
  
  //Get All Users
  getAllUsers() {
    this.userService.getAllUsers().then((res) => {
      for (let i = 0; i < Object.keys(res).length; i++) {
        if (res[i].accounttype === 'customer' && res[i].username !== this.customer.username ) {
          this.users.push(res[i].username);
        }
      }
      
    }, (err) => {
      console.log(err);
    });
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
  //Get Current Roles
  getAllRoles() {
    this.roleService.getAllRoles().then((res) => {
      for( let i=0; i<Object.keys(res).length; i++) {
        if(res[i].status === true) {
          this.roles.push(res[i]);
        }
      }

    }, (err) => {

      console.log(err);

    });
  }
  //Select Region
  selectRegion(event) {
    let region = event.target.value;
    this.cities = this.regionData[region];
  }

  onSubmit() {
    this.customer['user_info'] = this.user_info;
    this.customer['status'] = 'active';
    this.customer['accounttype'] = 'customer';
    this.customer['child'] = this.childs;
    this.customer['customer_info'] = this.customer_info;
    if (this.logo) {
      this.upload();
    }
    if (this.photo) {
      this.uploadPhoto();
    }
    if(this.customer.role) {
      delete this.customer.special_permissions;
    }
    this.userService.updateUser(this.customer.id, this.customer).then((result) => {
      this.router.navigate(['/users']);
    }, (err) => {
      console.log(err);
    });
  }
  cancel() {
    this.router.navigate(['/users']);
  }  
  
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);

    this.http.post('upload', formData)
      .map(res => res.json())
      .subscribe(res => console.log(res))
    this.customer['logo'] = files[0]['name'];
  }
  uploadPhoto() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToPhoto;

    formData.append("uploads[]", files[0], files[0]['name']);

    this.http.post('upload', formData)
      .map(res => res.json())
      .subscribe(res => console.log(res))
    this.customer['photo'] = files[0]['name'];
  }

  readUrl(event: any) {

    if (event.target.files && event.target.files[0]) {
      
      this.filesToUpload = <Array<File>>event.target.files;

      this.logo = event.target.files[0];
      
      console.log(this.logo);
      
      var reader = new FileReader();

      reader.onload = (event: any) => {

        this.logoUrl = event.target.result;

      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  readPhoto(event: any) {

    if (event.target.files && event.target.files[0]) {

      this.filesToPhoto = <Array<File>>event.target.files;

      this.photo = event.target.files[0];

      var reader = new FileReader();

      reader.onload = (event: any) => {

        this.photoUrl = event.target.result;

      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  createCompany () {
    this.currentCompanies.push(this.newCompany.name);
    this.customer.company = this.newCompany.name;
    this.newCompany.status = 'active';
    this.companyService.createCompany(this.newCompany).then((res) => {
      this.getAllCompanies();
    }, (err) => {
      console.log(err);
    });
  }

  savePermissions() {

    this.customer.special_permissions.customer = this.customerPermission;

    this.customer.special_permissions.store = this.storePermission;

    this.customer.special_permissions.order = this.orderPermission;

    this.customer.special_permissions.company = this.orderPermission;

    this.customer.special_permissions.role = this.rolePermission;

    this.customer.special_permissions.display_dashboard = this.display_dashboard;

    this.customer.special_permissions.home_url = this.home_url;

    this.customer.role = '';

    this.modalValid = false;

    this.customer.role_name = '';
  }

}
