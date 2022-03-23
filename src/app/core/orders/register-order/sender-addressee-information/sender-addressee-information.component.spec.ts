import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderAddresseeInformationComponent } from './sender-addressee-information.component';

describe('SenderAddresseeInformationComponent', () => {
  let component: SenderAddresseeInformationComponent;
  let fixture: ComponentFixture<SenderAddresseeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderAddresseeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderAddresseeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
