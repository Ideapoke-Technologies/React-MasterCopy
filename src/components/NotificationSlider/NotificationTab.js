import React from 'react'
import styled from 'styled-components'
import { saveRdtUserActions } from "../UserTracking"

const TabWrap = styled.div`
    display: flex;
    gap: 36px;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    margin-top: 22px;
    margin-bottom: 36px;
    margin-right: 20px;
`
const TabText = styled.div`
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #000;
    text-align: center;
    padding-bottom: 6px;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &:hover{
      color: #FF7624;
      border-bottom: 2px solid #F2651B;
    }
`

export default function NotificationTab(props) {

  const callRmdTemplateAPI = (id, action,type) => {
    // saveRdtUserActions(props.sesUserId, 'dashboard', action, '');
    props.setNDesignType(type);

    for (let index = 0; index < 3; index++) {
      var element = document.getElementById('templatetab' + index + '');
      element.style.color = "#898989";
      element.style.borderBottom = "none";
    }
    var element = document.getElementById('templatetab' + id + '');
    element.style.color = "#FF7624";
    element.style.borderBottom = "2px solid #FF7624";
  }

  return (
    <div>
      <TabWrap>
        <TabText onClick={() => callRmdTemplateAPI(0,'onclick of all in notification slider','ALL')} style={{ color: "#FF7624", borderBottom: "2px solid #FF7624" }} id='templatetab0' >All</TabText>
        <TabText onClick={() => callRmdTemplateAPI(1,'onclick of sample design in notification slider','SAMPLEDESIGN')} id='templatetab1'>Sample Design</TabText>
        <TabText onClick={() => callRmdTemplateAPI(2,'onclick of my designs in notification slider','MYDESIGN')} id='templatetab2'>My Designs</TabText>
      </TabWrap>
    </div>
  )
}
