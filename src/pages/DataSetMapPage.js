import styled from "styled-components";
import React, { useState } from "react";
import rightIcon from "../assets/right-arrow.png"

const DataSetMapPage =() => {
    const [isMenuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!isMenuClicked);
  };
    return(
       <BackGround>
        <MenuBar>
            <Menu isClicked={isMenuClicked}>
            <Ball onClick={handleMenuClick} > <img src={rightIcon} onClick={handleMenuClick}/></Ball>
                <p>데이터 셋</p>
                <p>업로드 날자</p>
                <p>이미지 크기</p>
                <p>데이터 셋 설명</p>
                <p>이미지 갯수</p>
                <p>카메라</p>
                <p>다운로드</p>
                <p>삭제</p>
            </Menu>
        </MenuBar>
        <Contents>
            DataSetMap 지도 보여지는 부분
        </Contents>

       </BackGround>
    )

}

export default DataSetMapPage;


const BackGround = styled.div`
display:flex;
// flex-direction:column;
width: auto;
height: 100vh;
background-color:#F2F2F2;
border-radius: 20px 0px 0px 0px;
margin-left:65px;
`;

const MenuBar = styled.div`
width:2%;
height:100%;
`;
const Menu = styled.div`
border:1px solid #d8d8d8;
background-color:white;
display:flex;
flex-direction: column;
align-items: center;
width: ${(props) => (props.isClicked ? "240px" : "40px")};
height:100%;
border-radius: 0px 10px 10px 0px;
position: absolute;
p{
    display: ${(props) => (props.isClicked ? "block" : "none")};
}
img{
    width:20px;
height:20px;
transform:${(props) => (props.isClicked ? "rotate(180deg)" : "rotate(0deg)")};
transition: transform 0.1s ease-in-out;
margin-right:0.5vw;

}

`;
const Ball = styled.div`
width: 100%;
height: 50px;
display:flex;
align-items: center;
justify-content: end;
a{
    margin-right:1vw;
}
`;




const Contents = styled.div`
width:100%;
height:100%;
display:flex;
align-items: center;
    justify-content: center;



`;