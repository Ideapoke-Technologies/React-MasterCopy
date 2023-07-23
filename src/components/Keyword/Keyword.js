import React from 'react'
import styled from 'styled-components'

const Topwraper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 30px;
`
const Keywordtag = styled.div`
font-family: 'Poppins';
font-style: normal;
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: #15436d;
font-size: 13.8161px;
line-height: 21px;
background: #E3F2FF;
border: 1px solid #E3F2FF;
border-radius: 29px;
padding: 10px;
/* margin: 20px 0px 0px 35px; */
cursor: pointer;
display: inline-block;
margin-top: 16px;

`
const Keyworddr = styled.div`
font-family: 'Poppins';
font-style: normal;
font-size: 13.8161px;
line-height: 21px;
-webkit-text-stroke-width: 0.1px;
-webkit-text-stroke-color: #454545;
background: #fff;
border: 1px solid #ACACAC;
border-radius: 35px;
padding: 10px;
cursor: pointer;
margin-top: 16px;
/* margin: 20px 0px 0px 35px; */
cursor: pointer; 
display: inline-block;
:hover{
  background: #E3F2FF;
  border: 1px solid #E3F2FF;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #15436d;
}
`
export default function Keyword(props) {
  return (
    <div>

      <Topwraper>

        {props.dymTabItems && props.dymTabItems.map((item, index) => {
          return (item.isActive === true ? (<Keywordtag key={index} onClick={() => { props.setTabItem(index) }}>
            {item.name}
          </Keywordtag >) : (<Keyworddr key={index} onClick={() => { props.setTabItem(index) }}>
            {item.name}
          </Keyworddr>))
        })}

      </Topwraper>
    </div>
  )
}
