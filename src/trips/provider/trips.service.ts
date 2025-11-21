import { Injectable } from '@nestjs/common';
import { CreateTripDTO } from '../create-trip.dto';
import { Trip } from '../trips.interface';

@Injectable()
export class TripsService {
  private trips: Trip[] = [];

  public findall(): Trip[] {
    return this.trips;
  }

  public create(createTripDto: CreateTripDTO): Trip {
    const newTrip: Trip = {
      id: this.trips.length + 1,
      price: createTripDto.price,
      region: createTripDto.region,
      title: createTripDto.title,
    };
    this.trips.push(newTrip);
    return newTrip;
  }
}
