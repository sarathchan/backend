import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SortableListModule } from './sortable-list/sortable-list.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ SortableListModule],
})
export class AppModule {}
