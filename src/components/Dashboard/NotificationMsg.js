import React, { useEffect } from 'react'
import styled from "styled-components";



const Notification = styled.div`
    border-radius: 0px 0px 6px 6px;
    padding: 5px 45px;
    z-index: 10;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    background-color: ${props => props.backgroundcolor};
    width: 670px;
    margin: 0 auto ;
    position: absolute;
    left: 19%;
    box-shadow: 0px 12px 14px rgba(69, 69, 69, 0.12);
    top: -16px;
`

export default function NotificationMsg(props) {

  const getBackgroundColor = () => {
    let color = "";
    if (props.alertMessage.type == "error") {
      color = "red";
    } else if (props.alertMessage.type == "processingrequest") {
      color = "#FF7624";
    } else if (props.alertMessage.type == "inprogress") {
      color = "#15436D";
    } else if (props.alertMessage.type == "designisready" || props.alertMessage.type == "success") {
      color = "#1F936E";
    } else if (props.alertMessage.type == "info") {
      color = "#BAEEFF";
    }
    return color;
  }

  useEffect(() => {
    //console.log('ishide--', props.alertMessage.ishide);

    let parentdesignid = getURLValue("parentdesignid");
    if(parentdesignid){
    }else{
    setTimeout(function () {
      if(Object.keys(props.alertMessage).length>1)
      props.setAppState({alertMessage:{}});
    }, 2500);
   }
  },[props.alertMessage,props.alertMessage.ishide]);


  return (
    <div>
      <Notification color={props.alertMessage.type == "info" ? "#1F7793" : "#FFFFFF"} backgroundcolor={getBackgroundColor()}><span dangerouslySetInnerHTML={{ __html: props.alertMessage.message }}></span></Notification>
    </div>
  )

}
