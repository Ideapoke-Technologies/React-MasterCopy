import React from 'react'
import { styled } from 'styled-components'
import Logo from "../designelements/images/Logo-ip.svg"
import { SubHeader } from './LoginForm'

const GuestWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Img = styled.img``

const Text = styled.div`
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 16px;
    color: #454545;
    margin-bottom: 12px;
`

export default function GuestConLogin() {
  return (
    <div>
        <GuestWrap>
            <div>
                <Img src={Logo} />
            </div>
            <div style={{marginBottom: "50px", textAlign: "left"}}>
                <Text><span style={{fontWeight: "700"}}>Ideapoke - a Research Collaboration platform</span> like no other.</Text>
                <SubHeader>Login to see your research come alive!</SubHeader>
            </div>
        </GuestWrap>
    </div>
  )
}
