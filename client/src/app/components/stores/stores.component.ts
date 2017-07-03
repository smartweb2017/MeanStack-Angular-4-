import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { StoresService } from '../../services/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores: any;

  store_info: any;

  user: any;

  selectedStores: any;

  filteredStores: any;

  filterRegion: any;

  filterCity: any;

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

  constructor(private storeService: StoresService) {

  }

  ngOnInit() {

    this.selectedStores = [];

    this.getAllStores();

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getAllStores() {

    this.storeService.getAllStores().then((res) => {

      this.stores = res;
      

      this.filteredStores = this.stores;

    }, (err) => {

      console.log(err);

    });
  }
  selectRegion(event) {
    let region = event.target.value;
    this.cities = this.regionData[region];
    let temp = [];
    if (region === '') {
      this.filteredStores = this.stores;
    } else {
      for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].store_info.region === region) {
          temp.push(this.stores[i]);
        }
      }
      this.filteredStores = temp;
    }

  }

  selectCity(event) {
    let city = event.target.value;
    let temp = [];
    if (city === '') {
      if (this.filterRegion === '') {
        this.filteredStores = this.stores;
      } else {
        for (let i = 0; i < this.stores.length; i++) {

          if (this.stores[i].store_info.region === this.filterRegion) {
            temp.push(this.stores[i]);

          }

        }
        this.filteredStores = temp;
      }


    } else {
      for (let i = 0; i < this.stores.length; i++) {
        if (this.stores[i].store_info.city == city) {
          temp.push(this.stores[i]);
        }
      }
      this.filteredStores = temp; 
    }
  }

  selectElement(event) {

    if (event.target.checked) {

      this.selectedStores.push(event.target.value);

    } else {

      for (let i = 0; i < this.selectedStores.length; i++) {

        if (this.selectedStores[i] === event.target.value) {

          this.selectedStores.splice(i, 1);
        }
      }
    }
  }

  deleteStores() {
    this.storeService.deleteStore(this.selectedStores).then((res) => {
      this.getAllStores();
    }, (err) => {
      console.error(err);
    });
  }

  deactivateStores() {
    this.storeService.deactivateStore(this.selectedStores).then((res) => {

      this.getAllStores();

    }, (err) => {
      console.error(err);
    });
  }

  reactivateStores() {
    this.storeService.reactivateStore(this.selectedStores).then((res) => {

      this.getAllStores();

    }, (err) => {
      console.error(err);
    });
  }





}
