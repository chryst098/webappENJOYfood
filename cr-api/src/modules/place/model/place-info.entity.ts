import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RegisterDetailEntity } from './register-detail.entity';

@Entity('place_infor')
export class PlaceInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'place_type_id' })
  placeTypeId: number;

  @Column({ name: 'place_name' })
  name: string;

  @Column({ name: 'place_location_name' })
  placeLocationName: string;

  @Column({ name: 'place_lat' })
  placeLat: string;

  @Column({ name: 'place_long' })
  placeLong: string;

  @Column({ name: 'total_seats' })
  totalSeats: number;

  @Column({ name: 'available_am' })
  availableAm: string;

  @Column({ name: 'available_pm' })
  availablePm: string;

  @Column({ name: 'famous_food' })
  famousFood: string;

  @Column({ name: 'introduction' })
  introduction: string;

  @Column({ name: 'rating_star' })
  ratingStart: number;

  @Column({ name: 'total_view' })
  totalView: number;

  @Column({ name: 'image' })
  image: string;

  @Column({ name: 'value' })
  value: number;

  @OneToMany(() => RegisterDetailEntity, (register) => register.place)
  registers: RegisterDetailEntity[];
}
