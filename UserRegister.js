import React, { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import axios from 'axios'
import './UserRegister.css'


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));
    try{
      const response=await axios.post('http://localhost:8082/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setName("");
        setEmail('');
        setPassword('');
  
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if (isSubmit) {
      history.push('/Login');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
      setIsSubmit(false);
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
      setIsSubmit(false);
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }

    setIsSubmit(Object.keys(errors).length === 0);

    return errors;
  };

  return (
    <>
      <div className='login2'>
        <form className='login_form' onSubmit={handleSubmit}>
          <h1>SURVEY SYNC</h1>
          <h1>Register</h1>
          <div className='gogo'>
            <div className='form-floating mb-3'>
              <label htmlFor='nm'>Username</label>
              <br />
              <input
                type='name'
                className='form-control'
                placeholder='username'
                value={name}
                id='nm'
                onChange={handleName}
              />
            </div>
            {errors.name}
          </div>
<div className="gogo">
          <div className='form-floating mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='email'
              id='email'
              value={email}
              onChange={handleEmail}
            />
          </div>
          </div>
          {errors.email && <span>{errors.email}</span>}

          <div className='loginbox'>
            <div className="gogo">
            <div className='form-floating mb-3'>
              <label htmlFor='pwd'>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='password'
                id='pwd'
                value={password}
                onChange={handlePassword}
              />
            </div>
            
            
            {errors.password && <span>{errors.password}</span>}
          </div>
          </div>

          <button
            type='submit'
            className='btn btn-secondary'
            style={{
              background: 'black',
              color: 'white',
              width: 180,
              height: 50,
              margin: 40,
            }}
          >
            Sign Up
          </button>
        </form>
        <div className="login">
          Already have an account? <Link to="/UserLogin">Login</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;