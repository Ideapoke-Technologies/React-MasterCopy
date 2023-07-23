import React from 'react'
import styled from 'styled-components'
import Animation from './images/Animation.gif'

const Tourwraper = styled.div`

`

const Img = styled.img`
width: 44px;
    position: absolute;
    margin-top:${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
`
const Linetour = styled.div`
width: 90px;
height: 3px;
background-color: #CCA1F8;
display: inline-block;
display: inline-block;
margin: 20px;
`
const Learnbtn = styled.div`
background: rgb(255, 255, 255);
border: 1px solid rgb(242, 101, 27);
border-radius: 12px;
display: inline-block;
padding: 6px 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #F2651B;
position: absolute;
top: 40px;
`
export default function TourContent(props) {
  return (
    <div>
      <Tourwraper>
        <Img src={Animation} marginTop={props.marginTop} marginLeft={props.marginLeft}></Img>
      </Tourwraper>

    </div>
  )
}
