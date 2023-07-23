import React from 'react'
import styled from 'styled-components'

const VerifyMsg = styled.div`
    color: #454545;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 32px;
    width: 395px;
    text-align: left;
    margin-top: 48px;
`

export default function VerifyEmail() {
  return (
    <div>
      <VerifyMsg>Verification email has been sent to your email ID. Please check your email.</VerifyMsg>
    </div>
  )
}
