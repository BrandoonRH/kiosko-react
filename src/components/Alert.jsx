

const Alert = ({children}) => {
  return (
    <div data-cy="alert" className="text-center my-2 rounded-md bg-red-600 text-white font-bold p-3 uppercase">
        {children}
    </div>
  )
}

export default Alert