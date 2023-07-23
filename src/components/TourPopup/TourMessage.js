import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import Button from '../Button/Button'
import Arrow from './images/message-arrow.svg'


const Messagewraper = styled.div`
width: 450px;
height:auto;
background: #1F936E;
box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.25);
margin: 0 auto;
outline: none;
border-radius: 12px;
padding: 25px 50px;
position: absolute;
 top: ${(props) => props.top};
  left: ${(props) => props.left};
     /* 90% resolution */
    @media screen and (min-width: 1400px){
      top: ${(props) => props.top};
      left: ${(props) => props.left};

    }


`
const Headmessage = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 42px;
letter-spacing: -1.25px;
color: #FFFFFF;
`

const Linetour = styled.div`
width: 90px;
height: 3px;
background-color: #1E8363;
display: inline-block;
margin: 12px 15px 13px 10px;
`
const Number = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 42px;
letter-spacing: 0.25px;
color: #CECCCC;
`
const Textwraper = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 27px;
color: #FFFFFF;
`
const Topwraper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: -35px;
align-items: center;
`
const Img = styled.img`
position: relative;
  right: 80px;
  bottom: 16px;
`
const Btnwraper = styled.div`
display: flex;
flex-direction: row;
gap: 18px;
justify-content: end;
margin: 20px 0 0 0px;
`

const Btntext = styled.div`
background: rgb(31, 147, 110);
box-shadow: rgba(69, 69, 69, 0.25) 0px 2px 6px;
border-radius: 5px;
padding: 5px 25px;
border: 1px solid rgb(255, 255, 255);
display: inline-block;
cursor: pointer;
&:hover{
  border: 1px solid #275f27;
  color: rgb(255, 255, 255);
  background: #275f27;
}
`
const Btntext2 = styled.div`
background: rgb(31, 147, 110);
box-shadow: rgba(69, 69, 69, 0.25) 0px 2px 6px;
border-radius: 5px;
padding: 5px 25px;
border: 1px solid rgb(255, 255, 255);
display: inline-block;
&:hover{
  border: 1px solid #275f27;
  color: rgb(255, 255, 255);
  background: #275f27;
}

`


export default function TourMessage(props) {
  return (
    <div>
      <Messagewraper className="animated fadeIn" top={props.top} left={props.left} >
        <Img src={Arrow}></Img>
        <Topwraper>
          <Headmessage>
            {props.title}
          </Headmessage>
          <Number>
            {props.step + 1}/5
          </Number>
        </Topwraper>

        <Textwraper>
          <P text={props.description} color="#FFFFFF" fontSize="14px" fontWeight="400" cursor="auto"></P>
        </Textwraper>
        <Btnwraper>
          <Btntext onClick={() => { props.setTourItem(props.step, !props.boolean, "skip"), props.updateTourCount() }}>
            <P text="Skip" color="#FFFFFF" fontSize="18px" fontWeight="600" cursor="pointer"></P>
          </Btntext>
          {props.step != 0 && <Btntext2 onClick={() => { props.setTourItem((props.step - 1), props.boolean, "prev") }}>
            <P text="< Previous" color="#FFFFFF" fontSize="18px" fontWeight="600" cursor="pointer"></P>
          </Btntext2>}
          {props.step != 4 && <Button text="Next" variant="solidOrange" width="84px" height="40px" onClick={() => { props.setTourItem((props.step + 1), props.boolean, "next") }}></Button>}
          {props.step === 4 && <Button text="Exit" variant="solidOrange" width="84px" height="40px" onClick={() => { props.setTourItem(props.step, !props.boolean, "exit"), props.updateTourCount() }}></Button>}

        </Btnwraper>
      </Messagewraper>

    </div>
  )
}
