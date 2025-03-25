import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileMainComponent } from './admin-profile-main.component';

describe('AdminProfileMainComponent', () => {
  let component: AdminProfileMainComponent;
  let fixture: ComponentFixture<AdminProfileMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProfileMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProfileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
