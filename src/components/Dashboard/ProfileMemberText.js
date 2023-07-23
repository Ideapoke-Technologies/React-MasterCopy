import React from 'react'
import styled from 'styled-components'

const Topwraper = styled.div`
cursor: pointer;
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 18px;
margin: 0;
color:#454545;

`
const Text = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 18px;
margin: 0;
color:#757575;
`

const Textwrapper = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 50px;
line-height: 30px;
color: #454545;
`

export default function ProfileMemberText(props) {
  console.log('props.text', props.text)
  return (
    <div>
        <Topwraper>{props.text}</Topwraper>

        <Textwrapper>
        <Text>{props.stext}</Text>
        </Textwrapper>

    </div>
  )
}
