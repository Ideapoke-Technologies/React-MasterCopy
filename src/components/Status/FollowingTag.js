import React from "react";
import styled from "styled-components";
import Follow from "./images/solid-tick.svg";

export const FollowingWrap = styled.div``;

export const Img = styled.img``;

export const TagWrap = styled.div`
  background-color: #454545;
  position: absolute;
  border-radius: 4px;
  top: 10px;
  right: 10px;
  padding-right: 12px;
`;

export const TagWrapFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;
export const TagTxt = styled.p`
  margin: 0;
  color: #fff;
  font-family: "Poppins"; 
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.407px;
  letter-spacing: 0.18px;
`;

export default function FollowingTag(props) {
  return (
    <div>
      <FollowingWrap>
        {props.hoverStatus ? (
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <Img src={Follow} />
          </div>
        ) : (
          <div onClick={props.onClick} >
            <TagWrap>
              <TagWrapFlex>
                <Img src={Follow} />
                <TagTxt>Following</TagTxt>
              </TagWrapFlex>
            </TagWrap>
          </div>
        )}
      </FollowingWrap>
    </div>
  );
}
