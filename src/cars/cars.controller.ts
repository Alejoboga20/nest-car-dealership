import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Audi', 'BMW', 'Lada', 'Mercedes', 'Porsche'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  findCarById(@Param('id') id: string) {
    return this.cars[+id];
  }
}
