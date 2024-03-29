import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate-app.component.html',
  styleUrl: './calculate-app.component.css'
})
export class CalculateAppComponent {
  title = 'TestProj';
  Count = 0;
  CalculationNumber = 5;

  calculate(value: number):void {
    this.Count=value;
  }

}
