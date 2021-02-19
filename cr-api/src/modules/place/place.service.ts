import { BadRequestException, Injectable } from '@nestjs/common';
import { PlaceInfoEntity } from './model/place-info.entity';
import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { Query } from '@nestjs-query/core/dist/src/interfaces';
import { RegisterDetailEntity } from './model/register-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDetailDto } from './dto/register-detail.dto';

@Injectable()
export class PlaceService {
  constructor(
    @InjectQueryService(PlaceInfoEntity)
    private readonly queryService: QueryService<PlaceInfoEntity>,
    @InjectRepository(RegisterDetailEntity)
    private orderRepository: Repository<RegisterDetailEntity>,
    @InjectRepository(PlaceInfoEntity)
    private placeRepository: Repository<PlaceInfoEntity>,
  ) {}

  loadPlaces(query?: Query<PlaceInfoEntity>): Promise<PlaceInfoEntity[]> {
    return this.queryService.query(query);
  }

  async orderPlace(
    registerRequest: RegisterDetailDto,
  ): Promise<RegisterDetailEntity> {
    if (!(await this.placeRepository.findOne(registerRequest.placeId))) {
      throw new BadRequestException([
        `Place with id ${registerRequest.placeId} is not found`,
      ]);
    }
    return this.orderRepository.save(registerRequest);
  }

  getOrder(orderId: number): Promise<RegisterDetailEntity> {
    return this.orderRepository.findOne(orderId);
  }
}
