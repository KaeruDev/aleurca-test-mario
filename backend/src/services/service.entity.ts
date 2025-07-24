import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  serviceType: string;

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

  @Column('decimal')
  price: number;

  @Column({ type: 'enum', enum: ['pending', 'completed', 'cancelled'] })
  status: 'pending' | 'completed' | 'cancelled';
}
