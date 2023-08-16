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
        text: 'Porcentaje de Produccion Componente más utilizado',
      },
    },
  };

export const data = {
  labels: ['Carne Res Esp', 'T-Res Graso', 'Sal', 'Cebolla', 'AJO', 'Huevo', 'Ketchup','Carne Pollo Esp'],
  datasets: [
    {
      label: '# de Movimientos',
      data: [12, 5, 8, 6, 5, 15, 21, 23],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(77, 17, 156, 0.5)',
        'rgba( 175, 185, 79)',
        'rgba(79, 185, 145)',
        'rgba( 203, 166, 238 )'
      ],
      borderWidth: 5,
    },
  ],
};

export function GraphicFormulationsPolar() {
  return <Pie data={data} options={options}/>;
}
