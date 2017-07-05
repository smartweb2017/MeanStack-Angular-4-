import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http
} from '@angular/http'
import {
  EmailValidator
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  RoleService
} from '../../../../services/role.service';
import {
  CompanyService
} from '../../../../services/company.service';
import {
  UsersService
} from '../../../../services/users.service';
declare var $: any;
declare var toastr: any;
@Component({
  selector: 'customer-user',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']

})
export class CustomerComponent implements OnInit {

  filesToLogo: Array<File> = [];

  filesToPhoto: Array<File> = [];

  confirmPassword: any;

  logo: File;

  photo: File;

  display_dashboard: any;

  home_url: any;

  public customer: any;

  public user_info: any;

  public customer_info: any;

  customerPermission: any;

  storePermission: any;

  orderPermission: any;

  rolePermission: any;

  companyPermission: any;

  currentCompanies: any;

  roles: any;

  newCompany: any;

  users = [];

  public logoUrl: string;

  public photoUrl: string;

  public modalValid = true;

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
  user: any;
  constructor(private http: Http, private router: Router, private roleService: RoleService, private companyService: CompanyService, private userService: UsersService) { }

  ngOnInit() {
    //Init current roles
    this.roles = [];
    //Get Current User
    this.user = JSON.parse(localStorage.getItem('user'));
    //Init Special Elements
    this.newCompany = {
      name: '',
      status: ''
    };   

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
    
    this.logoUrl = 'assets/images/default-logo.jpg';
    this.photoUrl = 'assets/images/photo.jpg';
    //Init New Customer User
    this.customer = {
      username: '',
      password: '',
      company: '',
      role_name: '',
      parent: '',
      account_email: '',
      special_permissions: {}
    };
    //Init New Customer User info
    this.user_info = {
      email: '',
      phone: '',
      mobile: ''
    };

    //Init New Customer Customer Info
    this.customer_info = {
      position: '',
      prefered_contact: '',
      address: {
        address1: '',
        address2: ''
      },
      city: '',
      region: '',
      postcode: '',
      key_contact: '',
      customer_type: ''
    };

    //Get Current Companies
    this.getAllCompanies();
    //Get Current Roles
    this.getAllRoles();
    //Get Current Users
    this.getAllUsers();

    //Init UI elements 
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-bottom-right",
        "closeButton": true,
        "progressBar": true
    };
  }

  //Get All Users
  getAllUsers() {

    this.userService.getAllUsers().then((res) => {

      for (let i = 0; i < Object.keys(res).length; i++) {

        if (res[i].accounttype === 'customer' ) {

          this.users.push(res[i]);

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
      console.log(res);
      for(let i = 0; i<Object.keys(res).length; i++ ) {
        if(res[i].status === true) {
          this.currentCompanies.push(res[i]);
        }        
      }
      console.log(this.currentCompanies);
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

    this.customer.user_info.phone = this.user_info.phone;

    this.customer.user_info.mobile = this.user_info.mobile;

    this.customer['status'] = true;

    this.customer['accounttype'] = 'customer';

    this.customer['customer_info'] = this.customer_info;
   
    if (this.filesToLogo.length !== 0) {

      this.uploadLogo();

    }
    if (this.filesToPhoto.length !== 0) {

      this.uploadPhoto();

    }
    this.userService.createNewUser(this.customer).then((result) => {
      
      if(!result['success']) {
        toastr.error('Sorry, you were unable to create a user because the username is already being used please try again');
      } else {
        toastr.success('Success - New Cutomer Created!!!');
        this.router.navigate(['/users']);
      }      

    }, (err) => {

      console.log(err);
    });

  }
  cancel() {

    this.router.navigate(['/users']);

  }

  uploadLogo() {

    const formData: any = new FormData();

    const files: Array<File> = this.filesToLogo;

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

      this.filesToLogo = <Array<File>>event.target.files;

      this.logo = event.target.files[0];

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
    this.newCompany.status = 'active';
    this.companyService.createCompany(this.newCompany).then((res) => {
      this.currentCompanies.push(res);      
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

    this.customer.special_permissions.company = this.companyPermission;

    this.customer.special_permissions.display_dashboard = this.display_dashboard;

    this.customer.special_permissions.home_url = this.home_url;

    this.modalValid = false;

    this.customer.role_name = '';
  }

}

