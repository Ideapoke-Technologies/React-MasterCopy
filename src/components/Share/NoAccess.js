import React from 'react'
import { styled } from 'styled-components'
import { Dashboard } from './AccessReq'
import { BtnWrap } from './AccessReq'
import NoAccessImg from "../images/no-access.png"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 705px;
    text-align: center;
`
const Img = styled.img``

const NDesc = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #454545;
`

export default function NoAccess() {
    return (
        <div>
            <Wrapper>
                <div>
                    <Img src={NoAccessImg} />
                </div>
                <div>
                    <NDesc>You don’t have access to this design because it does not belong to your network.</NDesc>
                </div>
                <BtnWrap>
                    <Dashboard>Go to Dashboard</Dashboard>
                </BtnWrap>
            </Wrapper>
        </div>
    )
}
