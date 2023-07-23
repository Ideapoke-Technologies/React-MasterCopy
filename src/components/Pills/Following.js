import React from 'react'
import styled from 'styled-components'
import TickIcon from "./images/tick.svg"

const Wraped = styled.div`
    border-radius: 16px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 4px;
    border: 1px solid #2970B1;
    background-color: #fff;
    width: 70px;
`
const Text = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;
    color: #2970B1;
`
const Img = styled.img``

export default function Following(props) {
  return (
    <div>
        <Wraped onClick={props.onClick}>
            <Img src={TickIcon} />
            <Text>Following</Text>
        </Wraped> 
    </div>
  )
}
