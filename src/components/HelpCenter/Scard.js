import React from "react";
import styled from "styled-components";

const CardWrapSmall = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(69, 69, 69, 0.26);
  width: 222px;
  height: 270px;
  padding: 18px;
  margin-bottom: 30px;
  border: 1px solid #fff;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(136, 176, 239) 0px 0px 2px;
    border: 1px solid rgba(59, 130, 246, 0.5);
  }
`;
const ContentWrapSmall = styled.div`
  margin-top: 12px;
`;
const ArticleDtlS = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: #8a8a8a;
`;
const CardTitleS = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: #454545;
  margin-top: 5px;
`;

const CardBackWrap = styled.div`
  width: 230px;
  height: 178px;
  border-radius: 12px;
  background-color: #f3f3f3;
  margin: 0 auto;
  background-image: url(${(props) => props.BgImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function Scard(props) {
  return (
    <div>
      <CardWrapSmall>
        <div>
          <CardBackWrap BgImg={props.BgImg}></CardBackWrap>
        </div>
        <div>
          <ContentWrapSmall>
            <ArticleDtlS>{props.Detail}</ArticleDtlS>
            <CardTitleS>{props.Title}</CardTitleS>
          </ContentWrapSmall>
        </div>
      </CardWrapSmall>
    </div>
  );
}
