import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get('/:id')
  gerCarById(@Param('id') id: string) {
    return { car: this.cars[+id] };
  }
}
