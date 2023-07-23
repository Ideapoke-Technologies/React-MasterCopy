import React from 'react'
import styled from 'styled-components'
import Eyeicon from "./images/eye-icon.svg";
import User from "./images/user-icon.svg";
import { P } from '../CommonStyle'




const Text = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 5px;
letter-spacing: 0.015em;
color: rgb(255, 255, 255);
padding: 0 0px 3px 18px;
position: absolute;
bottom: 5px;

`
const Blackbg = styled.div`
background: #ece7ff;
width: 30%;
color: rgb(255, 255, 255);
font-size: 11px;
border-radius: 0px 10px 10px 0px;
display: flex;
flex-direction: row;
gap: 13px;
padding: 7px 8px;
position: absolute;
top: 0px;
left: 0px;
cursor: pointer;
flex-direction: row;
padding-right: 5px;
`
const Img2 = styled.img``

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export default function HoverCard(props) {
  return (
    <div>

      <Blackbg>
        {props.viewers == null ? <Item><Img2 src={Eyeicon}></Img2>
          <P text='0' color="#454545" fontSize="14px" fontWeight="600" letterSpacing="-1px" color="#1F7793"></P></Item>
          :<Item><Img2 src={Eyeicon}></Img2>
          <P text={props.viewers} color="#454545" fontSize="14px" fontWeight="600" letterSpacing="-1px" color="#1F7793"></P></Item>}
        {props.followers != null ? <Item><Img2 src={User}></Img2>
          <P text={props.followers} color="#454545" fontSize="14px" fontWeight="600" letterSpacing="-1px" color="#1F7793"></P></Item>
          : <Item><Img2 src={User}></Img2>
          <P text='0' color="#454545" fontSize="14px" fontWeight="600" letterSpacing="-1px" color="#1F7793"></P></Item>}

      </Blackbg>
    </div>
  )
}
