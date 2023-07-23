import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Arrow from "./images/arrow-icon.svg";
import { useTranslation } from "react-i18next";




const Topwraper = styled.div`
background:#fafafa;
border: 1px solid rgb(189, 223, 255);
box-shadow: rgba(69, 69, 69, 0.15) 0px 30px 60px;
border-radius: 20px;
display: inline-block;
padding: 8px 0px;
position: absolute;
min-width: 158px;
height: auto;
/* bottom:91px; */
margin-top: 13px;
top: 245px;
`
const DropWrap = styled.div`
  overflow-y: auto;
  max-height: 290px;
`

const OptionWrape = styled.div`
color: #454545;
 font-size:16px;
font-weight:400;
/* letter-spacing:-1px; */
`

const Textwraper = styled.p`
cursor: pointer;
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgb(69, 69, 69);
padding: 10px;
margin: 0px;
&:hover{
  background:#FFECE2;
}
`

const Languagewraper = styled.div`
cursor: pointer;
  border: 1px solid rgb(255, 118, 36);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    width: 115px;
    margin: 20px;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 10px;
`

const Input = styled.input`
 border: 1px solid #d9d9d9;
border-radius: 5px;
background: #FFFFFF;
  width: 330px;
  height: 42px;
  padding-left: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14spx;
  line-height: 24px;
  color: #000000;
  /* margin-bottom: 25px; */
  &:focus-visible{
    outline: none;
    box-shadow: rgb(255, 212, 193 ,1) 0px 0px 10px;
box-shadow: #e88041 0px 0px 6px;
border: 1px solid #ff9e64;

  }

`

const Text = styled.p`
display: flex;
align-items: center;
justify-content: center;
gap: 3px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
color: #FF7624;

`
const Img = styled.img`
  position: relative;
  right: -319px;
  top: -40px;
  cursor: pointer;
`;
const Img2 = styled.img`
`

const Engicon = styled.div`
align-items: center;
display: flex;
`

const Wrapper = styled.div``;

const IPDropdown = ({ options, value, onChange }) => {
  const { t } = useTranslation();
  const [showOption, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionVisibility = () => {
    setShowOptions(prev => !prev);
  };

  const handleValueSelection = (value) => {
    onChange(value);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (



    <Wrapper ref={dropdownRef}>
      <div
        id='selectid'
        onClick={handleOptionVisibility}
      > <Input
        type='text'
        value={value || 'Select Security Question'}
        onChange={onChange}
        readOnly
      ></Input>
        <Img id="imggg"
          src={Arrow} />

      </div>

      {showOption && <Topwraper id='optionsid'>
        <DropWrap id='optionwrap'>
          {options && options.map((item, index) => {
            return (
              <Textwraper
                onClick={() => { handleValueSelection(item) }}
                key={index}
              >
                <OptionWrape>
                  {item}
                </OptionWrape>
              </Textwraper>
            )
          })
          }
        </DropWrap>
      </Topwraper>}
    </Wrapper>
  )
}

export default IPDropdown;

