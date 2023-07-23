import React, { useEffect, useState } from 'react'
import "../Popup/PopUp.scss"
import styled from "styled-components";
import Arrow from './images/backArrow.svg'
import background from './images/popupBg.png'
import PopCards from './PopCards';
import Tooltip from './Tooltip';
import { useExcalidrawAppState } from '../App';
import Scene from '../../scene/Scene';
import { distributeDesignElemItemsOnSquareGrid } from '../../data/designelement';
import { isFrameElement } from '../../element/typeChecks';
import { viewportCoordsToSceneCoords } from '../../utils';
import { t } from '../../i18n';
import DefaultTemplate from "../designelements/images/default_template.svg";
import { trackEvent } from '../../analytics';
import Blocker from '../Blocker/images/Blocker';
import { getURLValue } from '../CommonFunctionality';

const PopupWrapper = styled.div`
  background: rgba(88, 79, 79, 0.79);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const PopupBox = styled.div`
  width: 1160px;
  min-height: 595px;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
  margin: 0 auto;
  padding: 0 85px;
  position: relative;
  padding-top: 35px;
  background-repeat: no-repeat;
`
const PopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const PopHeaderTxt = styled.p`
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: #352960;
`
const PopHeaderBtn = styled.button`
  background: #FF7624;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #FFFFFF;
  text-align: center;
  padding: 5px 10px;
  outline: none;
  border: none;
  width: 178px;
  height: 40.44px;
  cursor: pointer;
  &:hover{
    background: #CD5900;
  }
`
const Img = styled.img``

const Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #352960;
`
const BulletPoints = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #454545;
  padding: 15px 0 8px 10px;
  padding-left:0px;
`
const SubBullets = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #454545;
  padding-left: 35px;
`
const CommunityWrapper = styled.div`
  margin-top: 50px;
`
const CardWrapperList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 38px;
  margin-top: 18px;
  flex-wrap: wrap;
  margin-bottom: 35px;
  justify-content: left;
`

const MoreSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: 5px;
  position: relative;
  margin-top: 25px;
`
const Sliders = styled.div`
  border: 1px solid #8A8A8A;
  border-radius: 4px;
  width: 114px;
  height: 94px;
`
const SliderArrow = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #BDDFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
`
const SldImg = styled.img`
    width: 114px;
    height: 93px;
`
const PreviewImg = styled.div`
  background: #FFFFFF;
  box-shadow: rgb(191 191 191) 0px 0px 2px;
  width: 539px;
  height: 347px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid #e6e6e6;
