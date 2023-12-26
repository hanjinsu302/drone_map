import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import hamburgerIcon from "../assets/hamburger.png"
import groupIcon from "../assets/Group.png"
import moreIcon from "../assets/MoreIcon.png"



const ProjectItem = () => {
    const [showModal, setShowModal] = useState(false); // 모달의 상태를 관리하는 state입니다.
    const [showProjectSetItem, setShowProjectSetItem] = useState(false); // 추가
    const [showProjectSetItemInfo, setShowProjectSetItemInfo] = useState(false); // 추가
    const [rotateIcon, setRotateIcon] = useState(false); // 추가

  
const handleOpenModal = () => {
setShowModal(true);
}

const handleCloseModal = () => {
setShowModal(false);
}

const handleToggleProjectSetItem = () => {
  setRotateIcon(!rotateIcon); // 아이콘 회전 상태 변경
  setShowProjectSetItem(!showProjectSetItem); // <ProjectSetItem> 보여짐 상태 변경
}

const handleToggleProjectSetItemInfo = () => {
  setShowProjectSetItemInfo(!showProjectSetItemInfo);
 } // <ProjectSetItemInfo> 보여짐 상태 변경
    return(
        <BackGround>

        
        <ProjectContainer>
        <ProjectHeader>
          <ProjectIconBox>
            <ProjectIcon1 src={hamburgerIcon} onClick={handleOpenModal}/>
          </ProjectIconBox> 프로젝트명
        </ProjectHeader>
        <ProjectSetHeader>
          <ProjectIconBox>
          <ProjectIcon2 src={groupIcon} onClick={handleToggleProjectSetItem} rotate={rotateIcon}/>
          </ProjectIconBox> 데이터셋 갯수 | 숫자 표시
        </ProjectSetHeader>
        

        {showProjectSetItem && (
        <ProjectSetItem>
        <ProjectSetItemHeader>
        <ProjectIcon3 src={moreIcon} onClick={handleToggleProjectSetItemInfo} /> 
        | 철새로 | 아이콘 | 숫자 |
        <ProjectBar>5%</ProjectBar>
        
        </ProjectSetItemHeader>
        {showProjectSetItemInfo && (
        <ProjectSetItemInfo>
          <p>생성날짜</p>
          <p>Disksdfsdf</p>
          <ProjectSetItemBtnBox>
            <ProjectSetItemMapBtn>Map</ProjectSetItemMapBtn>
            <ProjectSetItemDownBtn>Download</ProjectSetItemDownBtn>
            <ProjectSetItemEditBtn>Edit</ProjectSetItemEditBtn>
            <ProjectSetItemDeleteBtn>Delete</ProjectSetItemDeleteBtn>
          </ProjectSetItemBtnBox>
        </ProjectSetItemInfo>
        )}
        </ProjectSetItem>
        )}
      </ProjectContainer>
      {showModal && ( // showModal state가 true일 때만 모달 컴포넌트를 렌더링합니다.
      <Modal>
         <button onClick={handleCloseModal}>X</button>
        <p>프로젝트 편집</p>
        <p>작업 추가</p>

      </Modal>
      )}
      </BackGround>

    )
}

export default ProjectItem;

const BackGround = styled.div`
display:flex;
`;


const ProjectContainer = styled.div`
width: 35vw;
height:max-contents;
background-color:white;
border-radius:20px;
padding-left:10px;
margin-left:3vw;
`;

const ProjectHeader = styled.div`
display:flex;
align-items: center;
width:100%;
height:50px;
font-size:20px;
font-weight:600;
`;


const ProjectSetHeader = styled.div`
display:flex;
align-items: center;
width:100%;
height: 50px;
padding-left:1vw;
`;

const ProjectSetItem = styled.div`
padding-left:2vw;
`;

const ProjectSetItemHeader = styled.div`
display:flex;
align-items: center;
margin-bottom:1vw;
`;

const ProjectBar = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 60%;
height: 20px;
background-color:#30A64A;

`;
const ProjectSetItemInfo = styled.div`
padding-left:2vw;
height:max-contents;
`;


const ProjectSetItemBtnBox = styled.div`
width:100%;
height:80px;
display:flex;
align-items: center;
`;
const ProjectSetItemDownBtn = styled.div`
background-color:white;
margin-left:10px;
width:100px;
height:50%;
display:flex;
align-items: center;
justify-content: center;
box-shadow: 1px 1px 1px 1px #8E8E8E;
border-radius:10px;
font-size:15px;
font-weight:600;
`;
const ProjectSetItemMapBtn = styled.div`
background-color:white;
margin-left:10px;
width:100px;
height:50%;
display:flex;
align-items: center;
justify-content: center;
box-shadow: 1px 1px 1px 1px #8E8E8E;
border-radius:10px;
font-size:15px;
font-weight:600;
`;
const ProjectSetItemEditBtn = styled.div`
background-color:white;
margin-left:10px;
width:100px;
height:50%;
display:flex;
align-items: center;
justify-content: center;
box-shadow: 1px 1px 1px 1px #8E8E8E;
border-radius:10px;
font-size:15px;
font-weight:600;
`;
const ProjectSetItemDeleteBtn = styled.div`
background-color:white;
margin-left:10px;
width:100px;
height:50%;
display:flex;
align-items: center;
justify-content: center;
box-shadow: 1px 1px 1px 1px #8E8E8E;
border-radius:10px;
font-size:15px;
font-weight:600;
`;

const ProjectIconBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 50px;
height:50px;

`;
const ProjectIcon1 = styled.img`

width:50%;
`;
const ProjectIcon2 = styled.img`
transition: transform 0.3s ease-in-out; 
transform: ${({ rotate }) => rotate ? 'rotate(180deg)' : 'rotate(0)'}; 
width:50%;
`;
const ProjectIcon3 = styled.img`

width:25px;
`;

const Modal = styled.div`
display:flex;
flex-direction: column;
position: absolute;
justify-content: center;
align-items: center;
width: 10vw;
height: 12vw;
background-color:white;
gap:20px;
right:10vw;
border-radius:10px;
box-shadow: 1px 1px 1px 1px #8E8E8E;
`;