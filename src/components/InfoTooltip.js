import React from 'react'
import styled from 'styled-components';
import downtip from '../components/images/tooltip-arrow.svg'

const StyledTooltip = styled.div`
text-transform: capitalize;
min-width: 190px;
    max-width: 280px;
    border-radius: 4px;
    background-color: rgb(69, 69, 69,0.8);
    color: rgb(255, 255, 255);
    padding: 10px;
    transition: all 200ms ease-in-out; 
    pointer-events: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: 0%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-bottom: 5px solid #232323;
    } */
    // &::after{
    //   content: "";
    //     position: absolute;
    //     left: 100px;
    //     top: ${(props) => props.top};
    //     width: 25px;
    //     height: 25px;
    //     background-color: rgb(69, 69, 69,0.8);
    //     transform: rotate(45deg);
    // }
`;
const Text = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
`
const Img = styled.img`
    position: absolute;
    left: 20px;
    bottom: -13px;
`
export default function InfoTooltip(props) {
  return (
    <div>
        <StyledTooltip>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text>{props.title} </Text>
            {/* <Text>-How does the technology work?</Text>
                <Text>-What is the purpose of this technology?</Text> */}
          </div>
        </StyledTooltip>
        <Img src={downtip} ></Img>
    </div>
  )
}
