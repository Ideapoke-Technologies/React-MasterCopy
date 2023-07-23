import React from 'react'
import styled from 'styled-components'
import Clogo from './images/Logo.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
const Img = styled.img` 
width: 75%;
/* padding: 10px 0 0 15px; */
`


export default function Iplogo() {
  return (
    <div>
      <Wrapper>
          <Img src={Clogo}></Img>
      </Wrapper>
    </div>
  )
}
