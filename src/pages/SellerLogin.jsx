import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "../config/axiosInstance"
import { useDispatch } from "react-redux"
import { setSellerDetails } from "../Slices/userSlice"

export default function App() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit =async (data) =>{

   
   
    try{
      const response = await axiosInstance({
        method:'POST',
        url: "/seller/login",
        data:data
      })
      const responseData = response.data
      const sellerData =  responseData.data
      console.log(responseData)
      console.log(sellerData)
    
     
      if(responseData.success){
        dispatch(setSellerDetails({seller:sellerData,loggedIn:true}))
        navigate('/seller/dashboard')
        toast.success(responseData.message)
      }else{
        toast.error(responseData.message)
      }
    }catch(error){
      if(error.response){

        toast.error(error.response.data.message)
       
      }else{
        toast.error("An unexpected error occurred.");
      }
      
    }
  } 


  return (
   
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-500 px-4">
 
    <h1 className="text-5xl font-bold text-white mb-10">Trends</h1>
    
 
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login to your seller account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              
            })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <input
            className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-green-600 transition duration-200"
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
             
            })}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <div className="flex justify-center gap-4">
          <button 
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            type="submit"
          >
            Login
          </button>
        
        </div>
      </form>
     <div className="flex justify-end">
     <Link
  to={'/signin'}
  className="text-black-900 underline hover:text-blue-600 transition-colors duration-200"
>
  Create account
</Link>

     </div>
    </div>
  </div>
  
  
  )
}