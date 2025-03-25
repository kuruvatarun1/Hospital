import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdocComponent } from './registerdoc.component';

describe('RegisterdocComponent', () => {
  let component: RegisterdocComponent;
  let fixture: ComponentFixture<RegisterdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterdocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
