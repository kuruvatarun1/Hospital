import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLabAssComponent } from './manage-lab-ass.component';

describe('ManageLabAssComponent', () => {
  let component: ManageLabAssComponent;
  let fixture: ComponentFixture<ManageLabAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageLabAssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageLabAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
