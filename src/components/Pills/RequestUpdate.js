import React from 'react'
import styled from 'styled-components'

const PillsWrap = styled.div`
    padding: 4px 10px;
    border-radius: 16px;
    background-color: #2970B1;
    width: 105px;
    text-align: center;
    font-family: 'Poppins';
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.407px;
    letter-spacing: 0.15px;
    color: #fff;
`

export default function RequestUpdate(props) {
  return (
    <div>
        <PillsWrap>Request Update</PillsWrap>
    </div>
  )
}
