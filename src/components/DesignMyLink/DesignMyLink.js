import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import { saveRdtUserActions } from "../UserTracking"

const Textapp = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 17px;
color: #a8a8a8;
margin: 20px 0px 0px 20px;
margin-bottom: 5px;
`
const TextappCollapse = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #a8a8a8;
margin: 20px 0px 0px 16px;
`
const Topwraper = styled.div`
  position: relative;
  z-index: 1;
`
const Textcustomer = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 10px;
color: #3E82FF;
cursor:pointer;
padding: 8px 0px 8px 20px;
margin: 0;
:hover{
  background-color: rgb(241 248 254);
  border-radius: 0;
}
`
const TextcustomerCollapse = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #3E82FF;
  cursor:pointer;
  padding: 0px 0px 0px 16px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 65px;
    :hover{
  background-color: rgb(241 248 254);
  border-radius: 0;
}
`

export default function DesignMyLink(props) {

  const openUrl = (url,action) => {
    saveRdtUserActions(props.sesUserId,'dashboard',action,'');
    window.open(process.env.SERVER_NAME_URL + url, '_self');
  }

  return (
    <div>
      <Topwraper>
        { props.collapseStatus === true ? <TextappCollapse>
          My Links
        </TextappCollapse> : <Textapp>
          My Links
        </Textapp>}
        { props.collapseStatus &&  props.collapseStatus === true ? <TextcustomerCollapse onClick={() => { openUrl("/displaycustomer.html?user=internal","onclick of customers in left menu") }}>
          Customers
        </TextcustomerCollapse> :  <Textcustomer onClick={() => { openUrl("/displaycustomer.html?user=internal","onclick of customers in left menu") }}>
          Customers
        </Textcustomer>}
        {props.sesUserRole != "BUSINESS DEVELOPMENT" && (  props.collapseStatus &&  props.collapseStatus === true ? <TextcustomerCollapse onClick={() => { openUrl("/analystdashboard.html","onclick of analyst dashboard in left menu") }}>
          Analyst Dashboard
        </TextcustomerCollapse> :<Textcustomer onClick={() => { openUrl("/analystdashboard.html","onclick of analyst dashboard in left menu") }}>
          Analyst Dashboard
        </Textcustomer>)}

      </Topwraper>
    </div>
  )
}
