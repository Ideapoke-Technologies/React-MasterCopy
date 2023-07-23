
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CardDefImage from './images/CardImage.svg'
import InfoTooltip from '../InfoTooltip'
import PremiumImg from '../TempleteCard/images/premiumicon.svg'
import { saveRdtUserActions } from "../UserTracking";
import AddDeleteNode from '../AddNewCard/AddDeleteNode'
import RenameDesign from '../Popup/RenameDesign'
import DeleteDesign from '../Popup/DeleteDesign'
import NewDesignCard from '../Pills/NewDesignCard'
import CardHover from './CardHover'
import PreviewPopup from './PreviewPopup'
import ProcessReq from '../Status/ProcessReq'
import Pending from '../Status/Pending'
import InProgress from '../Status/InProgress'
import DesignReady from '../Status/DesignReady'

const Cardwraper = styled.div`
border-radius: 10px;
border: 1px solid #d1d1d1;
/* box-shadow: 0 0 2px #ccc; */
width: 232px;
margin: 0px 0 0 0px;
position: relative;
    padding: 20px 12px 75px;
height: 184px;
padding-top: 20px;
    padding-bottom: 80px;
:hover{
  border: 1px solid #2970b1; 
}
`
const Bluebg = styled.div`
background: #BAEEFF;
width: 65%;
height: 15px;
margin: 0 auto;
border-radius: 10px 10px 0 0;
`
const Pinkbg = styled.div`
  background: #FFF3E1;
  width: 72%;
  height: 15px;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
`
const Bgbox = styled.div`
    border: 1px solid #ACACAC;
    border-radius: 10px;
    background: #fff;
    width: 80%;
    margin: 0 auto;
    cursor: pointer;
    height: 158px;
    margin-top: 16px;
    background-image: url(${props => props.Img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 95% 75%;
`
const Img = styled.img`
    width: 98%;
    margin-left: 2px;
    margin-top: 2px;
`
const Staricon = styled.div`
    width: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
`
const Keyarea = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 7px;
    color: #FF7624;
    background: #FFF3E1;
    box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.12);
    border-radius: 28.3233px;
    padding: 10px 15px;
    display: inline-block;
    position: absolute;
    bottom: 67px;
    right: 10px;
`
const Bottumbox = styled.div`
    background: #E3F2FF;
    border-radius: 0px 0px 10px 10px;
    padding: 0 15px 0px 0px;
    position: absolute;
    display: block;
    width: 241px;
    bottom: 0px;
    left: 0px;
    padding-bottom: 18px;
`
const BottumboxTemplate = styled.div`
    background: #454545;
    border-radius: 0px 0px 10px 10px;
    padding: 0 15px 0px 0px;
    position: absolute;
    display: block;
    width: 241px;
    bottom: 0px;
    left: 0px;
    padding-bottom: 18px;
`
const Text = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.015em;
    color: #454545;
    padding: 10px 0px 0px 18px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 3px;
    margin-bottom: 5px;
    text-transform: capitalize;
`
const Text2 = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.015em;
    color: #fff;
    padding: 10px 0px 0px 18px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 3px;
    margin-bottom: 5px;
    text-transform: capitalize;
`

const Keyareastatus = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 7px;
    color: #ffffff;
    background-color: ${(props) => props.color};
    box-shadow: rgba(69, 69, 69, 0.12) 0px 2px 6px;
    border-radius: 4px;
    padding: 10px 6px;
    display: inline-block;
    position: absolute;   
    top: 10px;
    left: 12px;
`
const Premumicon = styled.div`
    width: 25px;
    position: absolute;
    right: -5px;
    top: -5px;
`
const SubText = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  color: #454545;
  padding: 0px 0px 0px 18px;
