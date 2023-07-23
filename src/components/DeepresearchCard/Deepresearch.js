import React, { useState } from 'react'
import styled from 'styled-components'
import InfoTooltip from '../InfoTooltip'
import defaultimg from './images/project-default.jpg'
import CardDefImage from './images/DpRsImage.svg'
import { saveRdtUserActions } from "../UserTracking";
import InProgress from '../Status/InProgress'
import DesignReady from '../Status/DesignReady'
import Pending from '../Status/Pending'

const Cardwraper = styled.div`
`

const Blackbg = styled.div`
background: rgb(69, 69, 69);
padding: 6px;
width: 26%;
position: absolute;
top: 0px;
color: rgb(255, 255, 255);
left: 0px;
font-size: 11px;
border-radius: 0 0 10px 10px;
`
const Bottumbox = styled.div`
background: #e3f2ff;
border-radius: 0px 0px 10px 10px;
padding: 28px 0px;
position: absolute;
display: block;
width: 248px;
bottom: 0px;
left: 0px;

`
const Text = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.015em;
color: #454545;
padding: 0 0px 3px 18px;
position: absolute;
top: 0px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
text-transform: capitalize;
`

const Content = styled.div`
background-image: url(${props => props.Img == "null" ?  CardDefImage : props.Img});
width: 248px;
height: 284px;
border-radius: 10px 10px 10px 10px;
background-size: 90%;
background-repeat: no-repeat;
background-position: 13px 60px;
/* filter: drop-shadow(0px 2px 6px rgba(69, 69, 69, 0.25)); */
border: 1px solid #d1d1d1;
position: relative;
:hover{
  box-shadow: rgb(136 176 239) 0px 0px 2px;
  border: 1px solid rgb(59 130 246 / 0.5);
}
`
const Keyarea = styled.div`
font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 7px;
    color: #ffffff;
    background-color: ${(props) => props.color};
    box-shadow: rgba(69, 69, 69, 0.12) 0px 2px 6px;
    border-radius: 28.3233px;
    padding: 10px 24px;
    display: inline-block;
    position: absolute;   
    bottom: 67px;
    right: 15px;
`

const Keyarea1 = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 7px;
color: #FF7624;
background: #FFF3E1;
box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.12);
border-radius: 28.3233px;
padding: 10px 28px;
display: inline-block;
position: relative;
top: 195px;
left: 105px;
`
const Tooltipwraper = styled.div`
position: absolute;
`

const Keyareastatus = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 7px;
    color: #ffffff;
    background-color: ${(props) => props.color};
    box-shadow: rgba(69, 69, 69, 0.12) 0px 2px 6px;
    border-radius: 28.3233px;
    padding: 10px 10px;
    display: inline-block;
    position: absolute;   
    top: 10px;
    right: 12px;
`
export default function Deepresearch(props) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [showRefDel, setShowRefDel] = useState(false);
  const [hoverStatus, setHoverStatus] = useState(true);

  function handleMouseEnter() {
    setTooltipVisible(true);
  }
  function handleMouseLeave() {
    setTooltipVisible(false);
  }

  let imageUrl = props.imageUrl;
  if (imageUrl.indexOf("undefined") != -1) {
    imageUrl = defaultimg;
  }

  const openProjectUrl = () => {
    saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of deep research card',props.projTitle);
    window.open(process.env.SERVER_NAME_URL + props.projectUrl + "?key=" + props.rkey, "_self");
  }

  const handleHoverActions = (flag) => {
    setHoverStatus(!flag);
  }

  return (
    <div onMouseEnter={() => handleHoverActions(true)} onMouseLeave={() => handleHoverActions(false)} onClick={openProjectUrl} style={{ cursor: "pointer" }}>
      <Content Img={props.imageUrl}>
        <Cardwraper>
          {props.status && props.status == "Active" && <InProgress text="Active" hoverStatus={hoverStatus}></InProgress>}
          {props.status && props.status == "Pending" && <Pending hoverStatus={hoverStatus}></Pending>}
          {props.status && props.status == "Closed" && <DesignReady text="Closed" hoverStatus={hoverStatus}></DesignReady>}

          {/* <Keyareastatus color={props.color}>
            {props.status}
          </Keyareastatus> */}
          <Bottumbox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Text>{props.projTitle}</Text>
          </Bottumbox>
          {props.projTitle.length > 40 && tooltipVisible && (
            <div
              style={{
                position: "absolute",
                zIndex: "1",
                bottom: "50px",
                left: "10px",
              }}
            >
              <InfoTooltip title={props.projTitle} top="65px"></InfoTooltip>
            </div>
          )}
        </Cardwraper>
      </Content>
    </div>
  );
}
