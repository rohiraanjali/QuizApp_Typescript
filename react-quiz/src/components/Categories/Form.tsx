import {useState} from "react"
import {State} from "./categories.types";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
import { SuccessToast } from "../../utils/Toast/Toast";

const Form = () => {
  const navigate = useNavigate()

  const [state,setState] = useState<State>({name:"",category:"default", description:""});
  const[toast,setToast] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>): void => {
      const {name,value} = event.target;
      setToast(true)
          setState( state => ({...state,[name]:value}));
  }

  const handleForm = () => {
  setToast(true)
  navigate("/categories")
  setToast(true)
  }
  
    return (
      <>
      <div  className ="flex flex-col md:h-screen md:items-center justify-center mb-6">
    <form style={{position: "absolute", top: "40%" , bottom: "50%", padding: "0.75rem"}} className="w-full max-w-sm">
      <label className="text-left md:text-2xl ">1- Let's start with your first name?</label>
<br />
<br />
  <div className="flex flex-col items-center border-b border-blue-500 py-2">
    <input value={state.name} type="text" name="name" onChange={handleChange} className="md:text-2xl appearance-none bg-transparent border-none w-full text-blue-500  font-medium py-1 px-2 leading-tight focus:outline-none" placeholder="Jane Doe" aria-label="Full name" />
  </div>
  {state.name === "" ? (
  <button 
  className="mt-4 text-white font-bold py-1 px-4 border-b-4 border-blue-700 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed rounded">OK <i className="fa fa-check" aria-hidden="true"></i>
</button>
  ) : 
  (
  <Link to="/categories">
  <button className="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >OK <i className="fa fa-check" aria-hidden="true"></i></button>
  </Link>
  )}&nbsp;&nbsp;&nbsp;
<span className="text-gray-400 cursor-pointer" onClick={handleForm}>Let me take a tour first !</span>
</form>

</div>
<SuccessToast show={toast} message={"Welcome to the game. Click OK"} />
      </>
    )
}

export default Form;