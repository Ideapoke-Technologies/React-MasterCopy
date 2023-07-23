import React from 'react'
import styled from 'styled-components'

const NotifTag = styled.div`
    color: #454545;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 18px;
    padding: 3px 6px;
    border-radius: 4px;
    background-color: ${(props)=>props.bgTag};
    width: auto;
    text-align: center;
    width: ${(props)=>props.width};
`
const History = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`
const Date = styled.p`
    color: #B4B4B4;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 18.5px;
    margin: 0;
`
const Time = styled.p`
    color: #B4B4B4;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 18.5px;
    margin: 0;
`

export default function NotificationProgress(props) {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <NotifTag bgTag={props.bgTag} width={props.width}>{props.tag}</NotifTag>
        <History>
            <Date>{props.date}</Date>
            {/* <div style={{color: "#B4B4B4",fontSize: "12px"}}>@</div> */}
            <Time>{props.time}</Time>
        </History>
    </div>
  )
}
