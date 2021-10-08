import { TestBed } from '@angular/core/testing';

import { ChatitaserviceService } from './chatitaservice.service';

describe('ChatitaserviceService', () => {
  let service: ChatitaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatitaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
