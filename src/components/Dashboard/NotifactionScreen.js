import React from "react";
import styled from "styled-components";

const Topwrapper = styled.div``;
const Text = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  margin-bottom: 15px;
  margin-right: 39px;
`;
const Subtext = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
`;
const Line = styled.div`
  width: 100px;
  height: 100px;
`;

export default function NotifactionScreen(props) {
  return (
    <div>
      <Topwrapper>
        <Text color={props.tcolor}>{props.Text} </Text>
        <Subtext color={props.stcolor}>{props.Subtext}</Subtext>
      </Topwrapper>
    </div>
  );
}
