import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterhelperComponent } from './registerhelper.component';

describe('RegisterhelperComponent', () => {
  let component: RegisterhelperComponent;
  let fixture: ComponentFixture<RegisterhelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterhelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterhelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
