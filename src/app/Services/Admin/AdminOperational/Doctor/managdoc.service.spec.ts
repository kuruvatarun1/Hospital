import { TestBed } from '@angular/core/testing';

import { ManagdocService } from './managdoc.service';

describe('ManagdocService', () => {
  let service: ManagdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
