import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Focus',
    },
    {
      id: uuid(),
      brand: 'BMW',
      model: 'Basic',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);

    return car;
  }

  create(car: any) {
    return car;
  }

  update(id: string, car: any) {
    return { id, car };
  }

  delete(id: string) {
    return id;
  }
}
