import React from 'react'
import styled from 'styled-components'

const Topwraper = styled.div`
width: 325px;
height: 174px;
border-radius: 10px 10px 0 0;
background-image: url(${(props) => props.img});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
filter: drop-shadow(0px 2px 6px rgba(69, 69, 69, 0.25));
border: 1px solid #d5d0d0;
`

const TechImg = styled.div`

`
export default function Drbackgroundimage(props) {
  return (
    <div>
      <Topwraper>
      <TechImg img={props.img}></TechImg>
      </Topwraper>
    </div>
  )
}
