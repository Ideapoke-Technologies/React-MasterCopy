import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import Diamond from './images/rd-diamond.svg'
import Ideapokepremiumpopup from "../Ideapokepremiumpopup/Ideapokepremiumpopup";

const VisBtn = styled.div`
border: 1px solid #FF7624;
border-radius: 4px;
padding: 6px 12px;
display: flex;
-webkit-box-align: center;
align-items: center;
gap: 7px;
width: 193px;
margin: 18px 26px 0px;
`
const Img = styled.img`
`

export default function VisualButton(props) {
  const [popup, setPopup] = useState(false)


  return (
    <div>
      {checkPermission === "YES" ? (<VisBtn onClick={() => { openDymUrl("/workspace.html?type=contract") }} style={{ cursor: "pointer" }}>
        <Img src={Diamond} />
        <P text="Ideapoke Premium" fontSize="14px" color="#FF7624" cursor="pointer"></P>
      </VisBtn>) : (<VisBtn onClick={() => setPopup(true)} style={{ cursor: "pointer" }}>
        <Img src={Diamond} />
        <P text="Ideapoke Premium" fontSize="14px" color="#FF7624" cursor="pointer"></P>
      </VisBtn>)}
      {popup && <Ideapokepremiumpopup closePopup={setPopup} sesNetworkId={props.sesNetworkId} sesIpAddress={props.sesIpAddress} sesUserId={props.sesUserId} />}
    </div>
  )
}
