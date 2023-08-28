import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  populateDB() {
    return { CARS_SEED, BRANDS_SEED };
  }
}
