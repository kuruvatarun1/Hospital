import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecepComponent } from './manage-recep.component';

describe('ManageRecepComponent', () => {
  let component: ManageRecepComponent;
  let fixture: ComponentFixture<ManageRecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageRecepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageRecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
