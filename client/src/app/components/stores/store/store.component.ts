import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../../services/stores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store :any = {};
  store_info :any = {};
  address : any = {};
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

  constructor(private route: ActivatedRoute, private router: Router, private storeService : StoresService) { }

  ngOnInit() {
    this.getStore(this.route.snapshot.params['id']);
  }

  selectRegion(event) {
    let region = event.target.value;    
    this.cities = this.regionData[region];
  }

  getStore(id) {
    this.storeService.getStore(id).then((res) => {
      this.store = res;
      this.store_info = res['store_info'];
      this.address = this.store_info['address'];
    }, (err) => {
      console.log(err);
    });
  }
    cancel(){
  	this.router.navigate(['/stores']);
  }
  onSubmit() {
    this.store_info['address'] = this.address;
    this.store['store_info'] = this.store_info;
    this.storeService.updateStore(this.store['_id'],JSON.stringify(this.store)).then((result) => {      
      this.router.navigate(['/stores']);
    }, (err) => {
      console.log(err);
    });
  }

}
