import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'


const Content = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
width: auto;
margin: 0 auto;
flex-direction: column;
`
const Text = styled.div`
  font-family: Poppins;
  color: #454545;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`
export default function Nodata(props) {
  return (
    <div>
      <Content>
        <Text>{props.text}</Text>
      </Content>
    </div>
  )
}
