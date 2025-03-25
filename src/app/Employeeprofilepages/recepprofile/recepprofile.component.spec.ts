import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepprofileComponent } from './recepprofile.component';

describe('RecepprofileComponent', () => {
  let component: RecepprofileComponent;
  let fixture: ComponentFixture<RecepprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecepprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecepprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
