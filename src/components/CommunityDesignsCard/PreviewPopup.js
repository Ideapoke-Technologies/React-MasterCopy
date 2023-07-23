import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";
import "../OdyssysPopup/Popup.css";
import Bg from "./images/bg-image.png";
import ClosePopup from "../Dashboard/images/close.svg";
import Button from "../Button/Button";
import { P } from "../CommonStyle";
import Arrow from "./images/arrow-back.svg";
import Template from "./images/default_template.svg";
import BlueArrow from "./images/blue-arrow.svg";
import CardLoader from "../CardLoader/CardLoader";
import Blocker from "../Blocker/Blocker";
import { publishNewDesign } from "../Common";

const PreviewWrap = styled.div`
  min-height: 600px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
  margin: 0 auto;
  background-repeat: no-repeat;
  padding: 35px 85px 0px;
  overflow-x: hidden;
`;
const Cardbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 100%; */
  gap: 12px;
  margin-left: 2px;
  transition: all 0.3s ease-in-out;
  margin: 20px 0 30px 0;
`;
const Close = styled.img`
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;
const HeaderPreview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Img = styled.img`
  cursor: pointer;
`;
const PreviewContent = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
`;
const PreviewTemp = styled.div`
  /* box-shadow: rgb(191, 191, 191) 0px 0px 2px; */
  width: 539px;
  height: 347px;
  /* border: 1px solid rgb(230, 230, 230); */
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90% 80%;
`;
const RelatedDesign = styled.div`
  margin-top: 50px;
`;
const PreviewAllTemp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  width: 507px;
  margin-left: 13px;
  position: relative;
`;
const LeftArrow = styled.img`
  cursor: pointer;
  transform: rotate(178deg);
`;

const RightArrow = styled.img`
  cursor: pointer;
`;

const TempBox = styled.div`
  width: 114px;
  height: 94px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #8a8a8a;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90% 100%;
`;

