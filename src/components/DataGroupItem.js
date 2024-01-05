import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import searchIcon from "../assets/Search.png"
import hamburgerIcon from "../assets/hamburger.png"
import listIcon from "../assets/list.png"
import groupIcon from "../assets/Group.png"
import moreIcon from "../assets/MoreIcon.png"
import { showDatasetGroup } from '../api/apitest';


//import { getDatasetGroups } from '../api/apitest.js';






const DataGroupItem = ({ group }) => {
    const [showModal, setShowModal] = useState(false); 
    const [showEditModal, setShowEditModal] = useState(false); 
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDataGroupSetItem, setShowDataGroupSetItem] = useState(false); // 추가
    const [showDataGroupSetItemInfo, setShowDataGroupSetItemInfo] = useState(false); // 추가
    const [rotateIcon, setRotateIcon] = useState(false); // 추가

    const [selectedGroup, setSelectedGroup] = useState({gname: "", gcode: ""});

    function handleGroupClick(group) {
      setSelectedGroup({gname: group.gname, gcode: group.gcode});
      handleOpenModal();
    }
    

    function handleSaveClick() {
      // selectedGroup의 상태를 사용하여 API 요청을 보냅니다.
      //editGroupAPI(selectedGroup); 
    }
    



   
    

    
  


    const [formData, setFormData] = useState({
      gcode:'',
      dname:'',
      category:'',
      area:'',
      description:'',
      type:''
    })

  
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
const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


const handleSelectChange = (e) => {
  setFormData({
    ...formData,
    type: e.target.value
  });
};

const handleSaveModal = () => {
  // 저장 버튼을 누르면 입력한 값들을 처리하고 모달 창을 닫을 수 있는 로직 작성
  // 예시로는 입력한 값들을 콘솔에 출력하고 모달 창을 닫도록 구현
  console.log('입력한 값:', formData);
  handleCloseModal();
};


    
  

const handleToggleDataGroupSetItem = () => {
  setRotateIcon(!rotateIcon); // 아이콘 회전 상태 변경
  setShowDataGroupSetItem(!showDataGroupSetItem); // <DataGroupSetItem> 보여짐 상태 변경
}

const handleToggleDataGroupSetItemInfo = () => {
  setShowDataGroupSetItemInfo(!showDataGroupSetItemInfo);
 } // <DataGroupSetItemInfo> 보여짐 상태 변경

//  const [datasetGroups, setDatasetGroups] = useState(null);

//  useEffect(() => {
//    getDatasetGroups()
//      .then(data => setDatasetGroups(data.slice(0, 5))) // 처음 5개의 항목만 저장합니다.
//      .catch(error => console.error(error));
//  }, []);

