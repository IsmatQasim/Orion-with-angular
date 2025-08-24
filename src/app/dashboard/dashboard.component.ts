import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


activeCard: number = 0;


  salesChartData: ChartData<'line'> = {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Sales',
        data: [0, 10000, 5000, 15000, 10000, 20000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 4,
        borderWidth: 2,
        tension: 0.3,
      }
    ]
  };

  salesChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => 'RS. ' + value.toLocaleString()
        }
      }
    }
  };
  policyChartData: ChartData<'doughnut'> = {
    labels: ['Targeted Credit', 'Current Credit'],
    datasets: [
      {
        data: [2800, 2248],
        backgroundColor: ['#4dc4d2', '#6f8fe9'],
        borderWidth: 0
      }
    ]
  };

  policyChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 10,
          font: { size: 14 },
        }
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ${context.parsed}`
        }
      }
    },
    cutout: '70%'
  };
}
