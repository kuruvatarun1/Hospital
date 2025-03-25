import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterlabassComponent } from './registerlabass.component';

describe('RegisterlabassComponent', () => {
  let component: RegisterlabassComponent;
  let fixture: ComponentFixture<RegisterlabassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterlabassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterlabassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
