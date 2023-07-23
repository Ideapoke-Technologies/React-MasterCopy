import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Button from '../Button/Button'
import { P } from '../CommonStyle'
import close from './images/slider-close.svg'
import Iplogo from './images/iplogo.svg'
import "./Thanks.css"


const Reject = styled.div`
    width: 710px;
    height: 310px;
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
    padding: 46px 71px;
`
const Iconwraper = styled.div``

const Img = styled.img`
margin: 0px 210px;
opacity: 0.5;
`
export default function Thankspopup(props) {
    const [displayField, setDisplayField] = useState(false);
    const [isOpen, setisOpen] = useState(true);
    const handleClose = () => {
        setisOpen(false);
        props.closePopup(false);
    }

    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
                <Reject>
                    <CloseImg src={close} onClick={() => handleClose()} />
                    <Content>
                        <Iconwraper>
                            <Img src={Iplogo}></Img>
                        </Iconwraper>
                        <P text="Thank you for showing interest in Ideapoke Premium. Our team will get in touch with you shortly." color="#454545" fontSize="18px" fontWeight="400" textAlign="center" marginTop="18px"></P>
                        <ButtonWrap>
                            <Button text="Done" variant="solidOrange" width="115px"></Button>
                        </ButtonWrap>

                    </Content>
                </Reject>
            </ReactModal>

        </div>
    )
}

