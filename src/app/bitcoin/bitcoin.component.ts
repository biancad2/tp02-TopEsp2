
import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
//import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  constructor(public bitcoinService: BitcoinService) {
    //this.logger.add('ListBitcoinComponent constructed');
  }

  ngOnInit() {
    //this.logger.add('ListBitcoinComponent initialized');
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
    //this.logger.add('ListBitcoinComponent rates updated');
  }
}