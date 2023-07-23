import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'

const Keywraper = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`
const Keyarea = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 7px;
color: #fff;
background: #1F7793;
box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.12);
border-radius: 28.3233px;
padding: 10px;
cursor: pointer;
display: inline-block;
`
const Keydesign = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 7px;
color: #fff;
background: #1F936E;
box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.12);
border-radius: 28.3233px;
padding: 10px;
display: inline-block;
cursor: pointer;
`
export default function Keytag() {
  return (
    <div>
      
    <Keywraper>
    <Keyarea>
     In Progress
    </Keyarea>
    <Keydesign>
    Design is Ready
    </Keydesign>

    </Keywraper>

    </div>
  )
}
