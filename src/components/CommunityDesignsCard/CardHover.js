import React,{useState} from 'react'
import styled from 'styled-components'
import "./CardHover.css"
import Blocker from '../Blocker/Blocker'
import { publishNewDesign } from '../Common'

const HoverCard = styled.div` 
    background: rgba(69, 69, 69, 0.6);
    width: 256px;
    height: 284px;
    position: absolute;
    top: 0px;
    left: 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`
const PreviewBtn = styled.button`
  border: 1px solid #2970B1;
  border-radius: 4px;
  background: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #2970B1;
  padding: 4px 22px;
  cursor: pointer;
  &:hover{
    border: 1px solid #15436D;
    color: #15436D;
  }
`
const DesignBtn = styled.button`
  border: 1px solid #2970B1;
  border-radius: 4px;
  background: #2970B1;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  padding: 4px 22px;
  cursor: pointer;
  &:hover{
    border: 1px solid #15436D;
    background: #15436D;
  }
`


export default function CardHover(props) {

  const [isLoading, setIsLoading] = useState(false);
  const handleNavigation = (param) => {

    if (param == 'PREVIEW') {
      props.setPreview(true);
    } else {

      setIsLoading(true);
      publishNewDesign(props.sesUserId,props.userData.sesnetworkid,props.templateId,'alldesigns',props.templateData,props.templateName); 

      // let url = process.env.RDT_URL + "?templateid=" + btoa(props.templateId);
      // let usertype = props.userData.sesusertype;

      // if (usertype == 'INTERNAL') {
      //   url = url + "&type=" + window.btoa("templatebuilder");
      // } else {
      //   url = url + "&type=" + window.btoa("alldesigns");
      // }

      // window.open(url, "_self");
    }

  }

  return (
    <div>
      { isLoading && <Blocker></Blocker>}
      <HoverCard>
        <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
          <PreviewBtn onClick={() => handleNavigation('PREVIEW')}>Preview</PreviewBtn>
          <DesignBtn onClick={() => handleNavigation()}>Design</DesignBtn>
        </div>
      </HoverCard>
    </div>
  )
}
