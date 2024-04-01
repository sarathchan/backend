import { Module } from '@nestjs/common';
import { SortableListService } from './sortable-list.service';
import { SortableListController } from './sortable-list.controller';

@Module({
  controllers: [SortableListController],
  providers: [SortableListService],
})
export class SortableListModule {}
