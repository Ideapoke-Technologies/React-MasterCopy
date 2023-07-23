import React from 'react'
import styled from 'styled-components'
import "./Pills.css";

const FolloWrap = styled.div`
    padding: 4px 10px;
    border-radius: 16px;
    background-color: #2970B1;
    width: 65px;
    text-align: center;
    font-family: 'Poppins';
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.407px;
    letter-spacing: 0.15px;
    color: #fff;
`
const FollowTooltip = styled.div`
    background-color: rgba(69, 69, 69, 0.90);
    padding: 10px;
    font-family: 'Poppins';
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: #fff;
    width: 85px;
`

export default function Follow(props) {
  return (
    <div>
        <FolloWrap className='tooltip' onClick={props.onClick} >+ Follow</FolloWrap>
        <FollowTooltip className='tooltiptext'>Follow Maps for regular updates</FollowTooltip>
    </div>
  )
}