export default function PreviewPopup(props) {
  const [displayField, setDisplayField] = useState(false);
  const [loader, setLoader] = useState(true);
  const [isOpen, setisOpen] = useState(true);
  const [previewData, setPreviewData] = useState(null);
  const [recomData, setRecomData] = useState(null);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [templateData, setTemplateData] = useState([]);

  const handleClose = () => {
    setisOpen(false);
    props.closePopup(false);
  };

  useEffect(() => {
    getPreviewInfo();
    fetchRecommended();
  }, []);

  const getPreviewInfo = async () => {
    const url =
      process.env.APP_RDT_SERVICE_URL + "/rdt/template/gettemplatedetail";

    const dataObj = {
      userid: props.sesUserId,
      request: {
        templateId: props.templateId,
        // templateId: '99',
      },
    };
    console.log("getPreviewInfo dataObj : ", dataObj);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    }).then(response => response.json())
    .then(data => {
      setLoader(false);
      setPreviewData(data[0]);
      setTimeout(() => {        
        setAsHTML(data[0].templatebrief);
      }, 200);
      if(data[0].frames){
        setCurrentIndices(Array(data[0].frames.length).fill(0));
        setLeftArrow(false);
        setRightArrow(data[0].frames.length > 4);
      }
      if(data[0].templatedata){
        console.log("data[0].templatedata : ", data[0].templatedata);
        setTemplateData(JSON.parse(data[0].templatedata));
      }
    })
    const data = await response.json();
    console.log("getPreviewInfo data : ", data);

  };

  const fetchRecommended = async () => {
    const url =
      process.env.APP_RDT_SERVICE_URL + "/rdt/designelement/recommendeddesigns";

    const dataObj = {
      userid: props.sesUserId,
      request: {
        templateId: props.templateId,
      },
    };
    console.log("fetchRecommended dataObj : ", dataObj);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    const data = await response.json();
    console.log("fetchRecommended data : ", data);
    setRecomData(data);
  };

  const handleTemplateNavigation = () => {

    setIsLoading(true);
    let type;
    if (props.sesusertype == "INTERNAL") {
      type = "templatebuilder";
    } else {
      type = "alldesigns";
    }
    publishNewDesign(props.sesUserId, props.sesNetworkId, props.templateId, type, templateData, previewData.templatename);

    // let url = process.env.RDT_URL + "?templateid=" + btoa(props.templateId);
    // let usertype = props.sesusertype;

    // if (usertype == "INTERNAL") {
    //   url = url + "&type=" + window.btoa("templatebuilder");
    // } else {
    //   url = url + "&type=" + window.btoa("alldesigns");
    // }

    // window.open(url, "_self");
  };

  const setAsHTML = (htmlval) => {
    console.log('htmlval', htmlval)
    const modifiedHTMLStr = htmlval.replaceAll('<p><br></p>','');
    const decDiv = document.getElementById('previewdesc');
    console.log('decDiv', decDiv)
    if(decDiv) decDiv.insertAdjacentHTML('afterend', modifiedHTMLStr);
  }


  const handleNextClick = (itemIndex) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      if (newIndices[itemIndex] < previewData.frames.length - 4) {
        newIndices[itemIndex] += 1;
      } else {
        setRightArrow(false);
      }
      if (newIndices[itemIndex] == previewData.frames.length - 4) {
        setRightArrow(false);
      }
      return newIndices;
    });

    setLeftArrow(true);
  };

  const handlePreviousClick = (itemIndex) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      if (newIndices[itemIndex] > 0) {
        newIndices[itemIndex] -= 1;
      } else {
        setLeftArrow(false);
      }

      if (newIndices[itemIndex] == 0) {
        setLeftArrow(false);
      }
      return newIndices;
    });

    setRightArrow(true);
  };

  return (
    <div>
      {isLoading && <Blocker></Blocker>}
      <ReactModal isOpen={isOpen} onRequestClose={() => handleClose()} ariaHideApp={false} className="modal-pop-back1">
        {loader ? (
          <Blocker></Blocker>
        ) : (
          <PreviewWrap style={{ backgroundImage: `url(${Bg})` }}>
            <Close src={ClosePopup} onClick={() => handleClose()} />
            <HeaderPreview>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Img src={Arrow} onClick={() => handleClose()} />
                  <P text={previewData && previewData.templatename} color="#352960" fontSize="28px" fontWeight="400"></P>
                </div>
              </div>
              <div>
                <Button text="Design" variant="solidBlue" width="178px" onClick={() => handleTemplateNavigation()}></Button>
              </div> 
            </HeaderPreview>

            <div style={{ width: "1244px", height: "501px", overflowY: "auto", marginTop: "20px" }}>
              <PreviewContent>
                <div style={{ width: "539px", height: "347px" }}>
                  <PreviewTemp imageUrl={previewData && process.env.SERVER_NAME_URL + process.env.S3_PATH_URL + previewData.templateimage}></PreviewTemp>
                </div>
                <div style={{ width: "465px" }}>
                  <P text="About this template" color="#352960" fontSize="20px"></P>
                  <div
                    id="previewdesc"
                    // style={{color:"#454545",fontSize:"16px",marginTop:"20px"}}
                  ></div>
                </div>
              </PreviewContent>

              <div>
                {leftArrow && <LeftArrow src={BlueArrow} onClick={() => handlePreviousClick(0)} />}
                <PreviewAllTemp>
                  {previewData &&
                    previewData.frames &&
                    previewData.frames.map((item, index) => {
                      if (index < 4)
                        return (
                          <TempBox key={index} imageUrl={process.env.SERVER_NAME_URL + process.env.S3_PATH_URL + item.url}></TempBox>
                        );
                    })}
                </PreviewAllTemp>
                {rightArrow && <RightArrow src={BlueArrow} onClick={() => handleNextClick(0)} />}
              </div>

              <RelatedDesign>
                <P text="Related Sample Designs" color="#352960" fontSize="19px" fontWeight="400"></P>
              </RelatedDesign>
              <Cardbox>
                <CardLoader></CardLoader>
                <CardLoader></CardLoader>
                <CardLoader></CardLoader>
                <CardLoader></CardLoader>
              </Cardbox>
            </div>
          </PreviewWrap>
        )}
      </ReactModal>
    </div>
  );
}
