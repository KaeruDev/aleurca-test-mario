import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly repo: Repository<Service>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  create(data: Partial<Service>) {
    const service = this.repo.create(data);
    return this.repo.save(service);
  }
}
