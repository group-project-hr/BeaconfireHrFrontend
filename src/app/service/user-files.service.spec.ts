import { TestBed } from '@angular/core/testing';

import { UserFilesService } from './user-files.service';

describe('UserFilesService', () => {
  let service: UserFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
