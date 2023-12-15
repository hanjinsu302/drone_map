import styled from 'styled-components';
import { useSelector } from 'react-redux';



const Mainpage = () =>{
    
    return(
        <BackGround>
            <Header>asdas</Header>
            <Body>
            <MenuBar>
                <LinkBox>
                <p> 아</p>
                <a> HOME</a>
                </LinkBox>
                <LinkBox>
                <p> 아</p>
                <a> Dash Board</a>
                </LinkBox>
                <LinkBox>
                <p> 아</p>
                <a> Data Set</a>
                </LinkBox>
                <LinkBox>
                <p> 아</p>
                <a> Project</a>
                </LinkBox>
                <LinkBox>
                <p> 아</p>
                <a> System</a>
                </LinkBox>
                
            </MenuBar>
            <Contents>asdadasdasasds</Contents>
            </Body>
            
        </BackGround>

    );
}

export default Mainpage;

const BackGround = styled.div`
display:flex;
background-color:pink;
flex-direction:column;
  width: 100%;
  height: 100vh;
  
`;
const Header = styled.div`
width:100%;
height:80px;
background-color:white;
`;



const LinkBox = styled.div`
color:#d9d9d9;
margin-left:12px;
margin-top:20px;
display: flex;
width:85%;
height:50px;
align-items: center;
border-radius:10px 0px 0px 10px;
p{margin-left:25px;
    font-weight:600;
    font-size:20px;

}
a{ margin-left:50px;
    display: none;
    font-weight:600;
    font-size:20px;
   
}

}
`;

const MenuBar =styled.div`
z-index:10;
position:absolute;
background-color:white;
width: 80px;
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
}
`;

const Body = styled.div`
display:flex;
width:100%;
height: 100%;
`;
const Contents = styled.div`
 width:100%;
height: 100%;
background-color:yellow;
border-radius: 20px 0px 0px 0px;
background-color: #F2F2F2;
`;