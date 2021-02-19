import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';

export class RegisterDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  placeId: number;

  @ApiProperty()
  @IsNotEmpty()
  tableNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  timeRegister: string;

  @ApiProperty()
  @IsNotEmpty()
  @Min(1)
  totalPeoples: number;

  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;
}
