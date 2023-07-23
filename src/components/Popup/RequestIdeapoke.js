import React, { useState, useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import ReactModal from 'react-modal';
import "./RenamePopup.css"
import Close from "./images/popupclose.svg"

const Request = styled.div`
    width: 660px;
    height: 574px;
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
const RequestWrap = styled.div`
    padding: 55px 65px;
`
const Header = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -1.25px;
    color: #FF7624;
`
const SubHeader = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: #ACACAC;
`
const TitleWrap = styled.div`
    margin-top: 20px;
`
const TitleHeader = styled.p`
    margin: 0;
    color: #352960;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`
const TitleInput = styled.input`
    margin-top: 12px;
    border-radius: 12px;
    border: 1px solid #FF7624;
    background-color: #fff;
    padding: 12px;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #454545;
    width: 500px;
    margin-bottom: 4px;

    &:focus{
        outline: none;
        box-shadow: rgb(136, 176, 239) 0px 0px 10px;
        border: none;
    }
    &::placeholder{
    font-size: 14px;
}
`
const Example = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: #454545;
`
const ErrorMsg = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    color: red;
`
const DescWrap = styled.div`
    margin-top: 40px;
`
const DescFiled = styled.textarea`
    resize: none;
    border-radius: 12px;
    border: 1px solid rgba(255, 118, 36, 0.80);
    background-color: #fff;
    padding: 12px;
    margin-top: 12px;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #454545;
    width: 500px;

    &:focus{
            outline: none;
            box-shadow: rgb(136, 176, 239) 0px 0px 10px;
            border: none;
        }
    &::placeholder{
        font-size: 14px;
    }
`
const SubmitBtn = styled.button`
    border-radius: 4px;
    padding: 10px;
    background-color: #FF7624;
    border: none;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;

    &:hover{
        background-color: #cd5900;
    }
`

export default function RequestIdeapoke(props) {
    const [isOpen, setisOpen] = useState(true);

    const titleRef = useRef(null);
    const descRef = useRef(null);

    const handleClose = () => {
        setisOpen(false);
        props.closePopup(false);
    }

    const saveRequiremt = () => {
        let title = titleRef.current.value.trim();
        let desc = descRef.current.value.trim();
        if (title == "") {
            document.getElementById("req-title-id").focus();
            document.getElementById("errreq-title-id").innerText =
                "Title is required";
            return false;
        } else {
            document.getElementById("errreq-title-id").innerText = "";
        }

        // if (desc == "") {
        //     document.getElementById("req-desc-id").focus();
        //     document.getElementById("errreq-desc-id").innerText =
        //         "Description is required";
        //     return false;
        // } else {
        //     document.getElementById("errreq-desc-id").innerText = "";
        // }

        postReq();
    };


    const postReq = async () => {
        props.closePopup(false);
        showThanksMessage();

        var dataObj = {
            arid: 0,
            radarid: 0,
            networkid: props.sesNetworkId,
            title: titleRef.current.value.trim(),
            description: descRef.current.value.trim(),
            templateid: null,
            accesstype: "Private",
            intiateprocess: 0,
            stage: 0,
            createdby: props.sesUserId,
            customeraccess: "1",
            iscollaboration: "1",
            flag: "P",
            reqfiles: [],
            startdate: "",
            enddate: "",
            imageurl: "",
            amid: 0,
            labelmessage: "",
            pstatus: "LIVE",
            accessuser: "CUSTOMER",
            displayflag: "",
            associatearid: 0,
            scoppingstatus: "",
            selecteditems: "",
            sourcearid: null,
            refreshduration: null,
            isupdate: "N",
        }

        console.log("postReq dataObj : ", dataObj);

        const url = process.env.COMMON_SERVICE_URL + "/requirement/saveorupdate";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        console.log("postReq Success : ", data);
        console.log("arid" + data.arid);
        callNotifyAPI(data.arid, data.networkid);
        props.handleFun(0,3);
    };

    const showThanksMessage = () => {
        //call thanks popup
        props.setShowRequestThankPopup(true);
    };

    const callNotifyAPI = (arid, networkid) => {
        if (props.sesUserType != "INTERNAL") {
            notifyUserForPostReq(arid,networkid);
        }
    };

    const notifyUserForPostReq = async (arid, networkid) => {
        let dpReqObj = {
            arid: arid,
            networkid: networkid,
            identifier: "NEWREQUIREMENTCREATED",
            identifierid1: arid,
            type: "NEW",
            modulename: "REQARTICUALTION",
        };
        console.log("notifyUserForPostReq : ", dpReqObj);
        const url = process.env.API_URL + "/populatedatasynchronization";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dpReqObj),
        });
        const data = await response.json();
        console.log("populatedatasynchronization data : ", data);

    };

  return (
    <div>
        <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className='modal-pop-back'>
            <Request>
                <CloseImg src={Close} onClick={() => handleClose()} />
                <RequestWrap>
                    <Header>Request Ideapoke</Header>
                    <SubHeader>Request Ideapoke to create a design for a topic of your choice.</SubHeader>
                    <TitleWrap>
                        <TitleHeader>Title<span style={{color: "#ff4141"}}>*</span></TitleHeader>
                        <TitleInput placeholder='Give a title to your requirement.' ref={titleRef} id="req-title-id"></TitleInput>
                        <Example>e.g. Understand use cases for Robotics in Healthcare</Example>
                        <ErrorMsg id="errreq-title-id"></ErrorMsg>
                    </TitleWrap>
                    <DescWrap>
                        <TitleHeader>Description</TitleHeader>
                        <DescFiled placeholder='Give us more details on your research request, to help us understand your requirement better.' rows={3} ref={descRef}  id="req-desc-id"></DescFiled>
                    </DescWrap>
                    <SubmitBtn onClick={saveRequiremt}>Submit</SubmitBtn>
                </RequestWrap>
            </Request>
        </ReactModal>
    </div>
  )
}
