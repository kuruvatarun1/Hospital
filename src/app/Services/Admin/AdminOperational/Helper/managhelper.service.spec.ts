import { TestBed } from '@angular/core/testing';

import { ManaghelperService } from './managhelper.service';

describe('ManaghelperService', () => {
  let service: ManaghelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManaghelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
