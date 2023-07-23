import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Close from "./images/popupclose.svg"

const Unfollow = styled.div`
    width: 400px;
    height: 178px;
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
const UnfollowWrap = styled.div`
    padding: 32px 45px 32px;
`
const Message = styled.p`
    margin: 0;
    text-align: center;
    font-family: 'Poppins';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #454545;
`
const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
`
const CancelBtn = styled.button`
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: #2970B1;
    padding: 10px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #15436D;
    }
`
const UnfollowBtn = styled.button`
    outline: none;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #2970B1;
    padding: 10px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #2970B1;
    cursor: pointer;
    &:hover{
        border: 1px solid #15436D;
        color: #15436D;
    }
`

export default function UnfollowPopup(props) {

    const [isOpen, setisOpen] = useState(true);
    const handleClose = () => {
        setisOpen(false);
        props.closePopup(false);
    }

    const unfollowDesing = () => {
        if (props.type == "follow") {
            props.setRemoveCard(props.designId);
            props.setBooked(false);
            props.closePopup(false);
            props.setHoverStatus(true);
        }else if(props.type == 'update'){
            props.setUpdatePopup(true);
            props.closePopup(false);
        }
    }

    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back pop-margin'>
                <Unfollow>
                    <CloseImg src={Close} onClick={() => handleClose()} />
                    <UnfollowWrap>
                        <Message>{props.message}</Message>
                        <BtnWrap>
                            <CancelBtn onClick={() => handleClose()}>Cancel</CancelBtn>
                            <UnfollowBtn onClick={() => unfollowDesing()}>{props.buttonmessage}</UnfollowBtn>
                        </BtnWrap>
                    </UnfollowWrap>
                </Unfollow>
            </ReactModal>
        </div>
    )
}
