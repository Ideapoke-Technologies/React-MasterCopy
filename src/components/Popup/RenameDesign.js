import React, { useState,useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import Close from "./images/popupclose.svg"
import { P } from '../CommonStyle';
import "./RenamePopup.css"
import Button from '../Button/Button';

const Reject = styled.div`
    width: 660px;
    height: 317px;
    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
    margin: 0 auto;
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
const InputArea = styled.div`
    margin-top: 20px;
`
const InputField = styled.input`
    border-radius: 12px;
    border: 1px solid #FF7624;
    background-color: #fff;
    padding: 12px;
    margin-top: 12px;
    width: 490px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #FF7624;
    :focus{
        outline: none;
        box-shadow: rgb(136, 176, 239) 0px 0px 10px;
        border: 1px solid #fff;
    }
`
const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
`
const ErrorMsg = styled.p`
    margin: 2px;
    font-family: 'Poppins';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: red;
`

export default function RenameDesign(props) {

    const [isOpen, setisOpen] = useState(true);
    const handleClose = () => {
        setisOpen(false);
        props.closePopup({
            rename: false
        });
    }

    const designRef = useRef(null);
    const saveDesign = () => {
        let title = designRef.current.value.trim();
        if (title == "") {
            // document.getElementById("req-design-id").focus();
            document.getElementById("errreq-design-id").innerText =
                "Title is required";
            return false;
        } else {
            document.getElementById("errreq-design-id").innerText = "";
        }

        callRemaneDesignAPI();        
    };

    const callRemaneDesignAPI = async () => {

        var dataObj = {
            "userid": props.sesUserId,
            "designId": props.designId,
            "designname": designRef.current.value
        }
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/communitydesign/updatedesign";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();        
        console.log('callRemaneDesignAPI data : ', data);
        props.closePopup({
            rename: false
        });
        props.designFun(0,3);
    };
    return (
        <div>
            <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
                <Reject>
                    <CloseImg src={Close} onClick={() => handleClose()} />
                    <Content>
                        <P text="Rename Design" color="#FF7624" fontSize="24px" fontWeight="500"></P>
                        <InputArea>
                            <P text="Enter a new design name:" color="#352960" fontSize="400" fontWeight="400"></P>
                            <InputField placeholder='Enter a new design' id='req-design-id' ref={designRef} defaultValue={props.projTitle}></InputField>
                            <ErrorMsg id="errreq-design-id"></ErrorMsg>
                        </InputArea>
                        <BtnWrap>
                            <Button text="Submit" variant="solidOrange" width="auto" onClick={() => saveDesign()} ></Button>
                        </BtnWrap>
                    </Content>
                </Reject>
            </ReactModal>
        </div>
    )
}
