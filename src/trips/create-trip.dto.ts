import { IsNumber, IsString } from 'class-validator';

export class Trips {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  region: string;
  @IsNumber()
  price: number;
}
