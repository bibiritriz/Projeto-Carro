import { Component } from '@angular/core';
import { Car } from '../../Car';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car : Car = {} as Car;

  cars: Car[] = [
    {
      id: 1,
      name: 'Bia',
      assembler: 'Kaka',
      price: 100.0,
      year: 2006
    }
  ]
}
