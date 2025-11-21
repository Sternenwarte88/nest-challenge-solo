import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTripDTO } from './create-trip.dto';
import { TripsService } from './provider/trips.service';
import { type Trip } from './trips.interface';

@Controller()
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  getTrips(): Trip[] {
    return this.tripsService.findAll();
  }

  @Post('/trips')
  createTrip(@Body() createTripDto: CreateTripDTO): Trip {
    return this.tripsService.create(createTripDto);
  }
}
