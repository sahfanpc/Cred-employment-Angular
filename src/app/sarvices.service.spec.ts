import { TestBed } from '@angular/core/testing';

import { SarvicesService } from './sarvices.service';

describe('SarvicesService', () => {
  let service: SarvicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarvicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
