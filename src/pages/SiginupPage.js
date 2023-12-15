
import styled from 'styled-components';

const SignupPage = () => {
 
  return(
    <BackGround>
   
    <Form>
    <AuthForm >
            <InputBox>
              <label htmlFor='email'>E-MAIL</label>
              <input
                type='email'
                id='email'
                
              />
            </InputBox>
            <InputBox>
              <label htmlFor='password'>CONFIRM E-MAIL</label>
              <input
                type='password'
                id='password'
                
              />
            </InputBox>
            <InputBox>
              <label htmlFor='lastName'>NAME</label>
              <input type='text' id='lastName' name='lastName' />
            </InputBox>
            <InputBox>
              <label htmlFor='confirmPassword'>PASSWORD</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
              />
            </InputBox>
            <InputBox>
              <label htmlFor='firstName'>CONFIRM PASSWORD</label>
              <input type='text' id='firstName' name='firstName' />
            </InputBox>
            <HR/>
            <Button>Sign Up</Button>
          </AuthForm>
    </Form>
  </BackGround>
  )
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
    width:400px;
    display: inline-block;
     text-align: left;
     margin-bottom:5px;
    
  }

  input {
    width: 400px;
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