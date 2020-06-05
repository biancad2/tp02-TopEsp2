import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinbrComponent } from './bitcoinbr.component';

describe('BitcoinbrComponent', () => {
  let component: BitcoinbrComponent;
  let fixture: ComponentFixture<BitcoinbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
