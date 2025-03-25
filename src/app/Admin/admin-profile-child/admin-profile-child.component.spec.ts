import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileChildComponent } from './admin-profile-child.component';

describe('AdminProfileChildComponent', () => {
  let component: AdminProfileChildComponent;
  let fixture: ComponentFixture<AdminProfileChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProfileChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfileChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
