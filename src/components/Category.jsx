
import useKiosko from "../hooks/useKiosko";

const Category = ({category}) => {
      const {handleClickCategory, categoryCurrent} = useKiosko();

    const {icono, id, nombre} =category;
      
  return (
    <div className={` ${categoryCurrent.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        <img src={`/img/icono_${icono}.svg`} alt="Imagen Icono" className="w-12"/>
        <button
           className="text-lg font-bold cursor-pointer truncate"
          type="button"
          onClick={() => handleClickCategory(id)}//Colocar callback para que no se mande a llamar la funcion hasta el evento
        >
          {nombre}
        </button>
    </div>
  )
}

export default Category