import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Seeder } from './seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServicesService, Seeder],
  controllers: [ServicesController],
})
export class ServicesModule {}
