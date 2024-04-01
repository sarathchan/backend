// src/sortable-list/sortable-list.controller.ts

import { Controller, Get, Put, Body } from '@nestjs/common';
import { SortableListService } from './sortable-list.service';
import { ItemDto } from './dto/create-sortable-list.dto';

@Controller('sortable-list')
export class SortableListController {
  constructor(private readonly sortableListService: SortableListService) {}

  @Get()
  getItems(): ItemDto[] {
    return this.sortableListService.getItems();
  }

  @Put()
  updateItems(@Body() items: ItemDto[]): ItemDto[] {
    return this.sortableListService.updateItems(items);
  }
}
