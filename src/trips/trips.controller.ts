import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateTripDTO } from './create-trip.dto';
import { AuthGuard } from './guards/auth/auth.guard';
import { TripsService } from './provider/trips.service';
import { type Trip } from './trips.interface';

@Controller()
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  getTrips(): Trip[] {
    return this.tripsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('/trips')
  createTrip(@Body() createTripDto: CreateTripDTO): Trip {
    return this.tripsService.create(createTripDto);
  }
}
