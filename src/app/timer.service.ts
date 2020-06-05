import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { BitcoinBRLService } from './bitcoin-brl.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timer: any;
  public counter = 0;

  constructor(public bitcoinService: BitcoinService, public bitcoinBRLService: BitcoinBRLService) { }

  startUS(ms: number) {
    if (!this.timer) {
      this.bitcoinService.start();
      this.timer = setInterval(
        () => {
          this.bitcoinService.update();
          this.counter++;
        }, ms
      )
    }
  }

  startBR(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(
        () => {
          this.bitcoinBRLService.update();
          this.counter++;
        }, ms
      )
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
