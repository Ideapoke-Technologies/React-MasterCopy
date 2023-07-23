import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { P } from "../CommonStyle";
import CommunityDesigns from "../CommunityDesignsCard/CommunityDesigns";
import ReactModal from "react-modal";
import "./Popup.css";
import Close from "./images/wClose.svg";
import BanImg from "./images/banner.png";
import SearchBox from "../Searchbar/SearchBox";
import Tab from "./Tab";
import SearchMsg from "../Searchbar/SearchMsg";
import { saveRdtUserActions } from "../UserTracking";
import TemplatePills from "../TemplatePills/TemplatePills";
import AllTemplateLeftPanel from "../Dashboard/AllTemplateLeftPanel";
import PremiumImg from "../TempleteCard/images/premiumicon.svg";

const Mainwraper = styled.div`
  margin-left: 20px;
  height: 609px;
  overflow-y: auto;
  overflow-x: hidden;
`;
const Cardbox = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 99.5%;
  right: 0px;
  -webkit-box-pack: justify;
  gap: 16px;
  margin-bottom: 20px;
  column-gap: 45px;
`;
const Text = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 28px 20px 0px 0px;
`;
const CloseImg = styled.img`
  width: 25px;
  margin-top: 7px;
  margin-left: 4.2px;

  &:hover {
    cursor: pointer;
  }
`;
const BannerImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BanImg});
  width: 98.5%;
  margin-top: 40px;
  margin-right: 20px;
  border-radius: 5px;
  min-height: 175px;
`;
const TemplateWrap = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;
const CloseWrap = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
  display: flex;
  width: 32px;
  height: 32px;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 10;
  background-color: #fff;
  border-radius: 50px;

  /* 90% resolution */
  @media screen and (min-width: 1400px) {
    right: 0px;
  }
  /* 80% resolution */
  @media (min-width: 1524px) and (max-width: 1920px) {
    right: 10px;
  }
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      right: 54px;
      top: 20px;
    }
  }
`;
const Alldesignwrap = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;
const PImg = styled.img`
  width: 18px;
`;

