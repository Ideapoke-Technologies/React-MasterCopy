import React from "react";
import styled from "styled-components";
import Default from "./images/default-icon.svg";

const GuideWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 825px;
  margin-bottom: 25px;
`;
const Img = styled.img``;

const TextTitle = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: #454545;
  cursor: pointer;
`;
const CardDtl = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: #8a8a8a;
  margin-top: 5px;
`;

export default function GuideListPage(props) {
  return (
    <div>
      <GuideWrap>
        <div>
          <Img src={Default} />
        </div>
        <div>
          <TextTitle>{props.Title}</TextTitle>
          <CardDtl>{props.Detail}</CardDtl>
        </div>
      </GuideWrap>
    </div>
  );
}
