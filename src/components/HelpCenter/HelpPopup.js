import React, { useState } from "react";
import styled from "styled-components";
import LeftMenuHelp from "./LeftMenuHelp";
import Close from "./images/close.svg";
import GettingStartCards from "./GettingStartCards";
import ContactUs from "./ContactUs";
import Feedback from "./Feedback";
import GuidePage from "./GuidePage";
import FAQ from "./FAQ";
import HeaderDashboard from "../Dashboard/HeaderDashboard";
import RdtArticle from "../Article/RdtArticle";
import ExploreMore from "./ExploreMore";

const PopupBack = styled.div`
  background: rgba(69, 69, 69, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
const HelpWrap = styled.div`
  width: 1205px;
  height: 635px;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 3;
  background-color: #fff;
`;
const HelpContent = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
`;
const RightPanel = styled.div`
  padding-top: 18px;
`;
const CloseIcon = styled.img`
  cursor: pointer;
  float: right;
  position: absolute;
  top: 17px;
  right: 15px;
`;
const HelpHeader = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: #352960;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export default function HelpPopup(props) {
    const [showSectionContent, setShowSectionContent] = useState({
        gettingStarted: true,
        howToGuides: false,
        faq: false,
        growthLeaderAcademy: false,
        contactUs: false,
        giveUsFeedback: false,
      });
    
      const CloseHelpPopup = () => {
        props.setShowHelpPopup(false);
      };
    
      const HeighlightSection = (index) => {       
        if (index === 0) {
          setShowSectionContent({
            gettingStarted: true,
            howToGuides: false,
            faq: false,
            growthLeaderAcademy: false,
            contactUs: false,
            giveUsFeedback: false,
          });
        } else if (index === 1) {
          setShowSectionContent({
            gettingStarted: false,
            howToGuides: true,
            faq: false,
            growthLeaderAcademy: false,
            contactUs: false,
            giveUsFeedback: false,
          });
        } else if (index === 2) {
          setShowSectionContent({
            gettingStarted: false,
            howToGuides: false,
            faq: true,
            growthLeaderAcademy: false,
            contactUs: false,
            giveUsFeedback: false,
          });
        } else if (index === 3) {
          setShowSectionContent({
            gettingStarted: false,
            howToGuides: false,
            faq: false,
            growthLeaderAcademy: true,
            contactUs: false,
            giveUsFeedback: false,
          });
        } else if (index === 4) {
          setShowSectionContent({
            gettingStarted: false,
            howToGuides: false,
            faq: false,
            growthLeaderAcademy: false,
            contactUs: true,
            giveUsFeedback: false,
          });
        } else if (index === 5) {
          setShowSectionContent({
            gettingStarted: false,
            howToGuides: false,
            faq: false,
            growthLeaderAcademy: false,
            contactUs: false,
            giveUsFeedback: true,
          });
        }
      };
    
      return (
        <>
          <div>
            <PopupBack></PopupBack>
            <HelpWrap>
              <HelpContent>
                <div>
                  <LeftMenuHelp HeighlightSection={HeighlightSection}></LeftMenuHelp>
                </div>
                <div>
                  <RightPanel>
                    <div>
                      <CloseIcon src={Close} onClick={CloseHelpPopup} />
                      <HelpHeader>Getting Started</HelpHeader>
                    </div>
                    <div>
                      {showSectionContent.gettingStarted && <GettingStartCards setArticleData={props.setArticleData}></GettingStartCards>}
                      {showSectionContent.howToGuides && <GuidePage></GuidePage>}
                     
                      {showSectionContent.faq && <FAQ></FAQ>}
                      {showSectionContent.contactUs && <ContactUs userData={props.userData}></ContactUs>}
                      {showSectionContent.giveUsFeedback && <Feedback></Feedback>} 
                    </div>
                  </RightPanel>
                </div>
              </HelpContent>
            </HelpWrap>
          </div>
        </>
      );
    };
    