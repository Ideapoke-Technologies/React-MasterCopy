import React,{useState} from 'react'
import styled from 'styled-components'
import PendingIcon from "./images/pending.svg"

export const PendingWrap = styled.div``

export const Img = styled.img``

export const PendingTag = styled.div`
    background-color: #E3F2FF;
    position: absolute;
    border-radius: 12px 0px 8px 0px;
    top: 0;
    left: 0;
`
export const WrapFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding-right: 8px;
`
export const PendingTxt = styled.p`
    margin: 0; 
    font-family: 'Poppins';
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 6.837px;
    color: #15436D;
`

export default function Pending(props) {


  return (
    <div>
      <PendingWrap>
        {props.hoverStatus ? (
          <div style={{ position: "absolute", top: "0", left: "0" }}>
            <Img src={PendingIcon} />
          </div>
        ) : (
          <div>
            <PendingTag>
              <WrapFlex>
                <Img src={PendingIcon} />
                <PendingTxt>Pending</PendingTxt>
              </WrapFlex>
            </PendingTag>
          </div>
        )}
      </PendingWrap>
    </div>
  );
}
