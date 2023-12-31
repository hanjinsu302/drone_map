import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import hamburgerIcon from "../assets/hamburger.png"
import groupIcon from "../assets/Group.png"
import moreIcon from "../assets/MoreIcon.png"



const ProjectItem = () => {
    const [showModal, setShowModal] = useState(false); // 모달의 상태를 관리하는 state입니다.
    const [showEditModal, setShowEditModal] = useState(false); 
    const [showAddModal, setShowAddModal] = useState(false);
    const [showProjectSetItem, setShowProjectSetItem] = useState(false); // 추가
    const [showProjectSetItemInfo, setShowProjectSetItemInfo] = useState(false); // 추가
    const [rotateIcon, setRotateIcon] = useState(false); // 추가

  
const handleOpenModal = () => {
setShowModal(true);
}

const handleCloseModal = () => {
setShowModal(false);
}
const handleOpenEditModal = () => {
  setShowEditModal(true);
  }
  const handleCloseEditModal = () => {
  setShowEditModal(false);
  }
  const handleOpenAddModal = () => {
    setShowAddModal(true);
    }
    const handleCloseAddModal = () => {
    setShowAddModal(false);
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
        <ProjectEditBtn onClick={handleOpenEditModal}>프로젝트 편집</ProjectEditBtn>
        <ProjectAddBtn onClick={handleOpenAddModal}>작업 추가</ProjectAddBtn>

      </Modal>
      )}
       {showEditModal && (//EditModal
         <EditModalContainer>
         <ModalHeader>
           <p>프로젝트 편집</p>
           <button onClick={handleCloseEditModal}>X</button>
   
         </ModalHeader>
         <DataGroupAddForm>
           <InputBox>
             <label>그룹명</label>
             <input type='text' placeholder='선택한 그룹의 이름 표시'></input>
           </InputBox>
           <InputBox>
             <label>설명</label>
             <input type='text' style={{height:'10vw'}}></input>
           </InputBox>
           <ButtonContainer>
             <CancelButton onClick={handleCloseEditModal}>Cancel</CancelButton>
             <SaveButton>Save</SaveButton>
           </ButtonContainer>
         </DataGroupAddForm>
       </EditModalContainer>
       )}
       {showAddModal && (
        <ProjectAddContainer>
          <ProjectAddHeader>
            프로젝트명 <p onClick={handleCloseAddModal}> close </p>
          </ProjectAddHeader>
          <ProjectAddForm>
            <InputBox>
            <label>
              title
            </label>
            <input></input>
            </InputBox>
            <InputBox>
            <label>type</label>
          <select type='text' name="type" id='type' >
              <option value="">종류선택</option>
              <option value="type1">3D Reconstruction</option>
              <option value="type2">Panorama</option>
              <option value="type3">upload(geotiff)</option>
              <option value="type4">upload(geojson)</option>
          
          </select>
            </InputBox>
            <InputBox>
            <label>mod</label>
          <select type='text' name="type" id='type' >
              <option value="">종류선택</option>
              <option value="type1">basic</option>
              <option value="type2">advance</option>
              <option value="type3">professional</option>
          
          </select>
            </InputBox>
            <InputBox>
            <label>quality</label>
          <select type='text' name="type" id='type' >
              <option value="">종류선택</option>
              <option value="type1">low</option>
              <option value="type2">medium</option>
              <option value="type3">high</option>   
          </select>
            </InputBox>
            <InputBox>
            <label>CFSM</label>
          <select type='text' name="type" id='type' >
              <option value="">종류선택</option>
              <option value="type1">none</option>
              <option value="type2">car remove</option>
          </select>
            </InputBox>
            <InputBox>
            <label>detct marker</label>
          <select type='text' name="type" id='type' >
              <option value="">종류선택</option>
              <option value="type1">none</option>
              <option value="type2">detect marker</option> 
          </select>
            </InputBox>
            <InputBox>
            <label>data set</label>
          <select type='text' name="type" id='type' >
              <option value="">select project</option>
              <option value="type1">종류1</option>
              <option value="type2">종류2</option>
              <option value="type3">종류3</option>   
          </select>
          <select type='text' name="type" id='type' >
              <option value="">Choose your option</option>
              <option value="type1">종류1</option>
              <option value="type2">종류2</option>
              <option value="type3">종류3</option>   
          </select>
            </InputBox>
            <Btn>작업 시작</Btn>
          
          </ProjectAddForm>

        </ProjectAddContainer>
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

const EditModalContainer = styled.div`
position: absolute;
border-radius:20px;
width:50vw;
height:max-contents;
background-color:white;


`;

const ModalHeader =styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:100%;
height: 100px;
border-bottom: 2px solid #d9d9d9;
p{
    margin-left:2vw;
    font-size:2vw;
    font-weight:600;
}
button{
    margin-right:2vw;
}
`;
const DataGroupAddForm =styled.div`

`;


const InputBox = styled.div`
margin-top:3vw;
display:flex;
width:100%;
label{
margin-left:5vw;
width:100px;
font-size:25px;
font-weight:600;

}
input{
width: 60%;
height:3vw;
border-radius:10px;
border: 2px solid #4169E1;
}
`;
const ButtonContainer = styled.div`
display:flex;
margin-top:50px;
width:100%;
height:3.5vw;
justify-content:center;
gap:50px;
margin-bottom:3vw;

`;

const CancelButton = styled.button`
width:13vw;
height:100%;
background-color:#d9d9d9;
border-radius:10px;
font-size:20px;
font-weight:600;
color: white;

`;
const SaveButton = styled.button`
width: 13vw;
height:100%;
background-color:#4169E1;
color: white;
border-radius:10px;
font-size:20px;
font-weight:600;
`;

const ProjectAddContainer = styled.div`
position: absolute;
background-color:white;;
width:50vw;
height:40vw;
`;

const ProjectAddHeader = styled.div`
width:100%;
height:100px;
background-color:green;
`;

const ProjectAddForm = styled.div`

`;

const Btn = styled.button``;


const ProjectEditBtn = styled.button``;
const ProjectAddBtn = styled.button``;