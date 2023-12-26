import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../actions/authActions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import dromiiLogo from '../assets/DroMii_LOGO.png'
import { Routes } from 'react-router-dom';




const Mainpage = () =>{
    // const email = useSelector((state) => state.auth.email);
    
    return(
        <BackGround>
            <p> MainPage  지도 보여주기</p>
            
        </BackGround>

    );
}

export default Mainpage;

const BackGround = styled.div`
display:flex;
flex-direction:column;
  width: auto;
  height: 100vh;
  background-color:pink;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0px 0px 0px;
  margin-left:65px;
  
  
`;
