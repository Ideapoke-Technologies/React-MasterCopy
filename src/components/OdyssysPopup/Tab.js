import React from 'react'
import styled from 'styled-components'
import { saveRdtUserActions } from "../UserTracking"

const TabWrap = styled.div`
    display: flex;
    gap: 36px;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;
    margin-top: 0px;
    margin-bottom: 20px;
    margin-right: 20px;
`
const Text = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #898989;
    text-align: center;
    padding-bottom: 6px;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    :hover{
      color: #FF7624;
      border-bottom: 2px solid #FF7624;
    }
`
const TextActive = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* color: #898989; */
    text-align: center;
    padding-bottom: 6px;
    cursor: pointer;
    border-bottom: 2px solid transparent;  
    color: #FF7624;
    border-bottom: 2px solid #FF7624;
      
`

export default function Tab(props) {

  const callRmdTemplateAPI = (id,action) => {
    saveRdtUserActions(props.sesUserId, 'dashboard', action,'');
    props.callRmdTemplateAPI(id);
    props.handleTemplatePills(id);

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
        <TabWrap marginLeft={props.marginLeft}>
            <Text onClick={() => callRmdTemplateAPI(0,'onclick of all templates in tab')} style={{color: "#FF7624" ,borderBottom: "2px solid #FF7624"}} id='templatetab0' >{props.t('alltemplates')}</Text>
            <Text onClick={() => callRmdTemplateAPI(1,'onclick of all market opportunity in tab')}  id='templatetab1' >{props.t('marketopportunity')}</Text>
            <Text onClick={() => callRmdTemplateAPI(2,'onclick of all business opportunity in tab')} id='templatetab2' >{props.t('businessopportunity')}</Text>
        </TabWrap>
    </div>
  )
}
