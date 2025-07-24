import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class Seeder implements OnModuleInit {
  constructor(
    @InjectRepository(Service)
    private readonly repo: Repository<Service>,
  ) {}

  async onModuleInit() {
    const count = await this.repo.count();
    if (count === 0) {
      const today = new Date();
      await this.repo.save([
        { customerName: 'Juan Pérez', serviceType: 'Limpieza', scheduledAt: today, price: 50, status: 'completed' },
        { customerName: 'Ana Torres', serviceType: 'Reparación', scheduledAt: today, price: 120, status: 'pending' },
        { customerName: 'Pedro López', serviceType: 'Mantención', scheduledAt: today, price: 80, status: 'completed' },
        { customerName: 'Carla Ruiz', serviceType: 'Instalación', scheduledAt: today, price: 150, status: 'cancelled' },
        { customerName: 'Luis Soto', serviceType: 'Revisión', scheduledAt: today, price: 40, status: 'pending' },
        { customerName: 'María Díaz', serviceType: 'Limpieza', scheduledAt: today, price: 60, status: 'completed' },
        { customerName: 'Ricardo Vera', serviceType: 'Reparación', scheduledAt: today, price: 110, status: 'completed' },
        { customerName: 'Patricia Gómez', serviceType: 'Instalación', scheduledAt: today, price: 200, status: 'cancelled' },
        { customerName: 'Héctor Castillo', serviceType: 'Revisión', scheduledAt: today, price: 70, status: 'pending' },
        { customerName: 'Sofía Morales', serviceType: 'Limpieza', scheduledAt: today, price: 55, status: 'completed' },
      ]);
      console.log('Seed: 10 servicios insertados');
    }
  }
}
