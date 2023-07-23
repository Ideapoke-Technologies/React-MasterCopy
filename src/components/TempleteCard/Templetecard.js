import React,{useState} from "react";
import styled from "styled-components";
import PremiumIcon from "./images/premiumicon.svg";
import { P } from "../CommonStyle";
import TempDefImage from "./images/TemplateImage.svg";
import { saveRdtUserActions } from "../UserTracking";
import PreviewPopup from "../CommunityDesignsCard/PreviewPopup";

const Cardwraper = styled.div`
  width: 160px;
  height: 102px;
  background: #fff;
  box-shadow: rgb(204 204 204 / 48%) 0px 1px 1px;
  border-radius: 5px;
  margin: 30px 0px 0 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  :hover {
    border: 1px solid #2970b1;   
  }
  @media (min-width: 1524px) and (max-width: 1920px) {
    width: 174px;
  }
`;
const Img = styled.img`
  top: 3px;
  /* position: relative; */
  height: 93px;
  border-radius: 5px;
  padding: 5px;
`;
const PremiumImg = styled.img`
  margin-top: -6px;
  position: absolute;
  height: 25px;
  margin-left: 140px;
  @media (min-width: 1524px) and (max-width: 1920px) {
    margin-left: 152px;
  }
`;
const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #454545;
`;
const Text = styled.div`
  width: 171px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #454545;
  margin-top: 8px;
  text-align: center;
`;
const Imgwraper = styled.div`
  position: absolute;
  margin-left: 100px;
  margin-top: -7px;
`;
export default function Templetecard(props) {
  const [preview, setPreview] = useState(false);

  const handlePreview = () => {
    saveRdtUserActions(
      props.userData.sesuserid,
      "dashboard",
      "onclick of all designs card",
      props.name
    );
    setPreview(true);
  };

  return (
    <div>
      <Cardwraper onClick={handlePreview}>
        {props.cardImage == "null" ? (
          <Img src={TempDefImage}></Img>
        ) : (
          <Img src={props.cardImage}></Img>
        )}
        {props.item.isPremium === "Y" && (
          <PremiumImg src={PremiumIcon}></PremiumImg>
        )}
      </Cardwraper>
      <Text>{props.name}</Text>
      {preview && (
        <PreviewPopup
          closePopup={setPreview}
          sesUserId={props.userData.sesuserid}
          templateId={props.templateId}
          sesusertype={props.userData.sesusertype}
          sesNetworkId={props.userData.sesnetworkid}
        ></PreviewPopup>
      )}
    </div>
  );
}
