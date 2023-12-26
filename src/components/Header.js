import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../actions/authActions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import dromiiLogo from '../assets/DroMii_LOGO.png'
import { Routes } from 'react-router-dom';

const Header = () =>{
    return(
        <BackGround>
            <Head>
            <Logo src={dromiiLogo} />
            </Head>
                 
        </BackGround>
    )
}

export default Header;

const BackGround = styled.div`
display:flex;
flex-direction:column;
  width: 100%;
`;
const Head = styled.div`
width:100%;
height:65px;
background-color:white;
display:flex;
align-items: center;
`;
const Logo = styled.img`
margin-left:10px;
width: 50px;
height: 50px;
`
