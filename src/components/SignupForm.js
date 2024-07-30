import React , {useState} from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const [ formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword1,setShowPassword1]=useState(false);
    const [showPassword2,setShowPassword2]=useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
           {
               ...prevData,
               [event.target.name]:event.target.value
           }
        ))
      }

    function submitHandler(event){
     event.preventDefault();
     if(formData.password!=formData.confirmPassword){
         toast.error("Passwords do not match");
         return;
     }
       setIsLoggedIn(true);
       toast.success("Account Created");
       const accountData={
        ...formData
       };
       console.log("printing account data")
       console.log(accountData);
       navigate("/dashboard");
    }
    
  return (
    <div>

      {/* Student-Instructor-Tab */}
       <div>
        <button>
           Student 
        </button>
        <button>
           Instructor 
        </button>
       </div>
       
       <form onSubmit={submitHandler}>

       {/* first name and last name  */}
       <div>
            
          <label>
             <p>First Name<sup>*</sup></p>
             <input
                required
                type='text'
                name='firstName'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
             />
           </label>


           <label>
             <p>Last Name<sup>*</sup></p>
             <input
                required
                type='text'
                name='lastName'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastName}
             />
           </label>


       </div>

       {/* email and password */}
       <label>
             <p>Email Address<sup>*</sup></p>
             <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email Address'
                value={formData.email}
             />
        </label>

        {/* createPassword and confirm password */}

        <div>
        <label>
             <p>Create Password<sup>*</sup></p>
             <input
                required
                type={showPassword1 ? ("text") :("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
             />
             
             <span onClick={()=>setShowPassword1((prev)=>!prev)}>
              {showPassword1 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
             </span>
        </label>


        <label>
             <p>Confirm Password<sup>*</sup></p>
             <input
                required
                type={showPassword2 ? ("text") :("password")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.confirmPassword}
             />
             
             <span onClick={()=>setShowPassword2((prev)=>!prev)}>
              {showPassword2 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
             </span>
        </label>
    </div>

    <button>
       Create Account 
    </button>
           
       </form>

    </div>
  )
}

export default SignupForm
