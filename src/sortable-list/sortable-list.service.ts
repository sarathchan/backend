// src/sortable-list/sortable-list.service.ts

import { Injectable } from '@nestjs/common';
import { ItemDto } from './dto/create-sortable-list.dto';

@Injectable()
export class SortableListService {
  private items: ItemDto[] = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
    { id: 'item-4', content: 'Item 4' },
    { id: 'item-5', content: 'Item 5' },
  ];

  getItems(): ItemDto[] {
    return this.items;
  }

  updateItems(newItems: ItemDto[]): ItemDto[] {
    this.items = newItems;
    return this.items;
  }
}
