import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public initialMoney = 1000; 
  
  constructor(private bitcoinService: BitcoinService) { }

  buy(amount: number){
    this.initialMoney= this.initialMoney - amount;
  }

  sell(){

  }
}
