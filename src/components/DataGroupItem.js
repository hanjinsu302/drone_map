import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import searchIcon from "../assets/Search.png"
import hamburgerIcon from "../assets/hamburger.png"
import listIcon from "../assets/list.png"
import groupIcon from "../assets/Group.png"
import moreIcon from "../assets/MoreIcon.png"



const DataGroupItem = () => {
    const [showModal, setShowModal] = useState(false); // 모달의 상태를 관리하는 state입니다.
    const [showDataGroupSetItem, setShowDataGroupSetItem] = useState(false); // 추가
    const [showDataGroupSetItemInfo, setShowDataGroupSetItemInfo] = useState(false); // 추가
    const [rotateIcon, setRotateIcon] = useState(false); // 추가

  
const handleOpenModal = () => {
setShowModal(true);
}

const handleCloseModal = () => {
setShowModal(false);
}

const handleToggleDataGroupSetItem = () => {
  setRotateIcon(!rotateIcon); // 아이콘 회전 상태 변경
  setShowDataGroupSetItem(!showDataGroupSetItem); // <DataGroupSetItem> 보여짐 상태 변경
}

const handleToggleDataGroupSetItemInfo = () => {
  setShowDataGroupSetItemInfo(!showDataGroupSetItemInfo);
 } // <DataGroupSetItemInfo> 보여짐 상태 변경
    return(
        <BackGround>

        
        <DataGroupContainer>
        <DataGroupHeader>
          <DataGroupIconBox>
            <DataGroupIcon1 src={hamburgerIcon} onClick={handleOpenModal}/>
          </DataGroupIconBox> 그룹명
        </DataGroupHeader>
        <DataGroupSetHeader>
          <DataGroupIconBox>
          <DataGroupIcon2 src={groupIcon} onClick={handleToggleDataGroupSetItem} rotate={rotateIcon}/>
          </DataGroupIconBox> 데이터셋 갯수 | 숫자 표시
        </DataGroupSetHeader>
        

        {showDataGroupSetItem && (
        <DataGroupSetItem>
        <DataGroupSetItemHeader>
        <DataGroupIcon3 src={moreIcon} onClick={handleToggleDataGroupSetItemInfo} /> 
        | 철새로 | 아이콘 | 숫자 | Bar
        
        </DataGroupSetItemHeader>
        {showDataGroupSetItemInfo && (
        <DataGroupSetItemInfo>
          <p>생성날짜</p>
          <p>Disksdfsdf</p>
          <DataGroupSetItemBtnBox>
            <DataGroupSetItemDownBtn>Download</DataGroupSetItemDownBtn>
            <DataGroupSetItemMapBtn>Map</DataGroupSetItemMapBtn>
          </DataGroupSetItemBtnBox>
        </DataGroupSetItemInfo>
        )}
        </DataGroupSetItem>
        )}
      </DataGroupContainer>
      {showModal && ( // showModal state가 true일 때만 모달 컴포넌트를 렌더링합니다.
      <Modal>
         <button onClick={handleCloseModal}>X</button>
        <p>그룹 편집</p>
        <p>데이터셋 추가</p>

      </Modal>
      )}
      </BackGround>

    )
}

export default DataGroupItem;

const BackGround = styled.div`
display:flex;
`;


const DataGroupContainer = styled.div`
width: 35vw;
height:max-contents;
background-color:white;
border-radius:20px;
padding-left:10px;
margin-left:3vw;
`;

const DataGroupHeader = styled.div`
display:flex;
align-items: center;
width:100%;
height:50px;
font-size:20px;
font-weight:600;
`;


const DataGroupSetHeader = styled.div`
display:flex;
align-items: center;
width:100%;
height: 50px;
padding-left:1vw;
`;

const DataGroupSetItem = styled.div`
padding-left:2vw;
`;

const DataGroupSetItemHeader = styled.div`
background-color:red;
display:flex;
align-items: center;
`;
const DataGroupSetItemInfo = styled.div`
padding-left:2vw;
height:max-contents;
`;
const DataGroupSetItemBtnBox = styled.div`
width:100%;
height:80px;
display:flex;
align-items: center;
`;
const DataGroupSetItemDownBtn = styled.div`
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
const DataGroupSetItemMapBtn = styled.div`
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

const DataGroupIconBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 50px;
height:50px;

`;
const DataGroupIcon1 = styled.img`

width:50%;
`;
const DataGroupIcon2 = styled.img`
transform: ${({ rotate }) => rotate ? 'rotate(180deg)' : 'rotate(0)'}; 
width:50%;
`;
const DataGroupIcon3 = styled.img`

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