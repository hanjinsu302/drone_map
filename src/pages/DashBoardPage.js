import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import groupIcon from "../assets/Group.png"
import TaskItems from '../components/TaskItems';

const DashBoardPage = () => {
  


  //const [isOpen, setIsOpen] = useState(null);
  // const handleClick = (id) => {
  //   setIsOpen(isOpen === id ? null : id); // 클릭한 아이템의 ID가 이미 저장된 ID와 같다면 null로, 아니라면 해당 아이템의 ID로 상태를 변경
  // };

  return(
    <BackGround>
      {/* const data = // 불러온 데이터 데이터를 어디서 받아 올지에 대한 고민 필요 그리고 몇개까지만 보여주고 페이지 넘어갈지에 대한 고민 필요
          data.map((item) => (
      <TaskContainer key={item.id} isOpen={isOpen === item.id}>//id값 대신 함수명 설정 필요
      <TaskItemHeader onClick={() => handleClick(item.id)}> // 각 아이템의 ID를 인자로 넘김
      </TaskItemHeader>
      </TaskContainer> */}
      <TaskItems />
      
    </BackGround>
  );
};

export default DashBoardPage;

  const BackGround = styled.div`
display:flex;
flex-direction:column;
  width: auto;
  height: 100vh;
  background-color:#F2F2F2;
  align-items: center;
  border-radius: 20px 0px 0px 0px;
  margin-left:65px;
  
  
`;
