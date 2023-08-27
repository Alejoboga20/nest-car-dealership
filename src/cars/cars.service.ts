import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Focus',
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'Basic',
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

  create(car: any) {
    return car;
  }

  update(id: number, car: any) {
    return { id, car };
  }

  delete(id: number) {
    return id;
  }
}
