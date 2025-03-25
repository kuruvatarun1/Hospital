import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecepComponent } from './delete-recep.component';

describe('DeleteRecepComponent', () => {
  let component: DeleteRecepComponent;
  let fixture: ComponentFixture<DeleteRecepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteRecepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteRecepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
