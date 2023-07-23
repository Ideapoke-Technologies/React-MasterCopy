import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid white;
  box-shadow: 0 0 0 1px #454545;
  appearance: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: #fff;
  transition: all ease-in 0.2s;
  margin: 0 3px;

  &:checked {
    transition: all ease-in 0.2s;
    box-shadow: inset 0 0 0 0.2em white, inset 0 0 0 1em #ff7624;
    outline: 1px solid #ff7624;
  }

  &:hover {
    cursor: pointer;
  }
`;

const InputItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Label = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 5px;
`;

export default function RatingRadio(props) {

  const[checked,setChecked] = useState(props.intialChecked);


  return (
    <div>
      <InputItem>
        <Label>{props.label}</Label>
        <Input type="radio" onChange={()=>props.onChange && props.onChange()} checked={checked} id="item4" name="sort" value="" />
      </InputItem>
    </div>
  );
}
