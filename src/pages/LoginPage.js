import React, { useCallback } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
 
  return(
    <BackGround>
   
    <Form>
    <AuthForm>
      <InputBox>
        <label htmlFor='username'>E-MAIL</label>
        <input type='text' id='username' name="username"  placeholder="E-mail address" />
      </InputBox>
      <InputBox>
        <label htmlFor='password'>PASSWORD</label>
        <input type='password' id='password' name="password"  autoComplete='off' placeholder="Password" />
      </InputBox>
      <HR />
      <Button>Sign In</Button>
      <LinkBox>
      <p>Don't have an account?</p>
      <a href='http://www.naver.com'>Sign up</a>
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