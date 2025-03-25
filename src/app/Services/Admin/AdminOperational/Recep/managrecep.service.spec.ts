import { TestBed } from '@angular/core/testing';

import { ManagrecepService } from './managrecep.service';

describe('ManagrecepService', () => {
  let service: ManagrecepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagrecepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
