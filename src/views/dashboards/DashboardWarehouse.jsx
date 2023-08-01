import {HiChartBar} from "react-icons/hi"

const DashboardWarehouse = () => {
  return (
    <div>
        <div className='flex  items-center gap-2'>
            <h1 className='text-4xl font-black'>Dashboard Almacén</h1>
            <HiChartBar className="text-gray-500" size={40}/>
        </div>
        <p className='text-2xl my-10'>
           Visualiza el cuadro de mando de los movieminto en almacén desde aquí
        </p>


    </div>
  )
}

export default DashboardWarehouse