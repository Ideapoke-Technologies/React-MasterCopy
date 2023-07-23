import React from 'react'
import styled from 'styled-components'

const TempWrap = styled.div`
    
`
const Title = styled.div`
    font-size: 22px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 42px;
    letter-spacing: -1.25px;
    color: #15436D;
    text-align: center;
`
const Desc = styled.div`
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins';
    line-height: 28px;
    color: #454545;
    width: 535px;
    margin: 0 auto;
    text-align: center;
    margin-top: 14px;
`
const ImgT = styled.img`
    width: 490px;
    margin: 0 auto;
    display: flex;
    margin-top: 20px;
`

export default function LoginTempSlider(props) {
    return (
        <div>
            <TempWrap>
                <div>
                    <ImgT src={props.Temp} />
                </div>
                <div>
                    <Title>{props.title}</Title>
                </div>
                <div>
                    <Desc>{props.desc}</Desc>
                </div>
            </TempWrap>
        </div>
    )
}
