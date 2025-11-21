import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './provider/trips.service';

@Module({
  controllers: [TripsController],
  providers: [TripsService]
})
export class TripsModule {}
