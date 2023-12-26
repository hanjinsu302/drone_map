import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import searchIcon from "../assets/Search.png"
import hamburgerIcon from "../assets/hamburger.png"
import listIcon from "../assets/list.png"
import ProjectItem from '../components/ProjectItem';

const ProjectPage = () =>{
const [showModal, setShowModal] = useState(false); // 모달의 상태를 관리하는 state입니다.

const handleOpenModal = () => {
setShowModal(true);
}

const handleCloseModal = () => {
setShowModal(false);
}

return(
<BackGround>
  <DataSetHeader>
    <SearchBox>
      <SearchIconBox>
        <SearchIcon src={searchIcon} />
      </SearchIconBox>
      <SearchForm>
        <input type='text' placeholder="프로젝트명 , 작업명"></input>
      </SearchForm>
      <SearchBtn>Search</SearchBtn>
      <GroupAdd onClick={handleOpenModal}> Project Add</GroupAdd>
    </SearchBox>
  </DataSetHeader>
  {showModal && ( // showModal state가 true일 때만 모달 컴포넌트를 렌더링합니다.
  <GroupAddModal>

    <ModalContainer>
      <ModalHeader>
        <p>그룹 추가</p>
        <button onClick={handleCloseModal}>X</button>

      </ModalHeader>
      <DataGroupAddForm>
        <InputBox>
          <label>그룹명</label>
          <input type='text'></input>
        </InputBox>
        <InputBox>
          <label>설명</label>
          <input type='text' style={{height:'10vw'}}></input>
        </InputBox>
        <ButtonContainer>
          <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
          <SaveButton>Save</SaveButton>
        </ButtonContainer>
      </DataGroupAddForm>
    </ModalContainer>
  </GroupAddModal>
  )}

  <ProjectItem/>





 
</BackGround>
)
}


export default ProjectPage;

const BackGround = styled.div`
display:flex;
flex-direction:column;
width: auto;
height: 100vh;
background-color:#F2F2F2;
border-radius: 20px 0px 0px 0px;
margin-left:65px;
`;

const DataSetHeader = styled.div`
display:flex;
align-items: center;
width:100%;
height:100px;
`

const SearchBox = styled.div`
margin-left:3vw;
display:flex;
width: max-contents;
height:3vw;
border-radius:10px;
`;
const SearchIconBox = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 3vw;
height:100%;
background-color:white;
border-radius:10px 0px 0px 10px;
border-right: 1px solid #d9d9d9;
box-shadow: 1px 1px 1px 1px #8E8E8E;
`;
const SearchIcon = styled.img`
width: 50%;
`;


const SearchForm= styled.div`
width:15vw;
input{
width:100%;
height:100%;
border:none;
font-size:1vw;
padding-left:20px;
border-radius:0px 10px 10px 0px;
box-shadow: 1px 1px 1px 1px #8E8E8E;
}
`;
const SearchBtn = styled.button`
width:7vw;
height:100%;
background-color:white;
border-radius:10px;
margin-left:20px;
font-weight:600;
font-size:1vw;
box-shadow: 1px 1px 1px 1px #8E8E8E;
`;

const GroupAdd = styled.button`
width:8vw;
height:100%;
background-color:#4169E1;
color:white;
border-radius:10px;
margin-left:20px;
font-weight:600;
font-size:1vw;
box-shadow: 1px 1px 1px 1px #8E8E8E;

`;

const GroupAddModal = styled.div`
display:flex;
align-items: center;
justify-content: center;
position: absolute;
width:100%;
height:100%;
backdrop-filter: blur(100px);
`;
const ModalContainer = styled.div`
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


