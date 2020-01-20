import { TestBed } from '@angular/core/testing';

import { GatewayGithubService } from './gateway-github.service';

describe('GatewayGithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GatewayGithubService = TestBed.get(GatewayGithubService);
    expect(service).toBeTruthy();
  });
});
