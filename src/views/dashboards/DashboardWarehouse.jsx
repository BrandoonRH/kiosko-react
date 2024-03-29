import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {HiChartBar} from "react-icons/hi"
import { GraphicUser } from "../../components/graphics/Warehousemovements/Graphicbar"
import { Graphicline } from "../../components/graphics/Warehousemovements/Graphicline"
import { Areapolar } from "../../components/graphics/Warehousemovements/Areapolar"


const DashboardWarehouse = () => {

  const graphicRefBar = useRef(null);
  const graphicRefLine = useRef(null);
  const graphicRefPolar = useRef(null);

  const downloadPDF = async () => {
      const doc = new jsPDF();

      doc.text('Dashboard Almacén', 20, 20);
      doc.text('Reporte en PDF de las Gráficas ', 20, 30);


      //doc.addImage('ruta-de-la-imagen-del-icono', 'PNG', 180, 10, 15, 15);

      if (graphicRefBar.current && graphicRefLine.current && graphicRefPolar.current) {
        const canvasBar = await html2canvas(graphicRefBar.current);
        const canvasLine = await html2canvas(graphicRefLine.current); 
        const canvasPolar = await html2canvas(graphicRefPolar.current); 
        
        const imgDataBar = canvasBar.toDataURL('image/png');
        const imgDataLine = canvasLine.toDataURL('image/png'); 
        const imgDataPolar = canvasPolar.toDataURL('image/png'); 
        doc.addImage(imgDataBar, 'PNG', 20, 40, 170, 100);
        doc.addImage(imgDataLine, 'PNG', 20, 150, 80, 60);
        doc.addImage(imgDataPolar, 'PNG', 110, 150, 80, 60);
      }

      doc.save('dashboard.pdf');
  };

  return (
    <div>
        <div className='flex  items-center gap-2'>
            <h1 className='text-4xl font-black'>Dashboard Almacén</h1>
            <HiChartBar className="text-gray-500" size={40}/>
        </div>
        <p className='text-2xl my-10'>
           Visualiza el cuadro de mando de los movieminto en almacén desde aquí
        </p>

        <button onClick={downloadPDF} 
                className="text-2xl my-5 flex m-auto  bg-gray-500 p-2 text-white font-bold rounded-lg hover:bg-gray-200  hover:text-black transition-all duration-300 " >
          Descargar PDF
        </button>

        <div ref={graphicRefBar}>
           <GraphicUser key="1"/>
        </div>

        <div className="container flex max-w-lg items-center mt-10">
            <div ref={graphicRefLine}>
                <Graphicline/>
            </div>
            <div ref={graphicRefPolar}>
                <Areapolar/>
            </div>
        </div>

    </div>
  )
}

export default DashboardWarehouse