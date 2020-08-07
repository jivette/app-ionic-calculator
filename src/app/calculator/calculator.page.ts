import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  valueA: number;
  valueB: number;
  result: number;
  operator: string;
  message: string;
  location: Location;

  constructor() { }
  operation() {
    switch (this.operator) {
      case 'sum':
        return this.valueA + this.valueB;
      case 'subtraction':
        return this.valueA - this.valueB;
      case 'multiplication':
        return this.valueA * this.valueB;
      case 'division':
        return this.valueA / this.valueB;
    }
  }

  calculator() {
    if (this.valueA && this.valueB && this.operator) {
      this.message = '';
      this.result = this.operation();
    } else {
      this.message = 'Debes agregar valor A y B y seleccionar un operador';
    }
  }
}
