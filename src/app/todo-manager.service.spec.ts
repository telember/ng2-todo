import { TestBed, inject } from '@angular/core/testing';

import { TodoManagerService } from './todo-manager.service';

describe('TodoManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoManagerService]
    });
  });

  it('should be created', inject([TodoManagerService], (service: TodoManagerService) => {
    expect(service).toBeTruthy();
  }));
});
