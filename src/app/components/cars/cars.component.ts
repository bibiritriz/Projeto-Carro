import { Component } from '@angular/core';
import { Car } from '../../Car';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CarComponent } from '../car/car.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car: Car = {} as Car;
  isUpdate = false;
  idCount = 5;

  cars: Car[] = [
    {
      id: 1,
      name: 'Corolla',
      assembler: 'Toyota',
      price: 135000,
      year: 2023
    }, {
      id: 2,
      name: 'Civic',
      assembler: 'Honda',
      price: 120000,
      year: 2022
    },
    {
      id: 3,
      name: 'Fusca',
      assembler: 'Volkswagen',
      price: 30000,
      year: 1975
    },
    {
      id: 4,
      name: 'Celta',
      assembler: 'Chevrolet',
      price: 25000,
      year: 2010
    }
  ];

  saveBook() {
    if (!this.isUpdate) {
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }
    this.car = {} as Car;
    this.isUpdate = false;
  }

  update(selectCar: Car) {
    this.car = selectCar;
    this.isUpdate = true;
  }

  remove(selectIdCar: number) {
    this.cars = this.cars.filter(car => car.id !== selectIdCar);
  }
}