`
export default function CommunityDesigns(props) {

  //Close popup on click of outside
  const cardRef = useRef(null);
  const [preview, setPreview] = useState(false);
  const [hoverStatus, setHoverStatus] = useState(true);
  const [templateData, setTemplateData] = useState(null);

  const handleTemplateNavigation = async () => {

    var action = "";
    if (props.type == "communitydesigns") {
      action = "onclick of community design card";
    } else if (props.type == "designbyideapoke") {
      action = "onclick of design by ideapoke card";
    } else if (props.type == "designbyme") {
      action = "onclick of design by me card";
    } else if (props.type == "followeddesign") {
      action = "onclick of followed design card";
    }else if (props.type == "sharedwithme") {
      action = "onclick of share with me card";
    } 
    saveRdtUserActions(props.sesUserId, 'dashboard', action, props.projTitle);

    if (props.type == "recommended") {
      let url = process.env.RDT_URL + "?templateid=" + btoa(props.templateId);
      let usertype = props.userData.sesusertype;

      if (usertype == 'INTERNAL') {
        url = url + "&type=" + window.btoa("templatebuilder");
      } else {
        url = url + "&type=" + window.btoa("alldesigns");
      }

      window.open(url, "_self");
    } else {

      let status = "";
      if (props.item.flag) {
        if (props.item.flag == "Y" || props.item.flag == "P") {
          status = "processingrequest"
        } else if (props.item.flag == "A") {


          let designId = props.item.dataDesignId ? props.item.dataDesignId : props.item.designId;
          let postedData = await getPostedBy(designId);

          if (postedData) {
            let type = postedData[0].usertype;
            if (type == 'Analyst') {
              status = "";
            }
          } else {
            status = "inprogress"
          }
        } else {
          status = "designisready"
        }
      }
      let url = process.env.RDT_URL + "?templateid=" + btoa(props.templateId) + "&arid=" + btoa(props.item.arid) + "&networkid=" + btoa(props.item.networkId);

      if (status)
        url = url + "&designstatus=" + window.btoa(status);

      let designId = props.item.dataDesignId ? window.btoa(props.item.dataDesignId) : window.btoa(props.item.designId);
      if (props.type) {
        url = url + "&type=" + window.btoa(props.type) + "&designid=" + designId;
      }

      if (props.item.canvasLoaded == 'Y') {
        url = url + "#room=" + props.item.roomId;
      }

      window.open(url, "_self");
    }
  }

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [booked, setBooked] = useState(false);

  const handleHoverActions = (flag) => {
    setHoverStatus(!flag);

    if(props.type == "recommended"){
      setShowPreview(flag);
    }
  }

  const handleBottomHover = (flag) => { 
    setTooltipVisible(flag);
   }

  useEffect(() => {
    if (props.hoverFollow) {
      setBooked(true);
    }

    if(props.type == "recommended"){
      getPreviewInfo();
    }

    const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowRightPopup(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const getPostedBy = async (designId) => {

    var dataObj = {
      "designids": [designId]
    }
    // console.log("getFollowedDesign dataObj", dataObj);
    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/mydesign/getdesignusertype";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj)
    });
    const data = await response.json();
    return data;
  };

  const callNavaigationFun = () => {
    if (props.type != "communitydesigns") {
      // handleTemplateNavigation();
    }
  }

  const [showRightPopup, setShowRightPopup] = useState(false);
  const handleRightClick = (event) => {

    if (props.type == "designbyme") {
      event.preventDefault();
      if (event.nativeEvent.button === 2) {
        setShowRightPopup(true);
      }
    }
  };

  
 const [rPopup, setRPopup] = useState({
  rename: false,
  delete: false
});

  const handleOnclick = (param) => { 
        
    if(param == "RENAME"){
        setRPopup({
            rename: true
        });
    }else{
        setRPopup({
            delete: true
        });
    }
 }

 const getPreviewInfo = async () => {
   const url = process.env.APP_RDT_SERVICE_URL + "/rdt/template/gettemplatedetail";

   const dataObj = {
     userid: props.sesUserId,
     request: {
       templateId: props.templateId,
       // templateId: '99',
     },
   };
  //  console.log("getPreviewInfo dataObj : ", dataObj);

   const response = await fetch(url, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(dataObj),
   })
     .then((response) => response.json())
     .then((data) => {
       if (data[0].templatedata) {
         setTemplateData(JSON.parse(data[0].templatedata));
       }
     });
 };

  return (
    <div>
      <Cardwraper ref={cardRef} style={{ cursor: "pointer" }} onMouseEnter={() => handleHoverActions(true)} onMouseLeave={() => handleHoverActions(false)} onClick={callNavaigationFun} onContextMenu={(e) => handleRightClick(e)}>
        {!props.postedBy && props.text == "Processing Request" && <ProcessReq hoverStatus={hoverStatus}></ProcessReq>}
        
        {!props.postedBy && props.text == "In Progress" && <InProgress text="In Progress" hoverStatus={hoverStatus}></InProgress>}

        {!props.postedBy && props.text == "Design is Ready" && <DesignReady text="Design is Ready" hoverStatus={hoverStatus}></DesignReady>}

        {showRightPopup && <AddDeleteNode handleOnclick={handleOnclick}></AddDeleteNode>}
        {(props.type == "communitydesigns" || props.type == "followeddesign") && (
          <NewDesignCard
            sesUserId={props.sesUserId}
            setRemoveCard={props.setRemoveCard}
            designId={props.designId}
            projTitle={props.projTitle}
            solutionId={props.item.solutionId ? props.item.solutionId : ""}
            setAddCard={props.setAddCard}
            setCardName={props.setCardName}
            type={props.type}
            hoverStatus={hoverStatus}
            setHoverStatus={setHoverStatus}
          ></NewDesignCard>
        )}
        {showPreview && <CardHover templateId={props.templateId} userData={props.userData} sesUserId={props.sesUserId} setPreview={setPreview} templateName={props.subText} templateData={templateData}></CardHover>}

        {props.image == "null" ? <Bgbox Img={CardDefImage} onClick={handleTemplateNavigation}></Bgbox> : <Bgbox Img={props.image} onClick={handleTemplateNavigation}></Bgbox>}

        {props.isPremium && props.isPremium === "Y" && (
          <Premumicon>
            <Img src={PremiumImg}></Img>
          </Premumicon>
        )}

        {props.type == "recommended" ? (
          <BottumboxTemplate style={{ cursor: "pointer" }} onClick={handleTemplateNavigation} onMouseEnter={() => handleBottomHover(true)} onMouseLeave={() => handleBottomHover(false)}>
            <Text2>{props.projTitle}</Text2>
            {props.projTitle && props.projTitle.length > 30 && tooltipVisible && (
              <div style={{ position: "absolute", zIndex: "1", bottom: "62px", left: "10px" }}>
                <InfoTooltip title={props.projTitle}></InfoTooltip>
              </div>
            )}
          </BottumboxTemplate>
        ) : (
          <Bottumbox style={{ cursor: "pointer" }} onClick={handleTemplateNavigation} onMouseEnter={() => handleBottomHover(true)} onMouseLeave={() => handleBottomHover(false)}>
            <Text>{props.projTitle}</Text>
            {props.type != "recommended" && props.subText && <SubText>{props.subText}</SubText>}
            {props.projTitle && props.projTitle.length > 30 && tooltipVisible && (
              <div style={{ position: "absolute", zIndex: "1", bottom: "62px", left: "10px" }}>
                <InfoTooltip title={props.projTitle}></InfoTooltip>
              </div>
            )}
          </Bottumbox>
        )}
      </Cardwraper>
      {rPopup.rename && <RenameDesign projTitle={props.projTitle} designFun={props.designFun} closePopup={setRPopup} sesUserId={props.sesUserId} designId={props.item.dataDesignId ? props.item.dataDesignId : props.item.designId}></RenameDesign>}
      {rPopup.delete && <DeleteDesign projTitle={props.projTitle} designFun={props.designFun} closePopup={setRPopup} sesUserId={props.sesUserId} designId={props.item.dataDesignId ? props.item.dataDesignId : props.item.designId}></DeleteDesign>}
      {preview && <PreviewPopup closePopup={setPreview} sesUserId={props.sesUserId} templateId={props.templateId} sesusertype={props.userData.sesusertype} sesNetworkId={props.userData.sesnetworkid}></PreviewPopup>}
    </div>
  );
}
