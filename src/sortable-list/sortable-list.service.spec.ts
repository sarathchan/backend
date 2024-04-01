import { Test, TestingModule } from '@nestjs/testing';
import { SortableListService } from './sortable-list.service';

describe('SortableListService', () => {
  let service: SortableListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortableListService],
    }).compile();

    service = module.get<SortableListService>(SortableListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
