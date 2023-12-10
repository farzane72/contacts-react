import { Link } from "react-router-dom"
const Home=()=> {
    return (
        <div className="w-full min-h-screen bg-slate-800 flex justify-center items-center flex-col gap-8  text-white">
            <h1 className="text-2xl font-bold ">
                Welcome to our site :))))
            </h1>
            <Link to='/contacts' className="text-xl font-bold border p-2 rounded-md" >Go to Your Contacts </Link>
         
        </div>
    )
}

export default Home
