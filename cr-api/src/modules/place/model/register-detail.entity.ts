import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PlaceInfoEntity } from './place-info.entity';

@Entity('register_detail')
export class RegisterDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'place_id' })
  placeId: number;

  @Column({ name: 'table_number' })
  tableNumber: number;

  @Column({ name: 'time_register' })
  timeRegister: string;

  @Column({ name: 'total_peoples' })
  totalPeoples: number;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @CreateDateColumn({
    name: 'created_at',
    default: `now()`,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    default: `now()`,
  })
  updatedAt: Date;

  @ManyToOne(() => PlaceInfoEntity, (place) => place.registers)
  @JoinColumn({ name: 'place_id' })
  place: PlaceInfoEntity;
}
