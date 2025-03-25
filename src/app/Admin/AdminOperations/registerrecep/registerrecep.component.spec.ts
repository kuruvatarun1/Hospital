import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrecepComponent } from './registerrecep.component';

describe('RegisterrecepComponent', () => {
  let component: RegisterrecepComponent;
  let fixture: ComponentFixture<RegisterrecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterrecepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterrecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
