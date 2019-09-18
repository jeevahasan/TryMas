import { TestBed } from '@angular/core/testing';

import { LinkOperatorService } from './link-operator.service';

describe('LinkOperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkOperatorService = TestBed.get(LinkOperatorService);
    expect(service).toBeTruthy();
  });
});
