
const Spinner = ({text}) => {
  return (
   <>
    <p data-cy="textSpiner" className="text-xl text-amber-400 font-bold uppercase">{text}</p>
    <div data-cy="spinner" className="sk-chase mx-auto">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </div>
   </>
  )
}

export default Spinner