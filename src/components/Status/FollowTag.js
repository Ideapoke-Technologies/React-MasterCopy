import React from 'react'
import Add from "./images/add-Outline.svg"
import AddBox from "./images/add.svg"
import { ReqUpWrap, UpWrap, Uptxt } from './ReqUpdate'
import { Img } from './Pending'
import styled from 'styled-components'

export const FollowWrapFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function FollowTag(props) {
  return ( 
    <div>
        <ReqUpWrap>
        {props.hoverStatus ? 
            <div style={{position: "absolute",top: "10px",right: "10px"}}>
                <Img src={AddBox}></Img>
            </div>
            : <div onClick={props.onClick}>
                <UpWrap>
                    <FollowWrapFlex>
                        <Img src={Add} style={{marginTop:"-1px"}} ></Img>
                        <Uptxt>Follow</Uptxt>
                    </FollowWrapFlex>
                </UpWrap>
            </div>}
        </ReqUpWrap>
    </div>
  )
}
