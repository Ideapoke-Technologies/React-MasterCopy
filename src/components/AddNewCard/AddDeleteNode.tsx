import React from "react";
import styled from "styled-components";

const DropContent = styled.div`
  position: absolute;
  right: 0;
  box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.15);
  border-radius: 8px;
  border: 1px solid #bddfff;
  background: #f3f3f3;
  width: 126px;
  height: auto;
  z-index: 1;
  padding: 4px 0;
`;
const DropTxt = styled.div`
  padding: 8px 12px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #454545;
  cursor: pointer;
  &:hover {
    background-color: #ffece2;
  }
`;

export default function AddDeleteNode() {
  return (
    <div>
      <DropContent>
        <DropTxt>Rename</DropTxt>
        <DropTxt style={{ color: "#FF4141" }}>Delete</DropTxt>
      </DropContent>
    </div>
  );
}
