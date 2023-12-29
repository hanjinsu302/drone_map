import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin } from '../actions/authActions';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import dromiiLogo from '../assets/DroMii_LOGO.png'
import { Routes } from 'react-router-dom';

const MenuBar = () => {
    const location = useLocation();
    return(
        <MenuContainer>
                    <Link to="/home" style={{textDecoration:'none'}}>
                        <LinkBox active={location.pathname === '/home'}>
                        <p>아</p>
                        <a>Home</a>
                        <Num>1</Num>
                        </LinkBox>
                    </Link>
                    <Link to="/dashboard" style={{textDecoration:'none'}}>
                        <LinkBox active={location.pathname === '/dashboard'}>
                        <p>아</p>
                        <a>Dash Board</a>
                    </LinkBox></Link>
                    <Link to="/dataset" style={{textDecoration:'none'}}>
                    <LinkBox active={location.pathname === '/dataset'}>
                        <p>아</p>
                        <a>Data Set</a>
                        </LinkBox>
                    </Link>
                    <Link to="/project" style={{textDecoration:'none'}}>
                    <LinkBox active={location.pathname === '/project'}>
                        <p>아</p>
                        <a>Project</a>
                        </LinkBox>
                    </Link>
                    <Link to="/system" style={{textDecoration:'none'}}>
                    <LinkBox active={location.pathname === '/system'}>
                        <p>아</p>
                        <a>System</a>
                        </LinkBox>
                    </Link>
                  

                    
                  
                  <UserBox>
                    <p>유</p>
                    {/* <Contents><h1>Welcome, {email}!</h1></Contents> */}
                    <a>Logout</a>
                  </UserBox>
                </MenuContainer>

       
    )
}
 export default MenuBar;

 const LinkBox = styled.div`
text-decoration: none;
color: ${props => props.active ? '#4169E1' : '#d9d9d9'};
margin-top:25px;
display: flex;
width:100%;
height:50px;
align-items: center;
border-radius:10px 0px 0px 10px;
p{  margin-left:20px;
    font-weight:600;
    font-size:20px;
    text-decoration-line: none;
    
}
a{ 
    text-decoration: none;
    margin-left:60px;
    display: none;
    font-weight:600;
    font-size:20px;
    
   
}

}
`;

const UserBox = styled.div`
position: absolute;
bottom: 30px;
// margin-top: 300px;
margin-left:10px;
display:flex;
width:85%;
height:50px;
align-items: center;
border-radius:10px 0px 0px 10px;
p{  margin-left:10px;
    font-weight:600;
    font-size:20px;
    color:#4169E1;
}
a{ margin-left:60px;
    display: none;
    font-weight:600;
    font-size:20px;
    color:#4169E1;
   
}
`;

const MenuContainer =styled.div`
position:absolute;
z-index:10;
background-color:white;
width: 65px;
height:100%;
display:flex;
flex-direction:column;
&:hover{
    width: 280px;
    border-radius: 0px 20px 20px 0px;
    ${LinkBox} {  
        border-radius:10px;
        
     
        a{
            display: flex;
           
        }
    }
    ${UserBox} {
        border-radius:10px; 
        a{
            display: flex;
        }
    }
}
`;

const Num = styled.div`

padding: 5px;
`;