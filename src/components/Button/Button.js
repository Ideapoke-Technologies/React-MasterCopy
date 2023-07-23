import React from "react";
import styled from "styled-components";
import AddDesignImg from './images/addNewDesign.svg' 

const handleColorType = (variant) => {
  switch (variant) {
    case "solidOrange":
      return "border:1px solid #2970B1; color: #fff; background: #2970B1";
    case "darkOrange":
      return "border:1px solid #2970B1; color: #fff; background: #2970B1";
    case "outlineOrange":
      return "border:1px solid #2970B1; color: #2970B1; background: transparent";
    case "solidBlue":
      return "border:1px solid #2970B1; color: #fff; background: #2970B1";
    case "Primary":
      return "border: 1px solid #E5E5E5; color: #fff; background: #E5E5E5";
    case "outlineGrey":
      return "border: 1px solid #454545 ; color: #454545; background: transparent ";
    case "solidRed":
      return "border: 1px solid #FF4141 ; color: #FFD4D4; background: #FF4141";
    case "outlineRed":
      return "border: 1px solid #FF4141 ; color: #FF4141; background: #fff";
    case "solidGrey":
      return "border: 1px solid #454545 ; color: #D6CBFF; background: #454545";
    default:
      return "color: #000; background: #eee;";
  }
};
const handleHoverType = (variant) => {
  switch (variant) {
    case "solidOrange":
      return "border:1px solid #15436d; color: #fff; background: #15436d";
    case "darkOrange":
      return "border:1px solid #CD5900; color: #fff; background: #CD5900";
    case "outlineOrange":
      return "border:1px solid #15436d; color: #15436d; background: transparent";
    case "Primary":
        return "border: 1px solid #E5E5E5; color: #fff; background: #E5E5E5";
    case "outlineGrey":
      return "border: 1px solid #454545 ; color: #fff; background: #454545 ";
    case "solidRed":
      return "border: 1px solid #FF4141 ; color: #FFD4D4; background: #FF4141";
    case "outlineRed":
      return "border: 1px solid #FF4141 ; color: #FF4141; background: #FFD4D4";
    case "solidGrey":
      return "border: 1px solid #454545 ; color: #D6CBFF; background: #454545";
    case "solidBlue":
      return "border:1px solid #15436d; color: #fff; background: #15436d";
    default:
      return "color: #000; background: #eee;";
  }
};
const StyledButton = styled.button`
  border: none;
  ${({ variant }) => handleColorType(variant)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background: ${(props) => (props.disabled ? "#8A8A8A" : "")};
  color: ${(props) => (props.disabled ? "white" : "")};
  width: ${(props) => (props.width ? props.width : "174px")};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height}; 
  cursor: pointer;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  line-height: 20px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    ${({ variant }) => handleHoverType(variant)};
  }
`;

export default function Button(props) {
  const disable = props.disable;
  return (
    <div>
      <StyledButton
        onClick={props.onClick}
        variant={props.variant}
        width={props.width}
        fontWeight={props.fontWeight}
        fontSize={props.fontSize}
        height={props.height}
        disabled={disable}
      >
      { props.image && <img src={AddDesignImg} ></img>}
        {props.text}
      </StyledButton>
    </div>
  );
}
