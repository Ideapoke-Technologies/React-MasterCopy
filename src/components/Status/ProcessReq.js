import React from 'react'
import { PendingTag, PendingTxt, PendingWrap, WrapFlex } from './Pending'
import { Img } from './Pending'
import Request from "./images/process-req.svg"

export default function ProcessReq(props) {
  return (
    <div>
        <PendingWrap>
            { props.hoverStatus ? <div style={{position: "absolute",top: "0",left: "0"}}>
                <Img src={Request}></Img>
            </div>
            : <div>
                <PendingTag> 
                    <WrapFlex>
                        <Img src={Request}></Img>
                        <PendingTxt>Processing Request</PendingTxt>
                    </WrapFlex>
                </PendingTag>
            </div>}
        </PendingWrap>
    </div>
  )
}
