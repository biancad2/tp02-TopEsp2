import { TestBed } from '@angular/core/testing';

import { BitcoinBRLService } from './bitcoin-brl.service';

describe('BitcoinBRLService', () => {
  let service: BitcoinBRLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinBRLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
