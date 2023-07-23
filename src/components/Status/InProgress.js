import React from 'react'
import { Img, PendingTag, PendingTxt, PendingWrap, WrapFlex } from './Pending'
import Progress from "./images/progress.svg"

export default function InProgress(props) {
  return (
    <div>
        <PendingWrap>
            {props.hoverStatus ? <div style={{position: "absolute",top: "0",left: "0"}}>
              <Img src={Progress}></Img>
            </div>
            : <div>
               <PendingTag>
                  <WrapFlex>
                    <Img src={Progress}></Img>
                    <PendingTxt>{props.text}</PendingTxt>
                  </WrapFlex>
               </PendingTag>
            </div>}
        </PendingWrap>
    </div>
  )
}
