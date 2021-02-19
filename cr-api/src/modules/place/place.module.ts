import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterDetailEntity } from './model/register-detail.entity';
import { PlaceService } from './place.service';
import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceInfoEntity } from './model/place-info.entity';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

const nestjsQueryTypeOrmModule = NestjsQueryTypeOrmModule.forFeature([
  PlaceInfoEntity,
]);

@Module({
  imports: [
    TypeOrmModule.forFeature([PlaceInfoEntity, RegisterDetailEntity]),
    nestjsQueryTypeOrmModule,
  ],
  exports: [PlaceService],
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}
