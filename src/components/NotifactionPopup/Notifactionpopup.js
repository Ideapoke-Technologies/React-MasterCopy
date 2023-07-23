import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { P } from '../CommonStyle'
import Notifactionslider from './Notifactionslider'
import { useTranslation } from "react-i18next";


const Topwraper = styled.div`
background: rgb(255, 255, 255);
border: 0.4px solid rgb(189, 223, 255);
box-shadow: rgba(69, 69, 69, 0.25) 0px 2px 6px;
border-radius: 0px 0px 0px 0px;
display: inline-block;
width: 270px;
padding:  0px;
cursor: pointer;
position: absolute;
right: 0;
top: 71px;
z-index: 1;


`
const Text = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 19px;
color: #454545;
padding-bottom: 0px;
cursor: pointer;
`
const ButtonWrap = styled.div`
position: absolute;
bottom: 0px;
right: 0px;
border-radius: 0px 0px 10px 10px;
`
const Textime = styled.p`
font-family: 'Poppins';
text-align: left;
font-size: 11px;
letter-spacing: 1px;
color: #7b7b7b;
line-height: 1.5;
cursor: default;
margin-bottom: 0px;
position:relative;
bottom: 8px;
`
const TextLine = styled.p`
border-bottom: 1px solid #FF7624;
position: relative;
bottom: 10px;
margin: 0;
`
const Textwraper = styled.div`
min-height: 200px;
max-height: 530px;
overflow-y: auto;
`
const Textwraper1 = styled.div`
padding: 20px;
`
const NotifyTxt = styled.div`
  padding: 0 20px;
  padding-top: 5px;
  margin-bottom: 10px;
  :hover{
      background-color: rgb(255, 243, 225);
  }
`

export const updateNotificationStatus = async (objectid) => {
  const url = process.env.API_URL + "/updatenotificationstatus/" + objectid + "/empty"
  console.log(" updateNotificationStatus url "+url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.text();
  console.log('updateNotificationAPI data : ', data);
};

export default function Notifactionpopup(props) {

  console.log('Notifactionpopup props', props.notificationData);

  const projectNavigation = (link,objectid) => {
    updateNotificationStatus(objectid);

    const url = process.env.SERVER_NAME_URL + link;

    if (link)
    window.open(url, '_self');

  }

  return (
    <div>
      <Topwraper>
        {props.notificationData && props.notificationData.length > 0 ? <><Textwraper>
          {props.notificationData && props.notificationData.map((item, index) => {
            const markup = { __html: item.messagecontent };
            if (index < 3)
              return (
                <> <NotifyTxt key={index}><Text dangerouslySetInnerHTML={markup} onClick={() => projectNavigation(item.redirectionurl, item.objectid)} >
                </Text>
                  <Textime>
                    {item.posteddate}
                  </Textime>
                </NotifyTxt>
                  <TextLine></TextLine></>
              )
          })}
        </Textwraper>

          <ButtonWrap>
            <Button onClick={() => props.handleSlider()} text={props.t('viewall')} variant="solidOrange" width="270px"></Button>
          </ButtonWrap></> : 
          <Textwraper1>
          {props.t('notificationmessage')}
          </Textwraper1>
          }

      </Topwraper>

    </div>
  )
}
