import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Iplogo from './images/logo-icon.png'
import Notifactionbgimg from './Notifactionbgimg'
import { P } from '../CommonStyle'
import Close from './images/slider-close.svg'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../../index.css";
import {updateNotificationStatus} from './Notifactionpopup'
import { object } from 'prop-types'


const Topwraper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #f9f9f9;
margin-top: 46px;
`
const Latesttext = styled.p`
font-family: "Poppins";
font-size: 16px;
color: #000;
text-align: left;
letter-spacing: 1px;
line-height: 1.5;
padding: 0px 0 0 20px;
`

const Filter = styled.div`
font-family: "Poppins";
font-size: 13px;
color: #b5b5b5;
text-align: right;
letter-spacing: 1px;
line-height: 1.5;
margin-right: 20px;
`
const Bgbox = styled.div`
background-color: rgb(239, 239, 239);
padding: 10px;
min-height: 120px;
display: grid;
align-items: center;
margin-top: 34px;
grid-template-columns: 0.15fr 1fr;


`
const Img = styled.img`
border:1px solid #ddd;
width: 100px;
height: 100px;
border-radius: 50px;
background: #fff;
`
const Para = styled.p`
font-family: "Poppins";
text-align: left;
font-size: 11px;
letter-spacing: 1px;
line-height: 1.9;
color: #000;
cursor: pointer;
`
const Content = styled.div`
background-image: url(${props => props.img});
width: 60px;
height: 60px;
border-radius: 50px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
filter: drop-shadow(0px 2px 6px rgba(69, 69, 69, 0.25));
border: 1px solid #ff5700;
position: relative;
`
const Wrapercontainer = styled.div`
background:#fff;
position: relative;
padding: 0 20px;
`
const Img1 = styled.img`
position: absolute;
right: 15px;
top: -55px;
`
const Textime = styled.p`
font-family: Poppins;
text-align: left;
font-size: 11px;
letter-spacing: 1px;
color: rgb(123, 123, 123);
line-height: 1.5;
cursor: default;
display: inline-block;
position: relative;
bottom: 15px;
left: 82px;
width: 119%;
`
const Text = styled.p`
color: #000;
font-family: 'Poppins';
font-size: 11px;
font-weight:300;
letter-spacing: 1.2px;
cursor:pointer;
`
export default function Notifactionslider(props) {


  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const handleCloseSlider = () => {
    setState({ isPaneOpen: false });
    props.setShowSlider(false);
    document.body.style.overflowY = "visible";
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setState({ isPaneOpen: true });
    // props.setShowDropdown(false);

  }, [])

  const projectNavigation = (link,objectid) => {

    updateNotificationStatus(objectid);

    const url = process.env.SERVER_NAME_URL + link;
    if (link)
      window.open(url, '_self');

  }

  return (
    <SlidingPane
      className="some-custom-class"
      overlayClassName="some-custom-overlay-class"
      isOpen={state.isPaneOpen}
      onRequestClose={() => {
        handleCloseSlider();
      }}
      hideHeader={true}
    >
      <Wrapercontainer>

        <Img1 src={Close} onClick={handleCloseSlider}></Img1>
        <Topwraper>
          <Latesttext>
            Latest Activities
          </Latesttext>

          <Filter>
            Filter By
          </Filter>
        </Topwraper>

        {props.notificationData && props.notificationData.map((item, index) => {

          const markup = { __html: item.messagecontent };

          return (
            <Bgbox key={index}>
              <Content img={process.env.SERVER_NAME_URL + item.strposteduserimg}></Content>
              <Text dangerouslySetInnerHTML={markup} onClick={() => projectNavigation(item.redirectionurl,item.objectid)}></Text>
              <Textime>
                {item.posteddate}
              </Textime>
            </Bgbox>
          )
        })}
      </Wrapercontainer>

    </SlidingPane>
  )
}