export default function Popup(props) {
  const [displayField, setDisplayField] = useState(false);
  const [isOpen, setisOpen] = useState(true);
  const [fltrOpp, setFltrOpp] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [alyCat, setAlyCat] = useState("");
  const [tgData, setTgData] = useState(null);
  const [tabValue, setTabValue] = useState("");
  const [tgReqObj, setTgReqObj] = useState({
    opportunity: null,
  });
  const [rtReqObj, setRtObj] = useState({
    userType: 1,
    name: null,
    tag: null,
  });
  const handleClose = (param) => {
    if (param == "close") {
      saveRdtUserActions(
        props.sesUserId,
        "dashboard",
        "onclick of close icon",
        ""
      );
    }
    document.body.style.overflowY = "visible";
    setisOpen(false);
    props.closePopup(false);
    props.callRmdTemplateAPI(0, "TAB");
  };
  const handleSubmit = () => {
    setDisplayField(true);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    getCategories();
  }, []);

  useEffect(() => {
    setTgReqObj({
      opportunity: fltrOpp,
    });
  }, [fltrOpp]);

  //code for fetch Template Grouping
  useEffect(() => {
    fetchTemplateGrouping();
  }, [tgReqObj]);

  const fetchTemplateGrouping = async () => {
    console.log(" fetchTemplateGrouping  reqobj : ", tgReqObj);
    const url = process.env.API_URL + "/gettemplategrouping";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tgReqObj),
    });
    const data = await response.json();
    setTgData(data);
    console.log("fetchTemplateGrouping data in view all temaplates : ", data);
    let flttgids = null;
    if (data != null) {
      flttgids = data.map((item) => item.id).join(",");
    }
    console.log("flttgids : ", flttgids);
    setAlyCat(flttgids);
    if (fltrOpp.indexOf("Templates") != -1) {
      setRtObj({
        userType: 1,
        opportunity: null,
        tgid: flttgids,
      });
    } else {
      setRtObj({
        userType: 1,
        opportunity: fltrOpp,
      });
    }
  };

  const applyCategory = (id, index, bool) => {
    let tgids = alyCat;
    if (!bool && tgids.toString().indexOf(",") != -1) {
      tgids = tgids.replace(`,${id}`, "");
      tgids = tgids.replace(`${id},`, "");
      tgids = tgids.replace(`${id}`, "");

      setAlyCat(tgids);
      setCategoryItem(index, bool);
    } else {
      if (tgids.toString().includes(id)) {
        tgids = id;
      } else {
        tgids = tgids + "," + id;
      }

      if (bool) {
        setAlyCat(tgids);
      } else if (!bool && tgids.toString() == id) {
        tgids = "";
      }

      setCategoryItem(index, bool);
    }
    setRtObj({
      userType: 1,
      tgid: tgids,
    });
  };

  const setCategoryItem = (index, bool) => {
    tgData[index].isActive = bool;
    setTgData(tgData);
  };

  const handleTemplatePills = (id) => {
    setTabValue(id);
  };

  const getCategories = async (designId) => {
    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/template/getcategories";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("getCategories data", data);
    setCategoryData(data);
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => handleClose()}
        ariaHideApp={false}
        className="modal-pop-back1"
      >
        <TemplateWrap>
          <AllTemplateLeftPanel
            callRmdTemplateAPI={props.callRmdTemplateAPI}
          ></AllTemplateLeftPanel>
          <div>
            <CloseWrap>
              <CloseImg src={Close} onClick={() => handleClose("close")} />
            </CloseWrap>
            <Mainwraper>
              <BannerImg>
                <div style={{ paddingTop: "40px", paddingLeft: "40px" }}>
                  <P
                    text={props.t("popupheading")}
                    fontSize="36px"
                    fontWeight="400"
                  ></P>
                  <P
                    text={props.t("popupdesc")}
                    marginTop="10px"
                    width="630px"
                    color="#000000"
                    fontSize="14px"
                    fontWeight="400"
                  ></P>
                </div>
              </BannerImg>
              <Text>
                <div>
                  <P
                    text={props.t("alltemplates")}
                    color="#454545"
                    fontSize="30px"
                    letterSpacing="-1px"
                  ></P>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginBottom: "20px",
                    }}
                  >
                    <PImg src={PremiumImg}></PImg>
                    <P
                      text="Templates for LITE Research Solution"
                      fontSize="12px"
                      color="#454545"
                    ></P>
                  </div>
                </div>
                <SearchBox
                  placeholder={props.t("searchtemplates")}
                  setSearchInput={props.setSearchInput}
                ></SearchBox>
              </Text>
              {/* <SearchMsg text="Search Results for “Trend” - 3 results found" ></SearchMsg> */}

              {/* <Alldesignwrap>
            <Tab t={props.t} callRmdTemplateAPI={props.callRmdTemplateAPI} sesUserId={props.sesUserId} handleTemplatePills={handleTemplatePills}> </Tab>
            { tabValue == 0 && <TemplatePills tgData={tgData} applyCategory={applyCategory}></TemplatePills>}
          </Alldesignwrap> */}
              <Cardbox>
                {props.recTemp &&
                  props.recTemp.map((item, index) => {
                    return (
                      <CommunityDesigns
                        templateId={item.templateId}
                        userData={props.userData}
                        bottom={"56px"}
                        htmlUrl={item.html_file_url}
                        identifier={item.identifier}
                        name={item.templateName}
                        version={item.version}
                        networkid={item.networkid}
                        item={item}
                        projTitle={item.templateName}
                        sesUserId={props.sesUserId}
                        image={
                          item.imageUrl
                            ? process.env.S3_IMAGE_PATH_URL + item.imageUrl
                            : "null"
                        }
                        isTemplate={true}
                        isPremium={item.isPremium}
                        type={"recommended"}
                      ></CommunityDesigns>
                    );
                  })}
              </Cardbox>
            </Mainwraper>
          </div>
        </TemplateWrap>
      </ReactModal>
    </div>
  );
}
