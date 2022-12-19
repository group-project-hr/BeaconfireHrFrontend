import { TestBed } from '@angular/core/testing';

import { HouseManagementService } from './house-management.service';

describe('HouseManagementService', () => {
  let service: HouseManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
