import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { CarsComponent } from "./components/cars/cars.component";
import { CarComponent } from "./components/car/car.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CarsComponent, CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Cadastro de Carros';
}
