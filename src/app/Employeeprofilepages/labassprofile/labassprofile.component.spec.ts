import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabassprofileComponent } from './labassprofile.component';

describe('LabassprofileComponent', () => {
  let component: LabassprofileComponent;
  let fixture: ComponentFixture<LabassprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabassprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabassprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
