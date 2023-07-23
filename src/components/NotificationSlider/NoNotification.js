import React from 'react'
import styled from 'styled-components'
import Notify from "./images/readNotify.png"

const AllReadWrap = styled.div`
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
`
const ReadSubHeader = styled.p`
    margin: 0;
    color: #878787;
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 20px;
    margin-top: 7px;
`
const Img = styled.img``

export default function NoNotification() {
  return (
    <div>
        <AllReadWrap>
            <Img src={Notify} />
            <ReadSubHeader>Your notifications will appear here.</ReadSubHeader>
        </AllReadWrap>
    </div>
  )
}