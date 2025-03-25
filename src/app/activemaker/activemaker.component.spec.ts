import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivemakerComponent } from './activemaker.component';

describe('ActivemakerComponent', () => {
  let component: ActivemakerComponent;
  let fixture: ComponentFixture<ActivemakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivemakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
