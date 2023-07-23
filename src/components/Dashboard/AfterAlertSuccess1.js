import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import { useState, useEffect } from "react";

const SuccessAlertWrap = styled.div`
    background-color: #D4FFDE;
    width: 69%;

height: 56px;
position: fixed;
top: 0px;
z-index: 1;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
left: 300px;
text-align: center;
`
const AlertTxt = styled.div``
const Svg = styled.svg`
    position: absolute;
    top: 18px;
    right: 0;
    margin-right: 15px;
    cursor: pointer;
`

export default function AfterAlertSuccess(props) {
    const [showComponent, setShowComponent] = useState(true);

    const handleClick = () => {
        setShowComponent(false);
    };

    return (
        <div>
            {showComponent && props.text != "" && (
                <SuccessAlertWrap>
                    <AlertTxt>
                        <P
                            text={props.text}
                            color="#1F936E"
                            fontSize="18px"
                            fontWeight="400"
                            cursor="auto"
                        ></P>
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleClick}
                        >
                            <path
                                d="M2.01689 2.01689C2.34785 1.68593 2.79673 1.5 3.26478 1.5C3.73283 1.5 4.18171 1.68593 4.51267 2.01689L12 9.50422L19.4873 2.01689C19.8183 1.68593 20.2672 1.5 20.7352 1.5C21.2033 1.5 21.6521 1.68593 21.9831 2.01689C22.3141 2.34785 22.5 2.79673 22.5 3.26478C22.5 3.73283 22.3141 4.18171 21.9831 4.51267L14.4958 12L21.9831 19.4873C22.3141 19.8183 22.5 20.2672 22.5 20.7352C22.5 21.2033 22.3141 21.6521 21.9831 21.9831C21.6521 22.3141 21.2033 22.5 20.7352 22.5C20.2672 22.5 19.8183 22.3141 19.4873 21.9831L12 14.4958L4.51267 21.9831C4.18171 22.3141 3.73283 22.5 3.26478 22.5C2.79673 22.5 2.34785 22.3141 2.01689 21.9831C1.68593 21.6521 1.5 21.2033 1.5 20.7352C1.5 20.2672 1.68593 19.8183 2.01689 19.4873L9.50422 12L2.01689 4.51267C1.68593 4.18171 1.5 3.73283 1.5 3.26478C1.5 2.79673 1.68593 2.34785 2.01689 2.01689Z"
                                fill="#8A8A8A"
                            />
                        </Svg>
                    </AlertTxt>
                </SuccessAlertWrap>
            )}
        </div>
    );
}