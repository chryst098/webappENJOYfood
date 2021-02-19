import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty()
  status: number;

  @ApiProperty()
  message?: string;

  @ApiProperty()
  data: T[] = [];

  constructor(status: number, data: T[], message?: string) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
