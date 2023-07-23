import React from "react";
import styled from "styled-components";
import Member from "./images/profile-img.svg";
import { P } from "../CommonStyle";
import MemberHoverTetx from "./MemberHoverTetx";
import ProfileMember from "./ProfileMember";
import Arrowhover from "./images/hover-icon.svg";
import MemberHoverBg from "./MemberHoverBg";
import { useTranslation } from "react-i18next";

const Outerwraper = styled.div`
  background: #ffffff;
  box-shadow: -13px -6px 20px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: 500px;
  padding: 20px;
  position: absolute;
 margin-top: -90px;
 margin-left:88px;
`;
const Topwraper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Profilewraper = styled.div``;
const Rightext = styled.div``;
const MemeberCardWrapper = styled.div`
  display: flex !important;
  flex-direction: row !important;
`;
const MemeberLHS = styled.div``;
const MemeberRHS = styled.div`
  width: 410px;
  padding-left: 20px;
`;
const MemeberRHSTop = styled.div`
  display: flex !important;
`;
const MemeberRHSBottom = styled.div`
  border: 1px solid rgb(193, 226, 255);
  margin-top: 15px;
  border-radius: 10px;
`;
const MemeberRTL = styled.div`
  flex-grow: 1 !important;
`;
const MemeberRTR = styled.div``;

const MemeberRHSTop2 = styled.div`
  display: flex !important;
`;
const MemeberRTL2 = styled.div`
  flex-grow: 1 !important;
  background: rgb(193, 226, 255);
  border-radius: 10px 0 0 0px;
  padding: 5px 5px 5px 10px;
`;
const MemeberRTR2 = styled.div`
  background: rgb(193, 226, 255);
  border-radius: 0px 10px 0px 0px;
  padding: 5px 65px 5px 5px;
`;

const MemeberRTL3 = styled.div`
  flex-grow: 1 !important;
  border-radius: 10px 0 0 10px;
  padding-left: 10px;
  padding: 10px;
`;
const MemeberRTR3 = styled.div`
  border-radius: 0px 10px 10px 0px;
  padding-right: 50px;
  border-left: 1px solid #c1e2ff;
  padding-left: 20px;
  margin: 10px;
`;
const Img = styled.img`
  position: relative;
  right: 50px;
  bottom: 45px;
`;


const ProfileNoImg = styled.p`
margin-top: 1px;
margin-left:-30px;
width: 80px;
height: 80px;
background: #1F936E;
font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
border-radius: 55px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
@-moz-document url-prefix(){
   width: 73px;   
   height: 45px;
   
   }
`

export default function MemberHoverpreview(props) {

  const { t } = useTranslation();


  console.log(props.propcollabratorData);
  const propIndex = props.index;

  console.log(props.initials+"propIndex")


  function formatDate(date) {
    const currentDate = new Date(date); // Ensure date is a valid Date object
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  
    let dayWithSuffix = day;
    if (day >= 11 && day <= 13) {
      dayWithSuffix += 'th';
    } else {
      switch (day % 10) {
        case 1:
          dayWithSuffix += 'st';
          break;
        case 2:
          dayWithSuffix += 'nd';
          break;
        case 3:
          dayWithSuffix += 'rd';
          break;
        default:
          dayWithSuffix += 'th';
      }
    }
  
    return `${dayWithSuffix} ${month} ${year}`;
  }

  let collabDesignName = props.propcollabratorData.collabDesignName;

  if (collabDesignName.charAt(0) === collabDesignName.charAt(0).toLowerCase()) {
    collabDesignName = collabDesignName.charAt(0).toUpperCase() + collabDesignName.slice(1);
  }


  let fullName = props.propcollabratorData.fullName;
  let words = fullName.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.charAt(0) === word.charAt(0).toLowerCase()) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (i > 0 && word.charAt(0) === word.charAt(0).toLowerCase()) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }

    words[i] = word;
  }

  fullName = words.join(' ');

  return (
    <div>
      
      <Outerwraper style={ props.propcollabratorData.userPhoto =="null" ||props.propcollabratorData.userPhoto =="" ?{marginTop:"-109px"} : {}}>
        {props.propcollabratorData && (
          <MemeberCardWrapper>
            <Img src={Arrowhover}></Img>
            <MemeberLHS>
              <Profilewraper> 
                { props.propcollabratorData.userPhoto =="null" ||props.propcollabratorData.userPhoto =="" ?<ProfileNoImg>{props.initials}</ProfileNoImg>
                 : <div style={{marginLeft:"-20px"}}>
                  <MemberHoverBg                               
                  memberImg={"/accessdoc?filePath="+props.propcollabratorData.userPhoto}
                  Brcolor="#FF7624"
                ></MemberHoverBg>
                    
                 </div>}
                
                {/* <ProfileMember  memberImg={Member} Brcolor="red"></ProfileMember>      */}
              </Profilewraper>
            </MemeberLHS>

            <MemeberRHS>
              <MemeberRHSTop>
                <MemeberRTL>
                  <MemberHoverTetx
                    text={fullName}
                  ></MemberHoverTetx>
                  <div style={{ margin: "0px" }}>
                    <P
                      text={props.propcollabratorData.emailId}
                      color="#1A5C97"
                      fontSize="12px"
                      fontWeight="400"
                    ></P>
                    <P
                      text={props.propcollabratorData.companyName}
                      color="#979797"
                      fontSize="12px"
                      fontWeight="400"
                      linehight="30px"
                    ></P>
                  </div>
                </MemeberRTL>
                <MemeberRTR style={{marginRight: "80px",marginTop: "10px"}} >
                  <Rightext>
                    <P
                    text={t('role')}
                      color="#454545"
                      fontSize="12px"
                      fontWeight="500"
                    ></P>
                    <P
                     text={
                      props.propcollabratorData.roleType == "null"
                        ? "MEMBER"
                        : props.propcollabratorData.roleType
                    }
                      
                      color="#5F5F5F"
                      fontSize="10px"
                      fontWeight="400"
                    ></P>
                  </Rightext>
                </MemeberRTR>
              </MemeberRHSTop>
              <MemeberRHSBottom>
                <MemeberRHSTop2>
                  <MemeberRTL2>
                    <P
                      text={t('recentlycollaborateddesign')}
                      color="#454545;"
                      fontSize="12px"
                      fontWeight="400"
                    ></P>
                  </MemeberRTL2>
                  <MemeberRTR2>
                    <P
                      text={t('lastupdated')}
                      color="#454545"
                      fontSize="12px"
                      fontWeight="500"
                    ></P>
                  </MemeberRTR2>
                </MemeberRHSTop2>
                <MemeberRHSTop2>
                  <MemeberRTL3>
                    <P
                      text={collabDesignName}
                      color="#5F5F5F"
                      fontSize="11px"
                      fontWeight="400"
                    ></P>
                  </MemeberRTL3>
                  <MemeberRTR3>
                    <P
                      text={props.propcollabratorData.updatedDate ?formatDate(props.propcollabratorData.updatedDate):"" }
                      color="#5F5F5F"
                      fontSize="11px"
                      fontWeight="400"
                    ></P>
                  </MemeberRTR3>
                </MemeberRHSTop2>
              </MemeberRHSBottom>
            </MemeberRHS>
          </MemeberCardWrapper>
        )}
      </Outerwraper>
    </div>
  );
}
