import React, { useState } from 'react'
import styled from 'styled-components'
import Image from './images/legend.svg'
import LegendSlider from './LegendSlider'


const Container = styled.div`
    width: 19px;
    height: 29px;
    background: #2970B1;
    border: 1px solid #BDDFFF;
    border-radius: 4px 0px 0px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 100px;
    cursor: pointer;
`
const Img = styled.img``

export default function Legend() {
    const [show, setShow]=useState(false);
  return (
    <div style={{position: "relative"}}>
      <Container onClick={()=>setShow(true)}>
        <Img src={Image} />
      </Container>
      {show && <LegendSlider />}
    </div>
  )
}


