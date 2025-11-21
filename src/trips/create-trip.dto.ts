import { IsNumber, IsString, Min } from 'class-validator';

export class CreateTripDTO {
  @IsString()
  title: string;
  @IsString()
  region: string;
  @IsNumber()
  @Min(1)
  price: number;
}
