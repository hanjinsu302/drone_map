// apitest.js 파일에서 registerUser 함수를 import 합니다.
import { registerUser } from '../api/apitest'; 
import React, { useState } from 'react';
import styled from 'styled-components';

const SignupPage = () => {
  const [form, setForm] = useState({
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    name: '',
    company: '',
    agreeTerms: false,
    agreePersonalInfo: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(
        form.email,
        form.emailConfirm,
        form.password,
        form.passwordConfirm,
        form.name,
        form.company,
        form.agreeTerms,
        form.agreePersonalInfo
      );
      alert('사용자 등록 성공!');
    } catch (error) {
      console.error('사용자 등록 에러:', error);
      alert('사용자 등록 실패. 다시 시도해주세요.');
    }
  };

  return (
    <BackGround>
      <Form>
        <AuthForm onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor='email'>E-MAIL</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='E-mail address'
              value={form.email}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <label htmlFor='emailConfirm'>Confirm E-MAIL</label>
            <input
              type='text'
              id='emailConfirm'
              name='emailConfirm'
              placeholder='Confirm E-mail address'
              value={form.emailConfirm}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <label htmlFor='password'>PASSWORD</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={form.password}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <label htmlFor='passwordConfirm'>Confirm PASSWORD</label>
            <input
              type='password'
              id='passwordConfirm'
              name='passwordConfirm'
              placeholder='Confirm Password'
              value={form.passwordConfirm}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <label htmlFor='name'>NAME</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              value={form.name}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <label htmlFor='company'>COMPANY</label>
            <input
              type='text'
              id='company'
              name='company'
              placeholder='Your Company Name'
              value={form.company}
              onChange={handleChange}
            />
          </InputBox>
          <InputBox>
            <label htmlFor='agreeTerms'>
              <input
                type='checkbox'
                id='agreeTerms'
                name='agreeTerms'
                checked={form.agreeTerms}
                onChange={handleChange}
                required
              />
              I agree to the terms
            </label>
          </InputBox>
          <InputBox>
            <label htmlFor='agreePersonalInfo'>
              <input
                type='checkbox'
                id='agreePersonalInfo'
                name='agreePersonalInfo'
                checked={form.agreePersonalInfo}
                onChange={handleChange}
                required
              />
              I agree to the collection of personal information
            </label>
          </InputBox>
          <HR />
          <Button type='submit'>Sign Up</Button>
          <LinkBox>
            <p>Already have an account?</p>
            <a href='./login'>Log In</a>
          </LinkBox>
        </AuthForm>
      </Form>
    </BackGround>
  );
};

export default SignupPage;



const BackGround = styled.div`

display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
  width: 100%;
  height: 100vh;
  background-color: #FFFFF;
`;

const Form = styled.div`

margin-top:5vw;
width:100%;
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
    width:600px;
    display: inline-block;
     text-align: left;
     margin-bottom:5px;
    
  }

  input {
    width: 600px;
    height: 50px;
    border: 2px solid #4169E1;
    border-radius: 10px;
    font-size:20px;
    padding-left:0.5vw;
  }
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  background-color: #4169E1;
  color: white;
  border-radius: 10px;
  font-size:20px;
  border:none;
`;
const HR = styled.hr`
width: 400px;
border: 1px solid #d8d8d8;
margin: 1.5vw;
`;


const AuthForm = styled.form`

display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;
const Checkbox = styled.div``;
const LinkBox = styled.div``;

// const [formData, setFormData] = useState({
  //   email: '',
  //   emailConfirm: '',
  //   password: '',
  //   passwordConfirm: '',
  //   name: '',
  //   company: '',
  //   agreeTerms: false,
  //   agreePersonalInfo: false,
  // });

  // const { email, emailConfirm, password, passwordConfirm, name, company, agreeTerms, agreePersonalInfo } = formData;
  // const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email && emailConfirm && password && passwordConfirm && name && company && agreeTerms && agreePersonalInfo) {
  //     dispatch(requestSignup(formData));
  //   } else {
  //     console.log('Please fill in all required fields and agreements.');
  //   }
  // };