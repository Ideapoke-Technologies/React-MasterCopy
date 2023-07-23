import React from "react";
import styled from "styled-components";
import Logo from "./images/Logo.svg";

const LeftWrap = styled.div`
  position: fixed;
`;
const IpLogo = styled.div`
  padding: 25px 20px;
`;
const Img = styled.img``;

const MenuList = styled.div`
  margin-top: 50px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 22px;
`;
const MenuHeader = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #acacac;
`;
const MenuItem = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #ACACAC;

    &:hover{
        cursor: pointer;
        color: #000;
    }
`

export default function LeftMenuArticle() {
  return (
    <div>
      <LeftWrap>
        <IpLogo>
          <Img src={Logo} />
        </IpLogo>
        <MenuList>
          <MenuHeader>Table of Contents</MenuHeader>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
          <MenuItem>Lorem Ipsum</MenuItem>
        </MenuList>
      </LeftWrap>
    </div>
  );
}
