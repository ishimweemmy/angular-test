import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristInformationComponent } from './tourist-information.component';

describe('TouristInformationComponent', () => {
  let component: TouristInformationComponent;
  let fixture: ComponentFixture<TouristInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristInformationComponent]
    });
    fixture = TestBed.createComponent(TouristInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
