import styled from "styled-components";

// import React from 'react'

const Para = styled.p`

    font-family: 'Poppins';
    font-style: normal;
    font-weight:${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    color: ${props => props.color ? props.color : "black"};
    cursor: ${props => props.cursor ? props.cursor : "auto"};
    padding: ${(props) => props.padding};
    margin-top: ${(props) => props.marginTop ? props.marginTop : "0"};
    margin-bottom: 0;
    margin-right: 0;
    margin-left: ${(props) => props.marginLeft};
    width: ${(props) => props.width};
    text-align: ${(props) => props.textAlign};
    letter-spacing: ${(props) => props.letterSpacing};
    text-transform: ${(props) => props.textTransform};

    :hover{
        color: ${props => props.hoverColor ? props.hoverColor : props.color};
    }
`


export const P = (props) => {

    return <Para dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} onClick={props.onClick} textTransform={props.textTransform} fontWeight={props.fontWeight} letterSpacing={props.letterSpacing} cursor={props.cursor} textAlign={props.textAlign} marginLeft={props.marginLeft} fontSize={props.fontSize} width={props.width} color={props.color}  hoverColor={props.hoverColor} padding={props.padding} marginTop={props.marginTop}>{props.text}</Para>

}