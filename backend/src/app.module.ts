import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './services/service.entity';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER || 'postgres', //reemplazar por el usuario de tu base de datos si es necesario.
      password: process.env.DB_PASS || '1234', //reemplazar por la contraseña de tu base de datos si es necesario.
      database: process.env.DB_NAME || 'aleurca_mario_test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServicesModule,
  ],
})
export class AppModule {}