//  if (!datasetGroups) {
//    return <div>Loading...</div>;
//  }
 
    return(
        <BackGround>
          
     
        <DataGroupContainer>
        <DataGroupHeader>
          <DataGroupIconBox>
          <DataGroupIcon1 src={hamburgerIcon} onClick={() => handleGroupClick(group)}/>
          </DataGroupIconBox>{group.gname} | {group.gcode}
        </DataGroupHeader>
        <DataGroupSetHeader>
          <DataGroupIconBox>
          <DataGroupIcon2 src={groupIcon} onClick={handleToggleDataGroupSetItem} rotate={rotateIcon}/>
          </DataGroupIconBox> 데이터셋 갯수 | {group.dscount}
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
            <a href='/dataset/map'>Map</a>
          </DataGroupSetItemBtnBox>
        </DataGroupSetItemInfo>
        )}
        </DataGroupSetItem>
        )}
      </DataGroupContainer>
          
      {showModal && ( // showModal state가 true일 때만 모달 컴포넌트를 렌더링합니다.
      <Modal>
         <button onClick={handleCloseModal}>X</button>
        <DataGroupEditBtn onClick={handleOpenEditModal}>그룹 편집</DataGroupEditBtn>
        <DatasetAddBtn onClick={handleOpenAddModal}>데이터셋 추가</DatasetAddBtn>
      </Modal>
      )}
      {/* 그룹 수정 modal */}
      {showEditModal && (//EditModal
         <EditModalContainer>
         <ModalHeader>
           <p>그룹 편집</p>
           <button onClick={handleCloseEditModal}>X</button>
   
         </ModalHeader>
         <DataGroupAddForm>
         <InputBox>
  <label>그룹명</label>
  <input 
    type='text' 
    value={selectedGroup.gname} 
    onChange={(e) => setSelectedGroup({...selectedGroup, gname: e.target.value})}
  />
</InputBox>

           <InputBox>
             <label>설명</label>
             <input type='text' style={{height:'10vw'}}></input>
           </InputBox>
           <ButtonContainer>
             <CancelButton onClick={handleCloseEditModal}>Cancel</CancelButton>
             <SaveButton onClick={handleSaveClick}>Save</SaveButton>
           </ButtonContainer>
         </DataGroupAddForm>
       </EditModalContainer>
      )}
      {showAddModal && (
        <AddModalContainer>
          <AddModalHeader>
            그룹명(gname)
          </AddModalHeader>
          <AddModalInputBox>
          <label>테이터 섯 명</label>
          <input type='text' id='dname' name="dname"  placeholder="내용을 입력하세요" 
                required  value={formData.dname}
                onChange={handleInputChange}/>
          </AddModalInputBox>
          <AddModalInputBox>
          <label>카테고리</label>
          <input type='text' id='category' name="category"  placeholder="내용을 입력하세요" 
           value={formData.category}
           onChange={handleInputChange}
                required/>
          </AddModalInputBox>
          <AddModalInputBox>
          <label>촬영지역</label>
          <input type='text' id='area' name="area"  placeholder="내용을 입력하세요" 
           value={formData.area}
           onChange={handleInputChange}
          
                required/>
          </AddModalInputBox>
          <AddModalInputBox>
          <label>설명</label>
          <input type='text' id='description' name="description"  placeholder="내용을 입력하세요"
           value={formData.description}
           onChange={handleInputChange} 
                required/>
          </AddModalInputBox>
          <AddModalInputBox>
          <label>종류</label>
          
<select type='text' name="type" id='type' value={formData.type}
            onChange={handleSelectChange}>
    <option value="">종류선택</option>
    <option value="type1">종류1</option>
    <option value="type2">종류2</option>
    <option value="type3">종류3</option>

</select>
          </AddModalInputBox>
          <AddModalCancelBtn onClick={handleCloseAddModal}>cancel</AddModalCancelBtn>
          <AddModalSaveBtn onClick={handleSaveModal}> save</AddModalSaveBtn>
          {Object.values(formData).some((value) => value !== '') && (
            <div>
              <h3>입력한 값 확인:</h3>
              <p>DataSet: {formData.dname}</p>
              <p>category: {formData.category}</p>
              <p>area: {formData.area}</p>
              <p>description: {formData.description}</p>
              <p>type: {formData.type}</p>
              <p>드롭존 넣을 부분</p>
            </div>
          )}
          
        </AddModalContainer>
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
border-radius:10px;
padding-left:10px;
margin-left:3vw;
margin-bottom:1vw;
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
z-index:10;
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

const DataGroupEditBtn = styled.button``;
const DatasetAddBtn = styled.button``;



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

const AddModalContainer = styled.div`
position: absolute;
border-radius:20px;
width:50vw;
height:30vw;
background-color:white;
display flex;


`

const AddModalHeader = styled.div`
width:100%;
height:60px;
display:flex;
align-items: center;
font-size:1.5vw;
`;

const AddModalInputBox = styled.div`
width:100%;
height:60px;
background-color:pink;
display:flex;
align-items: center;
font-size:1vw;
`;
 const AddModalCancelBtn = styled.button`
 font-size:1.5vw;
 width:5vw;
 background-color:green;
 `;
 const AddModalSaveBtn = styled.button`
 font-size:1.5vw;
 width:5vw;
 `;
