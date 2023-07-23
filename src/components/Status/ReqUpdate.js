import React from 'react'
import styled from 'styled-components'
import { Img } from './Pending'
import ReqUpd from "./images/update.svg"
import Updt from "./images/update-outline.svg"
import { FollowWrapFlex } from './FollowTag'


export const ReqUpWrap = styled.div``

export const UpWrap = styled.div`
  background-color: #fff;
  position: absolute;
  border-radius: 4px;
  border: 1px solid #454545;
  top: 10px;
  right: 10px;
  padding: 5px;
  padding-right: 7px;
`;

export const Uptxt = styled.p`
    margin: 0;
    color: #454545;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.407px; 
    letter-spacing: 0.18px;
`

export default function ReqUpdate(props) {
  return (
    <div>
        <ReqUpWrap>
        {props.hoverStatus ?  
            <div style={{position: "absolute",top: "10px",right: "10px"}}>
                <Img src={ReqUpd}></Img>
            </div>
           : <div onClick={props.onClick}>
                <UpWrap>
                    <FollowWrapFlex>
                        <Img style={{marginTop: "-1px"}} src={Updt}></Img>
                        <Uptxt>Request Update</Uptxt>
                    </FollowWrapFlex>
                </UpWrap>
            </div>}
        </ReqUpWrap>
    </div>
  )
}
