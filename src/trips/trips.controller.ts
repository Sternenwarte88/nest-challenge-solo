import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { DataWrapperInterceptor } from 'src/interceptors/data-wrapper/data-wrapper.interceptor';
import { CreateTripDTO } from './create-trip.dto';
import { AuthGuard } from './guards/auth/auth.guard';
import { TripsService } from './provider/trips.service';
import { type Trip } from './trips.interface';

@Controller()
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  @UseInterceptors(DataWrapperInterceptor)
  getTrips(): Trip[] {
    return this.tripsService.findAll();
  }

  @UseInterceptors(DataWrapperInterceptor)
  @UseGuards(AuthGuard)
  @Post('/trips')
  createTrip(@Body() createTripDto: CreateTripDTO): Trip {
    return this.tripsService.create(createTripDto);
  }
}
