import React, { useState } from 'react'
import styled from 'styled-components'


const Dropwraper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 0px;
    position: absolute;
    width: 238px;
    height: 134px;
    overflow-y: auto;
    overflow-x:hidden;
background: #F3F3F3;
border: 1px solid #BDDFFF;
box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.15);
border-radius: 20px;
display: inline-block;
    margin-top: -205px;
    left: 6px;
z-index: 1;
`
const Text = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #454545;
padding: 10px;
margin:0px;

:hover{
  background: #D6CBFF; 
}
`
const Text2 = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FF7624;
padding: 10px;
margin:0px;
:hover{
  background: #D6CBFF;
}
`
export default function Multidomain(props) {


    return (
        <div>
            <Dropwraper>
                {props.userDomain && props.userDomain.map((item, index) => {
                    return (
                        <div key={index}>{props.sesNetworkId === item.networkid ? (<Text style={{ cursor: "pointer", background: "rgb(214, 203, 255)" }} onClick={() => { props.changeWorkspace(item.networkid), props.handleDropdown() }}>
                            {item.networkname}
                        </Text >) : (<Text style={{ cursor: "pointer" }} onClick={() => { props.changeWorkspace(item.networkid), props.handleDropdown() }}>
                            {item.networkname}
                        </Text>)}</div>
                    )
                })}
            </Dropwraper>
        </div >
    )
}
