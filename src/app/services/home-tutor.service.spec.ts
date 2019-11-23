import { TestBed, inject } from '@angular/core/testing';

import { HomeTutorService } from './home-tutor.service';

describe('HomeTutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeTutorService]
    });
  });

  it('should ...', inject([HomeTutorService], (service: HomeTutorService) => {
    expect(service).toBeTruthy();
  }));
});
