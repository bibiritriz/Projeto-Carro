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
  idCount = 2;

  cars: Car[] = [
    {
      id: 1,
      name: 'Corolla',
      assembler: 'Toyota',
      price: 135000,
      year: 2023
    }
  ];

  saveBook() {
    this.car.id = this.idCount;
    this.idCount++;
    this.cars.push(this.car);
    this.car = {} as Car;
  }
}
