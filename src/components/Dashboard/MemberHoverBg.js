import React from 'react'
import styled from 'styled-components'

const Topwraper = styled.div`
`
const Cardhover = styled.div`

width: 80px;
height: 80px;
border-radius: 250px;
background-image: url(${(props) => props.memberImg});
border:3px solid ${(props)=>props.Brcolor};
background-color:${(props)=>props.Bgcolor};
background-size: cover;
background-repeat: no-repeat;
background-position: center;

`
export default function MemberHoverBg(props) {
  return (
    <div>
         <Topwraper>
        <Cardhover memberImg={props.memberImg} Brcolor={props.Brcolor} Bgcolor={props.Bgcolor}> </Cardhover>              
        </Topwraper>
    </div>
  )
}
