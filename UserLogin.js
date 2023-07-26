import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useHistory} from 'react-router-dom'
import axios from 'axios'
import './UserLogin.css'


import { Link } from 'react-router-dom'



const Login = () => {
 const [email,setEmail]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const history=useHistory();


 const handleName=(event)=>{
    event.preventDefault();
    setEmail(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    setErrors(validateForm({email,id,password}));
    try{
      const response=await axios.post('http://127.0.0.1:8082/api/v1/auth/authenticate',{
        
        email:email,
        password:password
  
      });
      history.push('/AfterUserLogin');
      let token=response.data.token;
      localStorage.setItem('token',token);
      console.log(response.status);
      if(response.status===200){
        setEmail("");
        setId('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      console.log(error);
      setIsSubmit(false);
  
    }
    // setIsSubmit(true);
    
    
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
          <h1>SURVEY SYNC</h1>
            <h1>Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Email</label>
            <br></br>
            <input type='email' className='form-control'
            placeholder='abc@gmail.com'
            value={email} id='nm'
            onChange={handleName} />
            </div>
            {errors.email}
            </div>

            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/UserRegister'>SignUp</a></h2>
    </div>
    
    </>
  )
}

export default Login