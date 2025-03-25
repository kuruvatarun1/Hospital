import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLabAssComponent } from './delete-lab-ass.component';

describe('DeleteLabAssComponent', () => {
  let component: DeleteLabAssComponent;
  let fixture: ComponentFixture<DeleteLabAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteLabAssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLabAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
