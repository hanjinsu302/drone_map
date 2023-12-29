import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestSignup } from '../actions/authActions';
import styled from 'styled-components';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const dispatch = useDispatch();

  

  const [emailError, setEmailError] = useState(
    <span style={{ color: 'red' }}>이메일을 입력하세요.</span>
  );
  const [confirmEmailError, setConfirmEmailError] = useState(
    <span style={{ color: 'red' }}>이메일 재확인을 입력하세요.</span>
  );
  const [nameError, setNameError] = useState(
    <span style={{ color: 'red' }}>이름을 입력하세요.</span>
  );
  const [passwordError, setPasswordError] = useState(
    <span style={{ color: 'red' }}>비밀번호를 입력하세요.</span>
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    <span style={{ color: 'red' }}>비밀번호 확인을 입력하세요.</span>
  );
  const [termsError, setTermsError] = useState(
    <span style={{ color: 'red' }}>약관에 동의해야 합니다.</span>
  );

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(
      e.target.validity.valid ? (
        <span style={{ color: 'green' }}>올바른 이메일 값이 입력되었습니다.</span>
      ) : (
        <span style={{ color: 'red' }}>이메일 양식을 확인하세요.</span>
      )
    );
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    setConfirmEmailError(
      e.target.value !== email ? (
        <span style={{ color: 'red' }}>이메일이 일치하지 않습니다.</span>
      ) : (
        <span style={{ color: 'green' }}>이메일이 일치합니다.</span>
      )
    );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(
      e.target.value.length === 0 ? (
        <span style={{ color: 'red' }}>이름을 입력하세요.</span>
      ) : (
        <span style={{ color: 'green' }}>이름이 입력되었습니다.</span>
      )
    );
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      e.target.value.length < 8 || e.target.value.length > 32 ? (
        <span style={{ color: 'red' }}>비밀번호는 8~32자여야 합니다.</span>
      ) : (
        <span style={{ color: 'green' }}>올바른 비밀번호입니다.</span>
      )
    );
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(
      e.target.value !== password ? (
        <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>
      ) : (
        <span style={{ color: 'green' }}>비밀번호가 일치합니다.</span>
      )
    );
  };

  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
    setTermsError(
      !e.target.checked ? (
        <span style={{ color: 'red' }}>약관에 동의해야 합니다.</span>
      ) : (
        ''
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsChecked) {
      setTermsError(
        <span style={{ color: 'red' }}>약관에 동의해야 합니다.</span>
      );
      return;
    }

    if (email !== confirmEmail) {
      alert('Emails do not match!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    dispatch(requestSignup(email, password, name));
  };

  return (
    <BackGround>
      <Form>
        <AuthForm onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor='email'>E-MAIL</label>
            <input type='email' id='email' onChange={handleEmailChange} required />
            {emailError}
          </InputBox>
          <InputBox>
            <label htmlFor='confirmEmail'>CONFIRM E-MAIL</label>
            <input type='email' id='confirmEmail' onChange={handleConfirmEmailChange} required />
            {confirmEmailError}
          </InputBox>
          <InputBox>
            <label htmlFor='name'>NAME</label>
            <input type='text' id='name' onChange={handleNameChange} required />
            {nameError}
          </InputBox>
          <InputBox>
            <label htmlFor='password'>PASSWORD</label>
            <input type='password' id='password'  onChange={handlePasswordChange} required />
            {passwordError}
          </InputBox>
          <InputBox>
            <label htmlFor='confirmPassword'>CONFIRM PASSWORD</label>
            <input type='password' id='confirmPassword' onChange={handleConfirmPasswordChange} required />
            {confirmPasswordError}
          </InputBox>

          <HR />
          <Checkbox>
            <input type='checkbox' id='terms' onChange={handleTermsChange} />
            <label htmlFor='terms'>
              서비스 이용약관 및 운영원칙에 동의합니다.
            </label>
          </Checkbox>
          <Checkbox>
            <input type='checkbox' id='terms' onChange={handleTermsChange} />
            <label htmlFor='terms'>
              개인정보 수집 이용에 동의합니다.
            </label>
          </Checkbox>
          {termsError}
          <Button>Sign Up</Button>
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