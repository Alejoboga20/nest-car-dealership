import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);

    return createCarDto;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carToUpdate = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Id param and body do not match');

    this.cars = this.cars.map((car) =>
      car.id === id ? { ...car, ...updateCarDto } : car,
    );

    return { ...carToUpdate, ...updateCarDto };
  }

  delete(id: string) {
    return id;
  }
}
