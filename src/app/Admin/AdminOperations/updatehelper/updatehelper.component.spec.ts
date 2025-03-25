import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehelperComponent } from './updatehelper.component';

describe('UpdatehelperComponent', () => {
  let component: UpdatehelperComponent;
  let fixture: ComponentFixture<UpdatehelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatehelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatehelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
