import React from "react";
import Gif from "./images/animation_640_lj8fw28l.gif";
import styled from "styled-components";

const BlockWrap = styled.div`
  background-color: #ffffffd1;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color 0.5s;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;
const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 45%;
`;
const Text = styled.p`
  
`

export default function Blocker() {
  return (
    <div>
      <BlockWrap>
        <Img src={Gif} style={{ width: "200px" }} />
        {/* <Text>Loading...</Text> */}
      </BlockWrap>
    </div>
  );
}
