import { TestBed } from '@angular/core/testing';

import { BiticoinBRLService } from './biticoin-brl.service';

describe('BiticoinBRLService', () => {
  let service: BiticoinBRLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiticoinBRLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
