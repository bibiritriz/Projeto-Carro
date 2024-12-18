import { Component, Input } from '@angular/core';
import { Car } from '../../Car';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input()
  car : Car = {} as Car;
}
