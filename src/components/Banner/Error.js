import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'

const MrktAlertWrap = styled.div`
    background-color: #FFD4D4;
    /* width: 95%; */
    width: ${props => props.width ? props.width : '95%'};
    height: 56px;
    position: fixed;
    top: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px;
    z-index: 100;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
    left: 0;
`
const AlertTxt = styled.div``


export default function Alert(props) {
  return (
    <div>
      <MrktAlertWrap width={props.width}>
        <AlertTxt>
          <P text={props.message} color="#FF4141" fontSize="18px" fontWeight="bold" cursor="auto"></P>
        </AlertTxt>
      </MrktAlertWrap>
    </div>
  )
}



