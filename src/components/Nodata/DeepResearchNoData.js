import React from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import { useTranslation } from "react-i18next";


const Content = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
width: auto;
margin: 0 auto;
flex-direction: column;
padding: 150px 100px;
`
const Text = styled.div`
  font-family: Poppins;
  color: #454545;
  font-size: 16px;
  font-weight: 400;
`
const Contact = styled.a`
    color: #FF7624;
    text-decoration: underline;
    cursor: pointer;
`
export default function DeepResearchNoData(props) {
  
  const { t } = useTranslation();

  return (
    <div>
      <Content>
        <Text>{t("deepresearchmemessage1")}</Text>
        {/* <Text>{t("deepresearchmemessage2")}<Contact>{t("deepresearchmemessage3")}</Contact>{t("deepresearchmemessage4")}</Text> */}
      </Content>
    </div>
  )
}
