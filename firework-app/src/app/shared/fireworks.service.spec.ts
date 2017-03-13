import { TestBed, inject } from '@angular/core/testing';

import { FireworksService } from './fireworks.service';

describe('FireworksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireworksService]
    });
  });

  it('should ...', inject([FireworksService], (service: FireworksService) => {
    expect(service).toBeTruthy();
  }));
});
