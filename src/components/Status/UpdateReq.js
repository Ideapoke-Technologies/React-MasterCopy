import React from 'react'
import { FollowingWrap, TagTxt, TagWrap, TagWrapFlex } from './FollowingTag'
import UpReq from "./images/solid-Update.svg"
import { Img } from './Pending'

export default function UpdateReq(props) {
  return (
    <div>
        <FollowingWrap>
        {props.hoverStatus ? 
          <div style={{position: "absolute",top: "10px",right: "10px"}}> 
            <Img src={UpReq} />
          </div>
         : <div> 
            <TagWrap>
              <TagWrapFlex>
                <Img src={UpReq} />
                <TagTxt>Update Requested</TagTxt>
              </TagWrapFlex>
            </TagWrap>
          </div>}
        </FollowingWrap>
    </div>
  )
}
