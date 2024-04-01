import { PartialType } from '@nestjs/mapped-types';
import { ItemDto } from './create-sortable-list.dto';

export class UpdateSortableListDto extends PartialType(ItemDto) {}
