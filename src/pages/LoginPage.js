import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../actions/authActions';
import styled from 'styled-components';

const LoginPage = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const { email, password } = formData;
  const dispatch = useDispatch();
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Email: ${email}, Password: ${password}`);
  //   dispatch(requestLogin(email, password));
  // };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(requestLogin(formData));
    } else {
      console.log('Please fill in all required fields and agreements.');
    }
  };
 
  return(
    <BackGround>
   
    <Form>
    <AuthForm onSubmit={handleSubmit}>
      <InputBox>
        <label htmlFor='email'>E-MAIL</label>
        <input type='text' id='email' name="email"  placeholder="E-mail address" value={email}
              onChange={handleChange}  required/>
      </InputBox>
      <InputBox>
        <label htmlFor='password'>PASSWORD</label>
        <input type='password' id='password' name="password"  autoComplete='off' placeholder="Password" value={password}
              onChange={handleChange} required/>
      </InputBox>
      <HR />
      <Button type='submit' >Sign In</Button>
      <a href='/home'>home</a>
      <LinkBox>
      <p>Don't have an account?</p>
      <a href='./signup'>Sign up</a>
      </LinkBox>
     
      </AuthForm>
    </Form>
  </BackGround>
  )
};

export default LoginPage;


const BackGround = styled.div`
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
  width: 100vw;
  height: 100vh;
  background-color: #FFFFF;
`;

const Form = styled.div`

margin-top:5vw;
width:30vw;
height: 50vh;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top: 1vw;
  

  label {
    width:200px;
    display: inline-block;
     text-align: left;
     margin-bottom:10px;
     margin-right:100px;
  }

  input {
    width: 300px;
    height: 50px;
    border: 2px solid #4169E1;
    border-radius: 10px;
    font-size:20px;
    padding-left:0.5vw;
  }
`;

const Button = styled.button`
 
  width: 300px;
  height: 50px;
  background-color: #4169E1;
  color: white;
  border-radius: 10px;
  font-size:20px;
  border:none;
`;
const HR = styled.hr`
width: 300px;
border: 1px solid #d8d8d8;
margin: 1.5vw;
`;
const Logo = styled.img`
margin-top: 3vw;
  height: 50px;
  margin-bottom:4vw;
`;
const LinkBox = styled.div`
margin-top:5px;
display:flex;
align-items: center;
justify-content: center;
width: 300px;
p{
  font-size:15px;
}
a{
  color:#4169E1;
}
`;

const AuthForm = styled.form`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
  
`;