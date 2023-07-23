import React, { useState } from "react";
import styled from "styled-components";
import GettingStartCards from "./GettingStartCards";
import GuidePage from "./GuidePage";
import IpLogo from "./images/logo.png";

const ExlporeCard = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(69, 69, 69, 0.26);
  width: 222px;
  height: 270px;
  padding: 18px;
  position: relative;
  margin-bottom: 30px;
  border: 1px solid #fff;

  &:hover{
    cursor: pointer;
    box-shadow: rgb(136, 176, 239) 0px 0px 2px;
    border: 1px solid rgba(59, 130, 246, 0.5);
  }
`;
const CardCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -60%);
`;
const Img = styled.img``;

const Txt = styled.p`
  margin: 0;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: #454545;
`;

export default function ExploreMore(props) {



  return (
    <div>
      <ExlporeCard onClick={props.onClick}>
        <CardCenter>
          <Img src={IpLogo} />
          <Txt>Explore more</Txt>
        </CardCenter>
      </ExlporeCard>
     
      
    </div>
  );
}
