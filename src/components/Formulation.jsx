

const Formulation = ({id, idPadre, minProd, unidad, idComp, cantComp, unidadComp}) => {
  return (
    <tr className="hover:bg-gray-200 text-center">
        <td className="border border-slate-700 ">{id}</td>
        <td className="border border-slate-700 ">{idPadre}</td>
        <td className="border border-slate-700 ">{minProd}</td>
        <td className="border border-slate-700 ">{unidad}</td>
        <td className="border border-slate-700 ">{idComp}</td>
        <td className="border border-slate-700 ">{cantComp}</td>
        <td className="border border-slate-700 ">{unidadComp}</td>
    </tr>
  )
}

export default Formulation