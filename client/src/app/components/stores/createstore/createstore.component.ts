import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../../services/stores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.css']
})
export class CreatestoreComponent implements OnInit {

 public store : any;
 public store_info : any;
 regionData = { "Northland":["Far North", "Kaipara", "Whangarei"],
            "Auckland": ["Auckland City", "Franklin", "Hauraki Gulf Islands", "Manukau City", "North Shore City", "Papakura", "Rodney", "Waiheke Island", "Waitakere City"],
            "Bay Of Plenty": ["Kawerau", "Opotiki", "Rotorua", "Tauranga", "Wetern Bay Of Plenty", "Whakatane"],
            "Coromandel": ["Thames-Coromandel"],
            "Waikato": ["Hamilton", "Hauraki", "Matamata-Piako", "Otorohanga", "South Waikato", "Waikato", "Waipa", "Waitomo"],
            "Gisborne": ["Gisborne"],
            "Central North Island" : ["Ruapehu", "Taupo"],
            "Hawkes Bay" : ["Central Hawkes Bay", "Hastings", "Napier City", "Wairoa"],
            "Taranaki" : ["New Plymouth", "South Taranaki", "Stratford"],
            "Manawatu / Wanganui ": ["Horowhenua", "Manawatu", "Palmerston North City", "Rangitikei", "Tararua", "Wanganui"],
            "Wairarapa": ["Carterton", "Masterton", "South Wairarapa"],
            "Wellington": ["Kapiti", "Lower Hutt City", "Porirua City", "Upper Hutt City", "Wellington City"],
            "Marlborough": ["Kaikoura", "Marlborough"],
            "Nelson & Bays": ["Nelson", "Tasman"],
            "West Coast": ["Buller", "Grey", "Westland"],
            "Canterbury": ["Ashburton", "Banks Peninsula", "Christchurch City", "Hurunui", "Mackenzie", "Selwyn", "Timaru", "Waimakariri", "Waimate"],
            "Central Otago / Lakes District": ["Central Otago", "Queenstown", "Wanaka"],
            "Otago" : ["Clutha", "Dunedin City", "Waitaki"],
            "Southland" : ["Gore", "Invercargill City", "Southland"],
            "Pacific Islands" : ["Chatham Islands", "Fiji", "New Caledonia", "Rarotonga", "Samoa", "Tonga", "Vanuatu"]

  }
  regions = Object.keys(this.regionData);
  cities : any;
  stores = [];

  constructor(private route: ActivatedRoute, private router: Router, private storeService : StoresService) { }

  ngOnInit() {
    this.store = {
      store_title: '',
      parent: '',
      child: [],
      status: Boolean
    };
    this.store_info = {
      phone: '',
      email: '',
      fax: '',
      address: {
        address1: '',
        address2: ''
      },
      city: '',
      region: '',
      postcode: '',
      country: ''
    };

    this.getAllStores();

  }

  //Get All Stores
  getAllStores() {
    this.storeService.getAllStores().then((res) => {
      // this.stores = res;
      for(let i=0; i<Object.keys(res).length; i++) {
        this.stores.push(res[i]);
      }
    }, (err) => {
      console.error(err);
    });
  }

  //Select Region
  selectRegion(event) {
    let region = event.target.value;    
    this.cities = this.regionData[region];
  }

  // Create New Store
  onSubmit() {
    this.store['store_info'] = this.store_info;
    this.store.status = true;
    this.storeService.saveStore(JSON.stringify(this.store)).then((result) => {      
      this.router.navigate(['/stores']);
    }, (err) => {
      console.log(err);
    });
  }

  //Cancel Store Create
  cancel(){
  	this.router.navigate(['/stores']);
  }
}
