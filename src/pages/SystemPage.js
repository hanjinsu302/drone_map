import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SystemPage = () => {
    return(
        <BackGround>
            시스템 페이지
            <SystemBoard>
                <SystemBoardHeader>
                    시스템명
                </SystemBoardHeader>
                <SystemBoardBox>
                    <SystemBoardInfo>
                        <p>Priority</p>
                        <p>Capability</p>
                        <p>Gpu Mask</p>
                        <p>Priority</p>

                        <a>ready</a>

                    </SystemBoardInfo>
                    <SystemBoardCpu>

                    </SystemBoardCpu>
                    <SystemBoardRam>

                    </SystemBoardRam>
                    <SystemBoardTask>
                        task 게이지바
                        

                    </SystemBoardTask>

                </SystemBoardBox>

            </SystemBoard>
        </BackGround>

    )
}

export default SystemPage;


const BackGround = styled.div`
display:flex;
flex-direction:column;
  width: auto;
  height: 100vh;
  background-color:#F2F2F2;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0px 0px 0px;
  margin-left:65px;
  
`;

const SystemBoard = styled.div`
width:80vw;
height:20vw;
background-color:white;
border-radius: 10px;
`;

const SystemBoardHeader = styled.div`
display:flex;
align-items: center;
width:100%;
height: 50px;
border-bottom: 1px solid #F2F2F2;
`;
 const SystemBoardBox = styled.div`
 display:flex;
 width:100%;
 height:100%;
 `;

 const SystemBoardInfo = styled.div`
 width:25%;
 height:100%;
 border:1px solid #f2f2f2;
 `;
 const SystemBoardCpu = styled.div`
 width:25%;
 height:100%;
 border:1px solid #f2f2f2;
 `;
 const SystemBoardRam = styled.div`
 width:25%;
 height:100%;
 border:1px solid #f2f2f2;
 `;
 const SystemBoardTask = styled.div`
 width:25%;
 height:100%;
 border:1px solid #f2f2f2;
 `;