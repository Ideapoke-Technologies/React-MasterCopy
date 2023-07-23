import React from 'react'
import { PendingTag, PendingTxt, PendingWrap, WrapFlex } from './Pending'
import { Img } from './Pending'
import DsgnReady from "./images/ready.svg"

export default function DesignReady(props) {
  return (
    <div>
        <PendingWrap>
            { props.hoverStatus ? <div style={{position: "absolute",top: "0",left: "0"}}>
                <Img src={DsgnReady}></Img>
            </div>
            : <div>
                <PendingTag>
                    <WrapFlex>
                        <Img src={DsgnReady}></Img>
                        <PendingTxt>{props.text}</PendingTxt>
                    </WrapFlex>
                </PendingTag>
            </div>}
        </PendingWrap>
    </div>
  )
}
