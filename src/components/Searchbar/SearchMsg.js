import React from 'react'
import styled from 'styled-components'

const ErrorMsg = styled.div`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #FF7624;
    margin-top: 10px;
    margin-bottom: 10px;
`

export default function SearchMsg(props) {
  return (
    <div>
        <ErrorMsg>{props.text}</ErrorMsg>
    </div>
  )
}
