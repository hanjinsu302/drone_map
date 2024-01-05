import React, { useEffect, useState } from 'react';
import GroupItem from '../components/testItem';
import { showDatasetGroup } from '../api/apitest';
import styled from 'styled-components';

const TestPage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    showDatasetGroup('')
      .then(result => setGroups(result.listgroups))
      .catch(error => console.error(error));
  }, []);

  return (
    <BackGround>
      {groups.slice(0,8).map((group) => (
        <GroupItem key={group.gcode} group={group} />
      ))}
    </BackGround>
  );
};

export default TestPage;


const BackGround = styled.div`
display:flex;
flex-direction:column;
  width: auto;
  height: 100vh;
  background-color:pink;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0px 0px 0px;
  margin-left:65px;
  
  
`;