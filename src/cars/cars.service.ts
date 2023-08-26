import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      make: 'Toyota',
    },
    {
      id: 2,
      make: 'Ford',
    },
    {
      id: 3,
      make: 'BMW',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);

    return car;
  }
}
