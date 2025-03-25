import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelabassComponent } from './updatelabass.component';

describe('UpdatelabassComponent', () => {
  let component: UpdatelabassComponent;
  let fixture: ComponentFixture<UpdatelabassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatelabassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatelabassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
