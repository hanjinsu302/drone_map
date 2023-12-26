import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import groupIcon from "../assets/Group.png"



const TaskItems = () => {
    const [isOpen, setIsOpen] = useState(false); // 새로운 상태를 추가
   

  const handleClick = () => {
    setIsOpen(!isOpen); // 클릭 시 isOpen 상태를 반전
    
  };

    
    return(
        <TaskContainer isOpen={isOpen}>
        <TaskItemHeader onClick={handleClick}>
          <TaskMoreBtn>
            <GroupIcon src={groupIcon} isOpen={isOpen}/>
          </TaskMoreBtn>
          <TaskName>작업명[task명]</TaskName>
          <TaskRequest>Request At:[xxxx-xx-xx xx:xx]</TaskRequest>
          <TaskFinished>Finished At:[Not Finished]</TaskFinished>
        </TaskItemHeader>
        <TaskItemProgressBar>
        <Bar>xx%</Bar>
        </TaskItemProgressBar>
        {isOpen && (
          <TaskInfo>
            <TaskTypeBox >
              <p>job type: 3D Reconstruction</p>
              <p># of photos : 330</p>
            </TaskTypeBox>
            <TaskProcess>
              Task 진행 과정 표시
            </TaskProcess>
          </TaskInfo>
        )}
      </TaskContainer>
      
        
    )
}  
export default TaskItems;


const TaskContainer = styled.div`
  margin-top:20px;
  width:80vw;
  height:${props => props.isOpen ? '200px' : '100px'};
  background-color:white;
  border-radius: 10px;
  
   transition: height 0.3s ease-in-out; 
`;



const TaskItemProgressBar = styled.div`
width:100%;
height:50px;
display:flex;
align-items: center;
justify-content: center;


`;
const Bar = styled.div`
width:80%;
background-color:#30A64A;
height:20px;
color:white;
display:flex;
align-items: center;
justify-content: center;
border-radius: 10px;
`;

const TaskMoreBtn = styled.div`
width:50px;
height:50px;
display:flex;
align-items: center;
justify-content: center;
font-size:40px
`;
const GroupIcon = styled.img`
  width:50%;
  transition: transform 0.3s ease-in-out; 
  
  ${props => props.isOpen && css`
    transform: rotate(180deg);
  `}
`;

const TaskItemHeader =styled.div`
width:100%;
height:50px;
display:flex;
align-items: center;
`;
const TaskName = styled.p`

font-size:15px;
`;
const TaskRequest = styled.p`
font-size:15px;`;

const TaskFinished = styled.p`
font-size:15px;
right:20px;
`;

const TaskInfo = styled.div`
display:flex;
width:100%;
height:100px;
`;

const TaskTypeBox = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px;
height:100%;
transition-property:inherit;

p{
  font-size:15px;

  
  
}
`;

const TaskProcess = styled.div`
display:flex;
width:80%;
align-items: center;
justify-content: center;
`;