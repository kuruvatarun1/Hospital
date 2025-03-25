import { TestBed } from '@angular/core/testing';

import { ManaglabassService } from './managlabass.service';

describe('ManaglabassService', () => {
  let service: ManaglabassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManaglabassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
