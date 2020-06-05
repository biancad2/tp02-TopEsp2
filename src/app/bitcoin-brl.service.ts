import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    USD: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    };
    BRL: {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinBRLService {
  currentPrice: Response;
  lastUpdate: Date;
  constructor(private http: HttpClient) { }
  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe(data => {
        this.lastUpdate = new Date();
        this.currentPrice = data;
      });
  }
}
