import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Porcentaje de Movimientos de Cada Usuario',
      },
    },
  };

export const data = {
  labels: ['User 2', 'User 3', 'User 4', 'User 5', 'User 6',],
  datasets: [
    {
      label: '# de Movimientos',
      data: [12, 19, 3, 5, 2,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 5,
    },
  ],
};

export function Areapolar() {
  return <Pie data={data} options={options}/>;
}
