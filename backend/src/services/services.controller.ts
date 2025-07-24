import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  getAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Service>) {
    return this.servicesService.create(body);
  }
}
