import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHelperComponent } from './manage-helper.component';

describe('ManageHelperComponent', () => {
  let component: ManageHelperComponent;
  let fixture: ComponentFixture<ManageHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageHelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
