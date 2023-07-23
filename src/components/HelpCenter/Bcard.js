import React from "react";
import styled from "styled-components";
import RdtArticle from "../Article/RdtArticle";

const CardWrap = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(69, 69, 69, 0.26);
  width: 364px;
  height: 314px;
  padding: 18px;
  margin-bottom: 30px;
  border: 1px solid #fff;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(136, 176, 239) 0px 0px 2px;
    border: 1px solid rgba(59, 130, 246, 0.5);
  }
`;
const CardBack = styled.div`
  width: 365px;
  height: 212px;
  border-radius: 12px;
  background-color: #f3f3f3;
  margin: 0 auto;
  background-image: url(${(props) => props.BgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const ContentWrap = styled.div`
  margin-top: 20px;
`;
const ArticleDtl = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: #8a8a8a;
`;
const CardTitle = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: #454545;
  margin-top: 5px;
`;

export default function Bcard(props) {


  return (
    <div onClick={props.onClick}>
      <CardWrap>
        <div>
          <CardBack BgImg={props.BgImg}></CardBack>
        </div>
        <div>
          <ContentWrap>
            <ArticleDtl>{props.Detail}</ArticleDtl>
            <CardTitle>{props.Title}</CardTitle>
          </ContentWrap>
        </div>
      </CardWrap>

     
    </div>
  );
}
