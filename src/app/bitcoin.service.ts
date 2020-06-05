import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {

    [key in 'USD' | 'GBP' | 'EUR']: {
      symbol: string;
      description; string;
      rate_float: number;
      rate: string;
    };
  };
}

interface PriceUpdate {
  timestamp: Date;
  USD: number;
  GBP: number;
  EUR: number;
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  currentPrice: Response;
  lastUpdate: Date;

  mountList: Array<PriceUpdate> = [];
  updateList: Array<PriceUpdate>=[];
  constructor(private http: HttpClient) { }
  start(){
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
      this.mountList.push({
        timestamp: this.lastUpdate,
        USD: this.currentPrice.bpi.USD.rate_float,
        GBP: this.currentPrice.bpi.GBP.rate_float,
        EUR: this.currentPrice.bpi.EUR.rate_float
      });
    })
  }
  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe(data => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
        for(let teste of this.mountList){
          if(this.currentPrice.bpi.USD.rate_float !== this.mountList.slice(-1)[0].USD || 
          this.currentPrice.bpi.USD.rate_float !== this.mountList.slice(-1)[0].GBP || 
          this.currentPrice.bpi.USD.rate_float !== this.mountList.slice(-1)[0].EUR ){
            this.mountList.push({
              timestamp: this.lastUpdate,
              USD: this.currentPrice.bpi.USD.rate_float,
              GBP: this.currentPrice.bpi.GBP.rate_float,
              EUR: this.currentPrice.bpi.EUR.rate_float
            });
          }
        }
        
       
      });
  }
}
