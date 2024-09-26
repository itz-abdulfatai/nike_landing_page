import { Link } from "react-router-dom"
import { lost } from "../assets/images"

function NotFound() {
  return (
    <main className=" padding max-container h-screen flex justify-center items-center">

      <div className=" w-[90%] max-w-[400px] aspect-square  text-slate-gray flex flex-col items-center justify-center gap-3 p-3 text-center"> 
        <img src={lost} alt="" />
        
        <p>There is nothing to see here </p>
        <Link to={'/'} className=" text-coral-red underline underline-offset-2">Go Home</Link>

      </div>

    </main>
  )
}

export default NotFound