import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import moreIcon from "../assets/MoreIcon.png"
import { setTokenInCookie, getTokenFromCookie } from '../api/apitest';


const DataSetItem = ({dataset}) => {

    const [showDataGroupSetItemInfo, setShowDataGroupSetItemInfo] = useState(false); // 추가
    const handleToggleDataGroupSetItemInfo = () => {
        setShowDataGroupSetItemInfo(!showDataGroupSetItemInfo);
       }
    return(
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
    )
}

export default DataSetItem;

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

const DataGroupIcon3 = styled.img`
z-index:1;
width:25px;
`;
