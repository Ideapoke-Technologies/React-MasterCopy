import React from 'react'
import Logo from "../images/Logo-ip.svg"
import styled from 'styled-components'

const LogoHeader = styled.div`
    padding: 32px;
    padding-bottom: 6px;
`
const Img = styled.img``

const Txt = styled.div`
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 16px;
    color: #454545;
`

export default function LoginHeader() {
  return (
    <div>
      <LogoHeader>
        <Img src={Logo} />
        <Txt>A Research Collaboration platform like no other.</Txt>
      </LogoHeader>
    </div>
  )
}
