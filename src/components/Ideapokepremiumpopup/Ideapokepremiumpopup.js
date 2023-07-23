import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Button from '../Button/Button'
import { P } from '../CommonStyle'
import close from './images/slider-close.svg'
import Ippremium from './images/iconpremium.svg'
import "./Ideapokepremium.css"
import Iplogo from '../Thankspopup/images/iplogo.svg'


const Reject = styled.div`
    width: 715px;
    height: 295px;
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
    margin: 0 auto;
`
const ButtonWrap = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 14px;
    justify-content: center;
`
const CloseImg = styled.img`
    float: right;
    padding: 14px;
    &:hover{
        cursor: pointer;
    }
`
const Content = styled.div`
padding: 20px 71px;
`
const Buttonwraper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 12px;
margin: -1px 0 0 108px;
`
const Img = styled.img`
`
const Heading = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
color: #352960;
`

const Iconwraper = styled.div``

const Img1 = styled.img`
margin: 0px 210px;
opacity: 0.5;
`

const ButtonWrap1 = styled.div`
    margin-top: 18px;
    display: flex;
    gap: 14px;
    justify-content: center;
`

export default function Ideapokepremiumpopup(props) {
  const [popup, setPopup] = useState(false)
  const [displayField, setDisplayField] = useState(false);
  const [isOpen, setisOpen] = useState(true);
  const handleClose = () => {
    setisOpen(false);
    props.closePopup(false);
  }

  const upgradeToPremium = async () => {
    const url = process.env.API_URL + "/upgradetopremium";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sesuserid: props.sesUserId,
        sesnetworkid: props.sesNetworkId,
        sesipaddress: props.sesIpAddress,
        secretkey: "SCR010004",
        module: "LITEODYSSEY",
        type: "IDEAPOKEPREMIUM",
        mailaction: "pending"
      }),
    });
    const data = await response.text();
    console.log("upgradetopremium response : ", data);
    if (data == "success") {
      setPopup(true)
    }
  };
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
        <Reject>
          <CloseImg src={close} onClick={() => handleClose()} />
          <Content>
            {!popup && <><Buttonwraper>
              <Img src={Ippremium}></Img>
              <Heading>
                Ideapoke Premium
              </Heading>
            </Buttonwraper>

              <P text="Upgrade to Ideapoke Premium to gain access to features such as Portfolio Management
            Premium Templates Early access to new Sample Designs and much more." color="#454545" fontSize="18px" fontWeight="400" textAlign="center"></P>

              <ButtonWrap >
                <Button onClick={() => upgradeToPremium()} text="Upgrade Now" variant="solidOrange" width="145px"></Button>
              </ButtonWrap></>}
            {popup && <><Iconwraper>
              <Img1 src={Iplogo}></Img1>
            </Iconwraper>
              <P text="Thank you for showing interest in Ideapoke Premium. Our team will get in touch with you shortly." color="#454545" fontSize="18px" fontWeight="400" textAlign="center" marginTop="18px"></P>
              <ButtonWrap1>
                <Button text="Done" variant="solidOrange" width="115px" onClick={() => handleClose()}> </Button>
              </ButtonWrap1></>}
            {/* {popup && <Thankspopup closePopup={setPopup} />} */}
          </Content>
        </Reject>
      </ReactModal>
    </div>
  )
}

