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
        text: 'Porcentaje de Unidades más utilizadas en los productos',
      },
    },
  };

export const data = {
  labels: ['PZA', 'KG', 'GRM', 'LTO',],
  datasets: [
    {
      label: '# de Movimientos',
      data: [12, 5, 8, 6,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderWidth: 5,
    },
  ],
};

export function GraphicProductsPolar() {
  return <Pie data={data} options={options}/>;
}
