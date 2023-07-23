import React from 'react'
import styled from 'styled-components'
import ReqSent from "./images/req-sent.png"
import { BtnWrap } from './AccessReq'
import { ReqAccess } from './AccessReq'
import Clogo from '../IpLogo/images/Logo.svg';

const AccessWrapped = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 380px;
    text-align: center;
    position: absolute;
    left: 35%;
`;
const Img = styled.img``

const Header = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 26px;
    line-height: 42px;
    letter-spacing: -1.25px;
    color: #352960;
`
const SubHeader = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
`
const LogoWrp = styled.div`
    position: absolute;
    margin-top: -63px;
    margin-left: 40px;
`

export default function AccessReqSent() {

    const handleDashboardNavigation = () => {
        window.location.href = '/design/dashboard.html';
    }

    return (
        <div>
            <LogoWrp>
                <Img src={Clogo}></Img>
            </LogoWrp>
            <AccessWrapped>
                <div>
                    <Img src={ReqSent} />
                </div>
                <div>
                    <Header>Access Request Sent</Header>
                </div>
                <div>
                    <SubHeader>You will be notified when the owner of the design grants you access.</SubHeader>
                </div>
                <div>
                    <BtnWrap>
                        <ReqAccess onClick={handleDashboardNavigation}>Go to Dashboard</ReqAccess>
                    </BtnWrap>
                </div>
            </AccessWrapped>
        </div>
    )
}
