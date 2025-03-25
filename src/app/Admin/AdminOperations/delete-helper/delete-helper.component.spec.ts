import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHelperComponent } from './delete-helper.component';

describe('DeleteHelperComponent', () => {
  let component: DeleteHelperComponent;
  let fixture: ComponentFixture<DeleteHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteHelperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
