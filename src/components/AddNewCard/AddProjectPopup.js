import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";
import "./AddProject.css"
import Close from "./images/closePopup.svg"
import Button from "../Button/Button";
import PopupBg from "./images/bg.png"

const AddPrjct = styled.div`
    width: 710px;
    height: 575px;
    background: #ffffff;
    box-shadow: 0px 30px 60px 0px rgba(69, 69, 69, 0.25);
    margin: 0 auto;
`
const CloseImg = styled.img`
  float: right;
  padding: 14px;
  &:hover {
    cursor: pointer;
  }
`
const Header = styled.div`
    color: #454545;
    font-size: 28px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -1.25px;
    margin-bottom: 12px;
`
const HeaderWrap = styled.div`
    padding-top: 40px;
    padding-left: 60px;
`
const SubHeader = styled.div`
    color: #ACACAC;
    font-size: 18px;
    font-family: 'Poppins';
    line-height: 28px;
`
const FieldWrap = styled.div`
    padding-left: 60px;
    padding-top: 50px;
    padding-right: 155px;
`
const Label = styled.div`
    font-size: 18px;
    font-family: 'Poppins';
    line-height: 28px;
    color: #352960;
    margin-bottom: 12px;
`
const TitleField = styled.input`
    border-radius: 12px;
    border: 2px solid #FF7624;
    width: 465px;
    padding: 12px;
    outline: none;
    font-size: 16px;
    font-family: 'Poppins';
    line-height: 24px;
    color: #454545;
    ::placeholder{
        color: #ACACAC;
    }
`
const DescField = styled.textarea`
    border-radius: 12px;
    border: 2px solid #FF7624;
    background: #FFF;
    width: 465px;
    resize: none;
    padding: 12px;
    outline: none;
    font-size: 16px;
    font-family: 'Poppins';
    line-height: 24px;
    color: #454545;
    ::placeholder{
        color: #ACACAC;
    }
`
const BtnWrap = styled.div`
    margin-top: 35px;
    padding: 0 160px;
    float: right;
`
const BgImage = styled.div`
    background-image: url(${PopupBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    height: 575px;
    width: 150px;
    position: absolute;
    right: 0;
`

export default function AddProjectPopup() {
    const [displayField, setDisplayField] = useState(false);
    const [isOpen, setisOpen] = useState(true);
    const handleClose = () => {
      setisOpen(false);
      props.closePopup(false);
    };
  return (
    <div>
        <ReactModal
        isOpen={isOpen}
        onRequestClose={() => handleClose()}
        ariaHideApp={false}
        className="modal-pop-back"
        style={{borderRadius: "0"}}
      >
        <AddPrjct>
            <BgImage></BgImage>
            <CloseImg src={Close} />
            <HeaderWrap>
                <Header>Add Project</Header>
                <SubHeader>Request Ideapoke to create a project</SubHeader>
            </HeaderWrap>
            <FieldWrap>
                <div>
                    <Label>Title <span style={{color: "red"}}>*</span></Label>
                    <TitleField placeholder="Add Title"></TitleField>
                </div>
                <div style={{marginTop: "22px"}}>
                    <Label>Description</Label>
                    <DescField rows="3" placeholder="Add Description"></DescField>
                </div>
            </FieldWrap>
            <BtnWrap>
                <Button text="Submit" variant="solidOrange" width="86px"></Button>
            </BtnWrap>
        </AddPrjct>
      </ReactModal>
    </div>
  )
}
