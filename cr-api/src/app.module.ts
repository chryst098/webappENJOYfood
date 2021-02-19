import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { PlaceModule } from './modules/place/place.module';
import { PlaceInfoEntity } from './modules/place/model/place-info.entity';
import { RegisterDetailEntity } from './modules/place/model/register-detail.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forFeature([PlaceInfoEntity, RegisterDetailEntity]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('typeOrmConfig'),
      inject: [ConfigService],
    }),
    PlaceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
