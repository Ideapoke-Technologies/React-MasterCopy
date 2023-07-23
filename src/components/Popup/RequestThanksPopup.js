import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Close from "./images/popupclose.svg"
import Logo from "./images/req-Ip-logo.svg"

const Request = styled.div`
    width: 635px;
    height: 390px;
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
    margin: 0 auto;
`
const CloseImg = styled.img`
    padding: 14px;
    position: absolute;
    right: 0px;
    &:hover{
        cursor: pointer;
    }
`
const Wrapper = styled.div`
  padding: 43px 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const LogoImg = styled.img``

const Header = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: #352960;
  margin-top: 20px;
`
const SubHeader = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #454545;
  margin-top: 20px;
  text-align: center;
  width: 470px;
`
const ReqPath = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #ff7624;
`
const CloseBtn = styled.button`
  outline: none;
  border: none;
  padding: 12px;
  border-radius: 4px;
  background-color: #2970b1;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #FFF;
  text-align: center;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  cursor: pointer;

  &:hover{
    background-color: #15436d;
  }
`

export default function RequestThanksPopup(props) {
  const [isOpen, setisOpen] = useState(true);
  const handleClose = () => {
      setisOpen(false);
      props.closePopup(false);
  }

  return (
    <div>
       <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
          <Request>
            <CloseImg src={Close} onClick={() => handleClose()} />
            <Wrapper>
                <LogoImg src={Logo} />
                <Header>We have received your request</Header>
                <SubHeader>Our analyst team will be in touch with you shortly. You can find this request on your dashboard under </SubHeader>
                <ReqPath>My Designs > Deep Research by Ideapoke</ReqPath>
                <CloseBtn onClick={() => handleClose()}>Close</CloseBtn>
            </Wrapper>
          </Request>
       </ReactModal>
    </div>
  )
}

