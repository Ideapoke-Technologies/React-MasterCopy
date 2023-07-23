import React, { useState } from "react";
import styled from "styled-components";
import activeLeft from "./images/active-arrow-left.svg";
import activeRight from "./images/active-arrow-right.svg";
import fadeLeft from "./images/fed-arrow-left.svg";
import fadeRight from "./images/fad-arrow-right.svg";

const Wraper = styled.div`
  margin-right: 20px;
  display: flex;
  gap: 15px;
`;
const Img = styled.img`
  width: 15px;
  /* align-items: center;
  display: flex;
  position: relative;
  right: 3px;
  bottom: 1px; */
`;
const Arrorcircle = styled.div`
  background: #fff;
  border: 1px solid #acacac;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: inline-block;
  width: 12px;
  border-radius: 25px;
  height: 12px;
  padding: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
  // margin: 0 15px 0 12px;

  :hover{
    border: 1px solid #15436d;
  }
`;

export default function Arrowicon(props) {
  //Increase pagination count by 3
  const Increase = () => {
    if (
      props.type == "sharedwithme" ||
      props.type == "designbyme" ||
      props.type == "communitydesign"
    ) {
      if (props.count > props.pagenationCount + 4) {
        props.setPagenationCount(props.pagenationCount + 4);
        props.paginationFun(props.pagenationCount + 4, 4);
      }
    } else {
      if (props.count > props.pagenationCount + 3) {
        props.setPagenationCount(props.pagenationCount + 3);
        props.paginationFun(props.pagenationCount + 3, 3);
      }
    }
  };

  //Decrease pagination count by 3
  const Decrease = () => {
    if (
      props.type == "sharedwithme" ||
      props.type == "designbyme" ||
      props.type == "communitydesign"
    ) {
      if (props.pagenationCount != 0) {
        props.setPagenationCount((prev) => prev - 4);
        props.paginationFun(props.pagenationCount - 4, 4);
      }
    } else {
      if (props.pagenationCount != 0) {
        props.setPagenationCount((prev) => prev - 3);
        props.paginationFun(props.pagenationCount - 3, 3);
      }
    }
  };
  return (
    <div>
      <Wraper>
        {/* Left Arrow for pagination */}
        {props.pagenationCount === 0 ? (
          <Arrorcircle style={{ cursor: "not-allowed",border:"1px solid #ACACAC" }}>
            <Img src={fadeRight}></Img>
          </Arrorcircle>
        ) : (
          <Arrorcircle style={{ cursor: "pointer" }} onClick={Decrease}>
            <Img src={activeRight}></Img>
          </Arrorcircle>
        )}

        {/* Right Arrow for pagination */}
        {props.pagenationCount + 3 >= props.count ? (
          <Arrorcircle style={{ cursor: "not-allowed",border:"1px solid #ACACAC"  }}>
            <Img src={fadeLeft}></Img>
          </Arrorcircle>
        ) : (
          <Arrorcircle style={{ cursor: "pointer" }} onClick={Increase}>
            <Img src={activeLeft}></Img>
          </Arrorcircle>
        )}
      </Wraper>
    </div>
  );
}
