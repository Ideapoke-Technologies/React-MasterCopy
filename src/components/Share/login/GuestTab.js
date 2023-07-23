import React from 'react'
import { styled } from 'styled-components'

const TabWrap = styled.div`
    border: 1px solid #FF7624;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    margin-bottom: 8px;
`
const LoginWrap = styled.div`
    font-size: 24px;
    font-family: 'Poppins';
    line-height: 42px;
    letter-spacing: -1.25px;
    color: #FF7624;
    padding: 6px 20px;
    border-right: 1.2px solid #ff7624;
    background-color: #FFF3E1;
    border-radius: 8px 0 0 8px;
`
const Guest = styled.div`
    font-size: 24px;
    font-family: 'Poppins';
    line-height: 42px;
    letter-spacing: -1.25px;
    padding: 6px 14px;
    color: #FF7624;
`

export default function GuestTab() {
  return (
    <div>
        <TabWrap>
            <div>
                <LoginWrap>Login</LoginWrap>
            </div>
            <div>
                <Guest>Continue as Guest</Guest>
            </div>
        </TabWrap>
    </div>
  )
}
