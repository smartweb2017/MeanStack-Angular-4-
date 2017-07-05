import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  rows = [];
  temp = [];
  oinvoices = [];
  invoices = [];
  selectedOrders = [];
  stores = ["All"];
  villages = ["All"];
  user: any;
  fType = "All";
  fStore = "All";
  fVillage = "All";
  sumAmount = 0;
  sumBalance = 0;

  constructor( private router: Router) {
    this.fetch(data => {
      let xml = $.parseXML(data).getElementsByTagName("row");
      // console.log(xml);
      for( let i=0; i< xml.length; i ++) {
        let InvNum = $(xml[i]).find("InvNum")[0].textContent;
        let InvDate = $(xml[i]).find("DateInvoiced")[0].textContent;
        let Store = $(xml[i]).find("StoreName")[0].textContent;
        let Village = $(xml[i]).find("Village")[0].textContent;
        let Balance = $(xml[i]).find("Balance")[0].textContent;
        let AmountToPay = $(xml[i]).find("Balance")[0].textContent;

        let invoice = {};
        invoice['invnum'] = InvNum;
        invoice['invdate'] = InvDate;
        invoice['store'] = Store;
        invoice['village'] = Village;
        invoice['balance'] = Balance;
        invoice['amounttopay'] = Balance;
        invoice['checked'] = false;

        var sExist = false, vExist = false;
        for(let j = 0; j < this.stores.length; j++) if(this.stores[j] == Store) sExist = true;
        if(!sExist) this.stores.push(Store);

        for(let j = 0; j < this.villages.length; j++) if(this.villages[j] == Village) vExist = true;
        if(!vExist) this.villages.push(Village);

        this.invoices.push(invoice);
        this.oinvoices.push(invoice);
      }
      
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/summerset.xml');

    req.onload = () => {
      cb(req.response);
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value;

    //filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }

  filter(event){
    console.log('filter function');
    this.invoices = [];
    for(let i = 0; i < this.oinvoices.length; i++){
      let invoice = this.oinvoices[i];
      if(this.fVillage != "All" && this.fVillage != invoice.village) continue;
      if(this.fStore != "All" && this.fStore != invoice.store) continue;
      if(this.fType != "All" && this.fType !="Order") continue;

      this.invoices.push(invoice);
    }
    this.calculateSum();
  }

  createOrder() {
    this.router.navigate(['/orders/create']);
  }

  calculateSum(){
    this.sumAmount = 0;
    this.sumBalance = 0;

    for(let i = 0; i < this.invoices.length; i++){
      let invoice = this.invoices[i];
      if(invoice.checked){
        if(isNaN(parseInt(invoice.amounttopay))){
          this.sumAmount += 0;
        } else {
          this.sumAmount += parseInt(invoice.amounttopay);
        }
        this.sumBalance += parseInt(invoice.balance);
      }
    }
  }

  selectElement(event) {
    console.log(event.target.value);

    for (let i=0; i<this.invoices.length; i++ ) {
      if(this.invoices[i].invnum == event.target.value) {
        this.invoices[i].checked = event.target.checked;
        console.log(i);
        console.log(event.target.value);
      }
    }

    this.calculateSum();
  }
}
