import { Component, OnInit } from '@angular/core';
import {BitcoinBRLService} from '../bitcoin-brl.service';
import {TimerService} from '../timer.service';

@Component({
  selector: 'app-bitcoinbr',
  templateUrl: './bitcoinbr.component.html',
  styleUrls: ['./bitcoinbr.component.css']
})
export class BitcoinBrComponent implements OnInit {
  

  constructor(public bitcoinBRLService: BitcoinBRLService, public timerService: TimerService) { }

  ngOnInit() {
    this.update();
  }

  getCurrentPrice(){
    return this.bitcoinBRLService.currentPrice;
  }
  update(){
    this.bitcoinBRLService.update();
    this.timerService.startBR(30000);
  }

  
}