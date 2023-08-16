import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico Cantidades Mínimas de Producción en los Meses',
      },
    },
  };
  
  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Mainimos Producción',
        data: labels.map(() => faker.number.int({ min: 0, max: 20 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      /*{
        label: 'Mínimo',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },*/
    ],
  };

 
  
  export function GraphicFormulationsBar() {
    return <Bar  options={options} data={data} />;
  }
  