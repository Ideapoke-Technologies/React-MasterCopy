import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Close from "./images/popupclose.svg"
import { P } from '../CommonStyle';
import Button from '../Button/Button';
import "./RenamePopup.css"

const Reject = styled.div`
    width: 482px;
    height: 227px;
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
const DeleteMsg = styled.div`
    padding: 67px 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const BtnWrap = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`

export default function DeleteDesign(props) {
    const [isOpen, setisOpen] = useState(true);
    const handleClose = () => {
        setisOpen(false);
        props.closePopup({
            delete: false
        });
    }

    
    const deleteDesignAPI = async () => {

        var dataObj = {
            "userid": props.sesUserId,
            "designId": props.designId
        }
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/communitydesign/deletedesign";

        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();        
        console.log('deleteDesignAPI data : ', data);
        props.closePopup({
            delete: false
        });
        props.designFun(0,3);
    };

    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back pop-margin'>
                <Reject>
                    <CloseImg src={Close} onClick={() => handleClose()} />
                    <DeleteMsg>
                        <P text="Are you sure you want to delete this design?" color="#454545" fontSize="16px" fontWeight="400"></P>
                        <BtnWrap>
                            <Button variant="outlineRed" text="Cancel" width="auto" onClick={() => handleClose()} ></Button>
                            <Button variant="solidRed" text="Delete" width="auto" onClick={() => deleteDesignAPI()}  ></Button>
                        </BtnWrap>
                    </DeleteMsg>
                </Reject>
            </ReactModal>
        </div>
    )
}