`

export default function Preview(props) {

  const appState = useExcalidrawAppState();
  const [previweData, setPreviewData] = useState([]);
  const [currentIndices, setCurrentIndices] = useState([]);
  const [relatedCommunityDesigns, setRelatedCommunityDesigns] = useState([]);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);
  const [isImageValid, setIsImageValid] = useState(false);
  const [ImageData, setImageData] = useState('');
  const [waitforTemplateData, setWaitForTemplateData] = useState(false);
  const [loader,setLoader]=useState(true);

  
  const handleNextClick = (itemIndex) => {
    setCurrentIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      if (newIndices[itemIndex] < previweData[itemIndex].templateurl.length - 4) {
        newIndices[itemIndex] += 1;
      } else {
        setRightArrow(false);
      }
      if (newIndices[itemIndex] == previweData[itemIndex].templateurl.length - 4) {
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

  const getPreviewInfo = async () => {

    let sessionData = appState.userSessionData;
    let userid = sessionData.sesuserid;

    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/template/gettemplatedetail";
    // console.log(url);
    // console.log(props.selectedTemplateId);
    const obj = {
      "userid": userid,
      "request": {
        "templateId": props.selectedTemplateId
      }
    };

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(data => {

        // Handle the response data
        // console.log(data);
        setLoader(false);
        setPreviewData(data);
        setImageData(data[0].templateimage)
        setWaitForTemplateData(true);
        if (data.length > 0) {
          setCurrentIndices(Array(data[0].templateurl.length).fill(0));
          setLeftArrow(data[0].templateurl.length > 4);
          setLeftArrow(false);
          setRightArrow(data[0].templateurl.length > 4);
        }

        if(data && data.length > 0 && data[0] && data[0].templatebrief){

          setAsHTML(data[0].templatebrief)
        }
      })
      
      .catch(error => {
        // Handle the error
        console.error("Error:", error);
      });
    // Update currentIndices based on the fetched data

  };

  const getRelatedCommunityDesigns = async () => {
    // const url = "http://localhost:9060/recommendeddesigns";
    let sessionData = appState.userSessionData;
    let userid = sessionData.sesuserid;

    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/designelement/recommendeddesigns";
    const obj = {
      "userid": userid,
      "request": {
        "templateId": props.selectedTemplateId
      }
    };
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        // console.log(data);
        setRelatedCommunityDesigns(data);
      })
      .catch(error => {
        // Handle the error
        console.error("Error:", error);
      });
  }
  useEffect(() => { getRelatedCommunityDesigns(); }, [])
  useEffect(() => { getPreviewInfo(); }, []);

  

  const loadDesign = () => {

    let sessionData = appState.userSessionData;
    let userid = sessionData.sesuserid;
    let usertype = sessionData.sesusertype;
    const designType = getURLValue('type');
    const templateId = getURLValue('templateid');
    var templateidData;

    if (usertype == 'CUSTOMER') {
      let sceneElements = props.excalidrawAPI.getSceneElements();
      var setTemplateIdtoUrl=btoa(props.selectedTemplateId);
      if (templateId) {
        templateidData = templateId;
      } else {
        const tempInfo = appState.designDetails;
        templateidData = tempInfo.templateid;
      }
      if(appState.userTemplateEdit && templateidData){
        props.setDisplayTemplates(false);
        props.setdisplaySaveDesignMessage("Before selecting new template, save your designs to view your edits later.")
        props.setdisplaySaveDesignPop(true);
        return;
      }else if(!templateidData && sceneElements.length==0)
      {
        window.location.href = process.env.REACT_APP_SERVER_NAME_URL+'/design/projects/designboard.html?templateid=' + setTemplateIdtoUrl + '&type=YWxsZGVzaWducw==';
      }else if(!templateidData && sceneElements.length > 0)
      {
        var newTab = window.open(process.env.REACT_APP_SERVER_NAME_URL+'/design/projects/designboard.html?templateid=' + setTemplateIdtoUrl + '&type=YWxsZGVzaWducw==', '_blank');
          newTab.focus();
          return;
      }
      else{
        if(templateidData && designType=='alldesigns'){
          window.location.href = process.env.REACT_APP_SERVER_NAME_URL+'/design/projects/designboard.html?templateid=' + setTemplateIdtoUrl + '&type=YWxsZGVzaWducw==';
        }else if(templateidData && designType=='newdesign'){
          window.location.href = process.env.REACT_APP_SERVER_NAME_URL+'/design/projects/designboard.html?templateid=' + setTemplateIdtoUrl + '&type=YWxsZGVzaWducw==';
        }
  }
  }

    if (previweData) {
      let data = previweData[0];
      let templatedata = data.templatedata;
      let sceneElements = props.excalidrawAPI.getSceneElements();
      // console.log('sceneElements--', sceneElements);

      /*props.scene.replaceAllElements([...sceneElements,...JSON.parse(templatedata).elements]);
      props.setPopup(false);
      props.setDisplayTemplates(false);*/

      let elementData = JSON.parse(templatedata);
      // console.log('elementData', elementData);

      let elements = [];
      elements.push(elementData);

      let filterFrameElem = props.scene.getNonDeletedElements().filter((element) => {
        if (isFrameElement(element)) {
          return element;
        }
      });

      props.addElementsToCanvas({
        elements: distributeDesignElemItemsOnSquareGrid(elements),
        position: "",
        files: {},
        frameElements: filterFrameElem
      });
      props.setPopup(false);
      props.setDisplayTemplates(false);
      trackEvent(appState, "Design", "click Design button to addElementsToCanvas");
      props.setAppState({designDetails :{ ...appState.designDetails, templateid: props.selectedTemplateId} });
    }

  }

  useEffect(() => {
    const checkImageValidity = () => {
      const img = new Image();
      img.onload = () => {
        setIsImageValid(true);
      };
      img.onerror = () => {
        setIsImageValid(false);
      };
      img.src = process.env.REACT_APP_SERVER_NAME_URL + '/accessdoc?filePath=' + ImageData;
    };

    checkImageValidity();
  }, [process.env.REACT_APP_SERVER_NAME_URL + '/accessdoc?filePath=' + ImageData]);

  const handleclosingPreiview = () => {
    props.setPopup(false)
    trackEvent(appState, "close preview", "clicked Preview button close ");
  }

  const setAsHTML = (htmlval) => {
    const modifiedHTMLStr = htmlval.replaceAll('<p><br></p>','');
    const decDiv = document.getElementById('donotremovethisdiv');
    if(decDiv) decDiv.insertAdjacentHTML('afterend', modifiedHTMLStr);
  }

  return (
    <>
        {loader && <div style={{zIndex:"100" , position:"fixed"}}>
        <Blocker />
        </div>}
{!loader &&
    <div>
      <PopupWrapper>
        <PopupBox style={{ backgroundImage: `url(${background})` }}>
          <div className="CancelFloat">
            <svg onClick={handleclosingPreiview} className="SliderClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.41 8.99928L18.7 1.70928C18.8638 1.51798 18.9494 1.27191 18.9397 1.02023C18.93 0.768555 18.8257 0.529816 18.6476 0.351722C18.4695 0.173627 18.2307 0.0692943 17.9791 0.0595732C17.7274 0.049852 17.4813 0.135459 17.29 0.299285L10 7.58928L2.71 0.289285C2.5187 0.125458 2.27263 0.0398528 2.02095 0.0495739C1.76927 0.0592951 1.53054 0.163627 1.35244 0.341722C1.17435 0.519816 1.07001 0.758555 1.06029 1.01023C1.05057 1.26191 1.13618 1.50798 1.3 1.69928L8.59 8.99928L1.29 16.2893C1.18532 16.3789 1.1003 16.4893 1.04028 16.6133C0.980256 16.7374 0.946525 16.8725 0.941205 17.0102C0.935886 17.1479 0.959092 17.2853 1.00937 17.4136C1.05964 17.5419 1.1359 17.6585 1.23335 17.7559C1.33081 17.8534 1.44736 17.9296 1.57568 17.9799C1.70401 18.0302 1.84134 18.0534 1.97906 18.0481C2.11678 18.0428 2.25191 18.009 2.37597 17.949C2.50004 17.889 2.61036 17.804 2.7 17.6993L10 10.4093L17.29 17.6993C17.4813 17.8631 17.7274 17.9487 17.9791 17.939C18.2307 17.9293 18.4695 17.8249 18.6476 17.6468C18.8257 17.4688 18.93 17.23 18.9397 16.9783C18.9494 16.7267 18.8638 16.4806 18.7 16.2893L11.41 8.99928Z" fill="#8A8A8A" />
            </svg> 
          </div>
          <PopHeader>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Img style={{ cursor: "pointer" }} src={Arrow} onClick={handleclosingPreiview} />
              <PopHeaderTxt>{props.selectedTemplateName}</PopHeaderTxt>
            </div>
            <PopHeaderBtn onClick={loadDesign}>{t("allTemplatePopup.popcards.design")}</PopHeaderBtn>
          </PopHeader>

          <div style={{ width: "1244px", height: "501px", overflowY: "auto" }} >
            {

              previweData.length > 0 && previweData.map((item, itemIndex) => {
                return (
                  <>
                    <Wrapper>
                      <div style={{ width: "539px", height: "347px" }}>
                        <PreviewImg key={itemIndex} style={{ backgroundImage: `url(${item.templateimage ? process.env.REACT_APP_SERVER_NAME_URL + '/accessdoc?filePath=' + item.templateimage : DefaultTemplate})`, }}>
                          {/* <Img src={process.env.REACT_APP_SERVER_NAME_URL+"/accessdoc?filePath="+item.templateimage}/> */}
                          {/* <MoreSlider>
                        {leftArrow && (
                          <SliderArrow style={{ left: "-30px" }} onClick={() => handlePreviousClick(itemIndex)}>
                            <Img src={ArrowSldL} />
                          </SliderArrow>
                        )}
                        {item.templateurl.slice(currentIndices[itemIndex], currentIndices[itemIndex] + 4).map((imdata: any, index: any) => (
                          <Sliders key={index}>
                            <SldImg src={imdata} />
                          </Sliders>
                        ))}
                        {rightArrow && (
                          <SliderArrow style={{ right: "6px" }} onClick={() => handleNextClick(itemIndex)}>
                            <Img src={ArrowSldR} />
                          </SliderArrow>
                        )}
                      </MoreSlider> */}
                        </PreviewImg>
                      </div>

                      <div>
                        <Header>{t("allTemplatePopup.preview.header")}</Header>
                        <div id='donotremovethisdiv'>
                          {/* {item.templatebrief && <BulletPoints>{item.templatebrief} </BulletPoints>} */}
                          
                          {/* <BulletPoints>Track new & emerging trends to identify <span style={{fontWeight: "600"}}>new business opportunities early on.</span></BulletPoints>
                      <BulletPoints>Distill the information you gather and organize it in a way that helps you <span style={{fontWeight: "600"}}>understand how trends evolve</span> over time.</BulletPoints>
                      <BulletPoints>Mapping out the events that contribute to a trend and capturing <span style={{fontWeight: "600"}}> what industry experts are saying</span> about a movement can provide valuable insights.</BulletPoints>
                      <BulletPoints>Understanding trends is key to</BulletPoints>
                      <SubBullets>develop a market landscape</SubBullets>
                      <SubBullets>monitor competing technologies, </SubBullets>
                      <SubBullets>inform your new investment thesis,</SubBullets>
                      <SubBullets>build go-to-market strategies for new business development.</SubBullets> */}
                        </div>
                      </div>

                    </Wrapper>
                  </>

                );
              })

            }
            {
              waitforTemplateData && relatedCommunityDesigns &&
              <CommunityWrapper>
                <Header>{t("allTemplatePopup.preview.relatedcommunity")}</Header>
                {relatedCommunityDesigns.length > 0 ? (
                  <CardWrapperList>
                    {relatedCommunityDesigns.map((rdesigns) => {
                      return (
                        <PopCards
                          publish={rdesigns.designType == 0 ? `${t("allTemplatePopup.preview.publishedbyCustomer")}` : `${t("allTemplatePopup.preview.publishedbyIdeapoke")}`}
                          Img={rdesigns.image_url ? process.env.REACT_APP_SERVER_NAME_URL + '/accessdoc?filePath=' + rdesigns.image_url : DefaultTemplate}
                          setAppState={props.setAppState}
                          designId={rdesigns.designId}
                          categoryName={rdesigns.categoryName}
                        >
                          {rdesigns.name}
                          <Tooltip>{rdesigns.name}</Tooltip>
                        </PopCards>
                      );
                    })}
                  </CardWrapperList>
                ) : (
                  <div style={{ textAlign: "center", marginTop: "125px", marginBottom: "125px" }}>{t("allTemplatePopup.preview.norelatedcommunity")}</div>
                )}
              </CommunityWrapper>
            }

          </div>
        </PopupBox>
      </PopupWrapper>
    </div>
}
    </>
  )
}