import { Injectable } from '@angular/core';
import { BitcoinBRLService } from './bitcoin-brl.service';

interface Transitions {
  timestamp: Date;
  USD: number;
  BRL: number;
  amount: number;
  initialMoney: number;
  valueBitcoin: number;
  typeTransition: string;
}

@Injectable({
  providedIn: 'root'
})


export class StoreService {
  public initialMoney = 1000;
  valueBitcoin: number;
  sellValue: number;
  transitionDate: Date;
  transitionList: Array<Transitions> = [];
  constructor(private bitcoinService: BitcoinBRLService) { }

  buy(amount: number) {
    this.initialMoney = this.initialMoney - amount;
    this.valueBitcoin = amount / this.bitcoinService.currentPrice.bpi.BRL.rate_float;
    this.transitionDate = new Date();

    this.transitionList.push({
      timestamp: this.transitionDate,
      USD: this.bitcoinService.currentPrice.bpi.USD.rate_float,
      BRL: this.bitcoinService.currentPrice.bpi.BRL.rate_float,
      amount: amount,
      initialMoney: this.initialMoney,
      valueBitcoin: this.valueBitcoin,
      typeTransition: "Compra"
    });
  }

  getValue() {
    return this.valueBitcoin;
  }

  sell() {
    this.sellValue = this.valueBitcoin * this.bitcoinService.currentPrice.bpi.BRL.rate_float;
    this.initialMoney = this.initialMoney + this.sellValue;
    this.valueBitcoin = 0;
    this.transitionList.push({
      timestamp: this.transitionDate,
      USD: this.bitcoinService.currentPrice.bpi.USD.rate_float,
      BRL: this.bitcoinService.currentPrice.bpi.BRL.rate_float,
      amount: this.sellValue,
      initialMoney: this.initialMoney,
      valueBitcoin: this.valueBitcoin,
      typeTransition: "Venda"
    });
  }
  getSellValue() {
    return this.sellValue;
  }

  update() {
    this.bitcoinService.update();
  }
}