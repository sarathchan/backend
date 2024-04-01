import { Test, TestingModule } from '@nestjs/testing';
import { SortableListController } from './sortable-list.controller';
import { SortableListService } from './sortable-list.service';

describe('SortableListController', () => {
  let controller: SortableListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SortableListController],
      providers: [SortableListService],
    }).compile();

    controller = module.get<SortableListController>(SortableListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
