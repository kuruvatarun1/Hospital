import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecpComponent } from './updaterecp.component';

describe('UpdaterecpComponent', () => {
  let component: UpdaterecpComponent;
  let fixture: ComponentFixture<UpdaterecpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdaterecpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdaterecpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
