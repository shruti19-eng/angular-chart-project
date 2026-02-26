import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartOptions } from './chart/chart-options.model';
import { ChartComponent } from './chart/chart.component';
@Component({
  selector: 'app-root',
  imports: [ChartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {options: ChartOptions = {
  type: 'pie',
  title: 'Sales Report',
  series: [
    { name: 'Offline', value: 30, color: '#6C5CE7' }, 
{ name: 'Online', value: 70, color: '#00B894' }
  ]
};
}
