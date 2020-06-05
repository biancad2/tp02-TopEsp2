import { Injectable } from '@angular/core';
import {BitcoinService} from './bitcoin.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timer: any;
  public counter = 0;

  constructor(public bitcoinService: BitcoinService) { }

  start(ms: number) {
    this.bitcoinService.start();
    if (!this.timer) {
      this.timer = setInterval(
        () => {
          this.bitcoinService.update();
          this.counter++;
          
        }, ms
      )
    }
  }

  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer=null;
    }
  }
}
