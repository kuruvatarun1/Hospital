import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperprofileComponent } from './helperprofile.component';

describe('HelperprofileComponent', () => {
  let component: HelperprofileComponent;
  let fixture: ComponentFixture<HelperprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelperprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelperprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
