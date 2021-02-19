import { Controller, Get, Post, HttpStatus, Param, Body } from '@nestjs/common';
import { PlaceService } from './place.service';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse as SwaApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { ApiResponseDto } from '../../common/api-response.dto';
import { PlaceInfoEntity } from './model/place-info.entity';
import { Query as dQuery } from '@nestjs-query/core/dist/src/interfaces';
import { RegisterDetailEntity } from './model/register-detail.entity';
import { RegisterDetailDto } from './dto/register-detail.dto';

@Controller()
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @ApiOperation({
    summary: 'Load all of places',
    description: 'Load all of places',
  })
  @SwaApiResponse({
    status: 200,
    description: 'Return all places',
    type: ApiResponseDto,
  })
  @Post('/places')
  async getPlace(
    @Body() query?: dQuery<PlaceInfoEntity>,
  ): Promise<ApiResponseDto<PlaceInfoEntity>> {
    const places = await this.placeService.loadPlaces(query);
    return Promise.resolve(new ApiResponseDto(HttpStatus.OK, places));
  }

  @ApiOperation({
    summary: 'Order a place by given id',
    description: 'Order a place by given id',
  })
  @SwaApiResponse({
    status: 200,
    description: 'Return a detail of order',
    type: ApiResponseDto,
  })
  @Post('/order')
  async orderPlace(
    @Body() registerRequest: RegisterDetailDto,
  ): Promise<ApiResponseDto<RegisterDetailEntity>> {
    const order = await this.placeService.orderPlace(registerRequest);
    return Promise.resolve(new ApiResponseDto(HttpStatus.OK, [order]));
  }

  @ApiOperation({
    summary: 'Get order detail by given id',
    description: 'Get order detail by given id',
  })
  @SwaApiResponse({
    status: 200,
    description: 'Return a detail of order',
    type: ApiResponseDto,
  })
  @Get('/order/:id')
  async getOrder(
    @Param('id') id: number,
  ): Promise<ApiResponseDto<RegisterDetailEntity>> {
    const order = await this.placeService.getOrder(id);
    return Promise.resolve(new ApiResponseDto(HttpStatus.OK, [order]));
  }
}
