import React, { useState } from "react";
import styled from "styled-components";
import Add from "./images/add-icon.svg";
import { publishNewDesign } from "../Common";
import Blocker from "../Blocker/Blocker";

const NewReqWrap = styled.div`
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ACACAC;
  width: 248px;
  height: 283px;
  position: relative;
  cursor: pointer;
    :hover{
        border: 1px solid #2970b1;
    }
`;
const Img = styled.img``;

const AddWrap = styled.div`
  margin: 0px auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280px;
  justify-content: center;
`;
const ReqTxt = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  color: #2970b1;
  margin-top: 5px;
  text-align: center;
`;
const ReqSubText = styled.p`
  margin: 0;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #2970b1;
  margin-top: 0px;
  text-align: center;
`;
const ImgWrap = styled.div``;

export default function AddNewRequest(props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnclick = () => {
    if (props.heading == "Post Requirement") {
      props.setShowRequestPopup(true);
    } else {
      setIsLoading(true);
        publishNewDesign(props.sesUserId,props.sesNetworkId,0,'newdesign','','New Design');   
    }
  };
  return (
    <div>
      {isLoading && <Blocker></Blocker>}
      <NewReqWrap onClick={() => handleOnclick()}>
        <AddWrap>
          <ImgWrap>
            <Img src={Add} />
          </ImgWrap>
          <div style={{ position: "absolute", bottom: "22px" }}>
            <ReqTxt>{props.heading}</ReqTxt>
            {props.showSHeading &&  <ReqSubText>{props.subheading}</ReqSubText>}
          </div>
        </AddWrap>
      </NewReqWrap>
    </div>
  );
}
