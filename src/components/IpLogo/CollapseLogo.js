import React from 'react'
import styled from 'styled-components'
import Elogo from './images/iplogo.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
const Img = styled.img` 
/* padding: 10px 0 0 15px; */
`


export default function CollapseLogo() {
  return (
    <div>
      <Wrapper>
          <Img src={Elogo}></Img>
      </Wrapper>
    </div>
  )
}
