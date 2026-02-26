import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartOptions } from './chart-options.model';

@Component({
  selector: 'io-chart',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  @Input() chartOptions!: ChartOptions;

  maxValue: number = 0;
  totalValue: number = 0;

  ngOnChanges() {
    if (this.chartOptions?.series?.length) {
      this.maxValue = Math.max(...this.chartOptions.series.map(s => s.value));
      this.totalValue = this.chartOptions.series
        .reduce((sum, item) => sum + item.value, 0);
    }
  }

  getLinePoints(): string {
    const width = 400;
    const height = 200;
    const gap = this.chartOptions.series.length > 1
  ? width / (this.chartOptions.series.length - 1)
  : width;


    return this.chartOptions.series
      .map((item, index) => {
        const x = index * gap;
        const y = height - (item.value / this.maxValue) * height;
        return `${x},${y}`;
      })
      .join(' ');
  }

  getPieSlice(index: number): string {
    const radius = 100;
    const center = 120;

    let cumulative = 0;
    for (let i = 0; i < index; i++) {
      cumulative += this.chartOptions.series[i].value;
    }

    const value = this.chartOptions.series[index].value;

    const startAngle = (cumulative / this.totalValue) * 2 * Math.PI;
    const endAngle = ((cumulative + value) / this.totalValue) * 2 * Math.PI;

    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    const largeArcFlag = value / this.totalValue > 0.5 ? 1 : 0;

    return `
      M ${center} ${center}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
      Z
    `;
  }
}
