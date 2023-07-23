import React, { useEffect, useState } from "react";
import styled from "styled-components";

import downArrow from "./images/downarrow.svg";
import Buttonicon from "../Buttonicon/Buttonicon";
import Iplogo from "../IpLogo/Iplogo";
import Signallogo from "./images/Signal-logo.svg";
import Customize from "./images/customize-report.svg";
import Hondadropdown from "../Hondadropdown/Hondadropdown";
import Multidomain from "../Hondadropdown/Multidomain";
import upArrow from "./images/arrow-down.svg";
import myproject from "./images/my-project.svg";
import expandlogo from "./images/ExpandArrow.svg";
import collapselogo from "./images/CollapArrow.svg";
import portfolioImg from "./images/portfolioIcon.svg";
import CollapseLogo from "../IpLogo/CollapseLogo";
import Button from "../Button/Button";
import DesignMyLink from "../DesignMyLink/DesignMyLink";
import menuclose from "./images/menu-close.png";
import { saveRdtUserActions } from "../UserTracking";
import InfoTooltip from "../InfoTooltip";
import AddDesignImg from "../Button/images/addNewDesign.svg";
import { useTranslation } from "react-i18next";
import Dash from "../Dashboard/images/Dashboard.svg";
import Ad from "./images/all-data.svg";
import Pd from "./images/public-design.svg";
import Md from "./images/my-design.svg";
import Sd from "../CommunityDesignsCard/images/Add_template.svg";
import PF from "../Dashboard/images/profile.svg";
import AS from "../Dashboard/images/account.svg";
import NS from "../Dashboard/images/notification.svg";
import CO from "../Dashboard/images/Collaborators.svg";
import AC from "../Dashboard/images/Activities.svg";
import Adact from "./images/all-design.svg";
import Pdact from "./images/community.svg";
import Mdact from "./images/mydesign.svg";
import Sdact from "./images/follow-back.svg";
import { publishNewDesign} from '../Common';
import Blocker from "../Blocker/Blocker";

const Menuwraper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.12);
  position: fixed;
  width: 244px;
  height: 100%;
  padding: 8px 0px;
  transition: width 0.6s;
  top: 0px;
  // z-index: 1;

  @media (max-width: 765px) {
    display: none;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
const Menuwrapper2 = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(69, 69, 69, 0.12);
  position: fixed;
  width: 244px;
  height: 100%;
  padding: 16px 0px;
  transition: width 0.6s;
  /* z-index: 1; */
  @media (max-width: 1268px) {
    display: none;
  }
`;
const Toplist = styled.div`
  display: flex;
  gap: 15px;
  margin: 0px 0px 0px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14.9115px;
  line-height: 20px;
  color: rgb(69, 69, 69);
  border-radius: 6.72727px;
  padding: 13px 20px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
  cursor: pointer;
  :hover {
    background-color: rgb(241 248 254);
    border-radius: 0;
  }
`;
const Img = styled.img`
`;

const Heading = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: #15436D;
  margin: 0;
  /* animation: fadeIn 2s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s; */
  white-space: nowrap;

  @media screen and (max-width: 1280px) {
    font-size: 13px;
  }
`;
const Heading2 = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  align-items: center;
  color: #454545;
  margin: 0;
  /* animation: fadeIn 2s;
-webkit-animation: fadeIn 2s;
-moz-animation: fadeIn 2s;
-o-animation: fadeIn 2s;
-ms-animation: fadeIn 2s; */
  white-space: nowrap;
`;
const DomainPara = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14.9115px;
  line-height: 12px;
  color: #2970b1;
  cursor: pointer;
  margin: 0px;
  text-align: center;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50px;
`;
const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 12px;
  color: #2970b1;
  cursor: pointer;
  margin: 0px;
  text-align: center;
  line-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 175px;
`;
const Para1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 12px;
  color: #ff7624;
  cursor: pointer;
  margin: 0px;
  text-align: center;
  line-height: 20px;
  :hover {
    background-color: rgb(241 248 254);
    border-radius: 0;
  }
`;
const Tophonda = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 20px;
  margin-top: 120px;
  margin-bottom: 5px;

  @media (min-width: 1524px) and (max-width: 1920px) {
    margin-top: 100px;
  }
`;

const Toplistactive = styled.div`
  background: rgb(227, 242, 255);
  margin: 0px 0px 0px 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgb(69, 69, 69);
  /* border-radius: 6.72727px; */
  padding: 13px 20px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 15px;

  @media screen and (max-width: 1280px) {
    padding: 9px 20px;
    font-size: 13px;
  }
`;
const Textapp = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #a8a8a8;
  margin: 8px 0px 10px 20px;

  @media screen and (max-width: 1280px) {
    margin: 0px 0px 8px 20px;
  }
`;
const TextappCollapse = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #a8a8a8;
  margin: 0;
  display: flex;
  justify-content: center;
  margin: 20px 0px 0px 0px;
`;
const Heading3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-size: 14px;
  line-height: 14px;
  color: #454545;
  margin-top: 12px;
  cursor: pointer;
  padding: 10px 10px;
  width: 100%;
  margin: 5px 5px 5px 0px;
  padding-right: 0px;
  :hover {
    display: flex;
    gap: 10px;
    align-items: baseline;
    cursor: pointer;
    padding: 10px 10px;
    width: 100%;
    padding-right: 0px;
  }

  @media screen and (max-width: 1280px) {
    margin: 3px 5px 3px 0px;
    padding: 10px 0px 10px 10px;
    font-size: 13px;
  }
`;
const Img2 = styled.img`
  width: 7%;
  // opacity: 0.6;
  display: none;
  cursor: pointer;
  margin-top: 3px;
  @media (max-width: 765px) {
    display: block;
    position: absolute;
    margin-left: 245px;
    margin-top: -80px;
    background-color: #e7e7e7;
    padding: 5px;
  }
  @media (max-width: 1200px) {
    display: block;
    position: absolute;
    margin-left: 245px;
    margin-top: -80px;
    background-color: #e7e7e7;
    padding: 5px;
  }
`;
const ImgWrap = styled.div`
  position: absolute;
  left: 45%;
  margin-top: 0px;
  cursor: pointer;
  padding-right: 18px;
  padding: 10px;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: rgb(241 248 254);
    border-radius: 50px;
  }
`;
const ExpandImg = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 0px;
  padding: 10px;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: rgb(241 248 254);
    border-radius: 50px;
  }
`;
const Linkwraper = styled.div``;

export default function LeftMenuList(props) {
  //Language Translation
  const { i18n } = useTranslation();

  const [showDropdown, setShowDropdown] = useState(false);

  const [memberValue, setMemberValue] = useState("");
  const [signalzPm, setSignalzPm] = useState("NO");
  const [reportPm, setReportPm] = useState(null);
  const [cdPerm, setCdPerm] = useState(null);
  const [multidomain, setMultiDomain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [dymMenuList, setDymMenuList] = useState([
    {
      name: props.t("createnewdesign"),
    },
    {
      name: props.t("signalz"),
    },
    {
      name: props.t("customizereport"),
    },
    {
      name: props.t("myprojects"),
    },
    {
      name: props.t("protfoliomanagement"),
    },
  ]);
  const [dymMenuItems, setDymMenuItems] = useState(null);
  const [collapseStatus, setCollapseStatus] = useState(false);

  useEffect(() => {
    fetchCustomerStatics();
    fetchSignalzPm();
    fetchReportPm();
    getCdPermission();
  }, [props.sesNetworkId]);

  const [titleTxt, setTitleTxt] = useState("");

  useEffect(() => {
    setTitleTxt(props.t("alldesigns"));
    setDymMenuItems([
      {
        name: props.t("alldesigns"),
        img: Ad,
        actimg: Adact,
        isActive: true,
      },
      {
        name: props.t("mydesign"),
        img: Md,
        actimg: Mdact,
        isActive: false,
      },
      {
        name: props.t("communitydesign"),
        img: Pd,
        actimg: Pdact,
        isActive: false,
      },
      {
        name: props.t("followeddesign"),
        img: Sd,
        actimg: Sdact,
        isActive: false,
      },
      {
        name: props.t("menudashBoard"),
        img: Dash,
        actimg: Dash,
        isActive: false,
      },
      {
        name: props.t("menuprofile"),
        img: PF,
        actimg: PF,
        isActive: false,
      },
      {
        name: props.t("menuaccount"),
        img: AS,
        actimg: AS,
        isActive: false,
      },
      {
        name: props.t("menunotification"),
        img: NS,
        actimg: NS,
        isActive: false,
      },
      {
        name: props.t("menucollaborators"),
        img: CO,
        actimg: CO,
        isActive: false,
      },
      {
        name: props.t("menuactivities"),
        img: AC,
        actimg: AC,
        isActive: false,
      },
    ]);
  }, [i18n.language]);

  const getDashboardUsermultiDomain = async () => {
    //console.log(" getdashboardusermultidomain : ",);
    const url =
      process.env.API_URL +
      "/getdashboardusermultidomain?sesuserid=" +
      props.sesUserId;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setMultiDomain(data);
  };

  const getCdPermission = () => {
    let cstm_ntwks = process.env.CUSTOMER_DASHBOARD;
    let dashArr = [];
    if (cstm_ntwks.indexOf(",") != -1) {
      dashArr = cstm_ntwks.split(",");
    } else {
      dashArr.push(cstm_ntwks);
    }
    console.log("dashArr : ", dashArr);
    setCdPerm(dashArr);
  };

  const fetchCustomerStatics = async () => {
    try {
      const url = process.env.API_URL + "/fetchnetworkbasicdetails/" + props.sesNetworkId;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Fetchnetworkbasicdetails response : ", data);

      if (data.noOfmember > 0) {
        setMemberValue(data.noOfmember + " " + props.t("members"));
      } else {
        setMemberValue("0 " + props.t("member"));
      }
    } catch (error) {
      console.log("Error in fetchnetworkbasicdetails API");
      setMemberValue("0 " + props.t("member"));
    }
  };

  const fetchSignalzPm = async () => {
    const url =
      process.env.API_URL +
      "/checkproductpermission/" +
      props.sesEmailid +
      "/SIGNALZ/" +
      props.sesNetworkId;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    setSignalzPm(data);
  };

  const fetchReportPm = async () => {
    const url = process.env.API_URL + "/reporttoolannouncement";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (Object.keys(data).length > 0 && data.response != "") {
      setReportPm(data);
    }
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openUrl = (url, action) => {
    saveRdtUserActions(props.sesUserId, "dashboard", action, "");

    window.open(process.env.SERVER_NAME_URL + url, "_self");
  };

  const [checkPermission, setCheckPermission] = useState(null);

  useEffect(() => {
    checkUserPortfolioAccess();
    getDashboardUsermultiDomain();
  }, []);

  const checkUserPortfolioAccess = async () => {
    const url =
      process.env.API_URL +
      "/checkuserportfolioaccess?sesuserid=" +
      props.sesUserId;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    console.log("checkuserportfolioaccess response : ", data);
    setCheckPermission(data);
  };

  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#left-menu-div-id");
    // if (container != null) {
    //   if (!container.contains(e.target) && container !== e.target) {
    //     document.getElementById("left-menu-div-id").style.display = "none";
    //     document.getElementById("left-menu-div-id").style.zIndex = "0";
    //   }
    // }
  });

  const handleCollapse = () => {
    var element = document.getElementById("left-menu-div-id");
    var elemDomain = document.getElementById("domainwrapper");
    var elemMenu = document.getElementsByClassName("menuitems");
    var elemMain = document.getElementById("appmain");
    var elemMember = document.getElementById("memberValue");
    var elemMWrapper = document.getElementById("memberwrapper");
    if (collapseStatus) {
      saveRdtUserActions(
        props.sesUserId,
        "dashboard",
        "onclick of expand icon in left menu",
        ""
      );
      element.style.width = "244px";
      elemMember.style.fontSize = "13px";
      elemMember.style.width = "auto";
      elemDomain.style.minWidth = "244px";
      elemMWrapper.style.marginTop = "120px";
      elemMain.style.gridTemplateColumns = "0.25fr 1fr";
      for (let i = 0; i < elemMenu.length; i++) {
        elemMenu[i].style.justifyContent = "flex-start";
      }
      setCollapseStatus(false);
      collapseMenu(false);
      setDymMenuList([
        {
          name: props.t("createnewdesign"),
        },
        {
          name: props.t("signalz"),
        },
        {
          name: props.t("customizereport"),
        },
        {
          name: props.t("myprojects"),
        },
        {
          name: props.t("protfoliomanagement"),
        },
      ]);
    } else {
      saveRdtUserActions(
        props.sesUserId,
        "dashboard",
        "onclick of collapse icon in left menu",
        ""
      );
      element.style.width = "6%";
      elemMember.style.fontSize = "12px";
      elemMember.style.width = "75px";
      elemMember.style.wordBreak = "break-word";
      elemDomain.style.minWidth = "0px";
      elemMWrapper.style.marginTop = "95px";
      elemMain.style.gridTemplateColumns = "0.1fr 1fr";
      for (let i = 0; i < elemMenu.length; i++) {
        elemMenu[i].style.justifyContent = "center";
      }
      setCollapseStatus(true);
      collapseMenu(true);
      const resetmenu = dymMenuList.map((item) => {
        return { ...item, name: "" };
      });
      setDymMenuList(resetmenu);
    }
  };

  const createDesign = async() => {
      setIsLoading(true);
      publishNewDesign(props.sesUserId,props.sesNetworkId,0,'newdesign','','New Design');
    
  }


  document.addEventListener("mouseup", function (e) {
    var container = document.querySelector("#mainmenu");

    if (container != null) {
      if (!container.contains(e.target) && container !== e.target) {
        container.style.display = "none";
        container.style.zIndex = "0";
      }
    }
  });

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleHoverActions = (flag) => {
    setTooltipVisible(flag);
  };

  //to show user profile items
  const [showSection, setShowSection] = useState({
    dashboard: true,
    profile: false,
    account: false,
    notification: false,
    collaborators: false,
    activities: false,
  });

  const toggleLeftMenu = () => {
    let leftmenuid = document.getElementById("mainmenu");
    if (leftmenuid.style.display == "none") {
      leftmenuid.style.display = "block";
      leftmenuid.style.zIndex = "1";
    } else {
      leftmenuid.style.display = "none";
      leftmenuid.style.zIndex = "0";
    }
  };

  const collapseMenu = (flag) => {
    if (flag) {
      const resetmenu = dymMenuItems.map((item, i) => {
        return { ...item, name: "" };
      });
      setDymMenuItems(resetmenu);
    } else {
      setDymMenuItems([
        {
          name: props.t("alldesigns"),
          img: Ad,
          actimg: Adact,
          isActive: true,
        },
        {
          name: props.t("mydesign"),
          img: Md,
          actimg: Mdact,
          isActive: false,
        },
        {
          name: props.t("communitydesign"),
          img: Pd,
          actimg: Pdact,
          isActive: false,
        },
        {
          name: props.t("followeddesign"),
          img: Sd,
          actimg: Sdact,
          isActive: false,
        },
        {
          name: props.t("menudashBoard"),
          img: Dash,
          actimg: Dash,
          isActive: false,
        },
        {
          name: props.t("menuprofile"),
          img: PF,
          actimg: PF,
          isActive: false,
        },
        {
          name: props.t("menuaccount"),
          img: AS,
          actimg: AS,
          isActive: false,
        },
        {
          name: props.t("menunotification"),
          img: NS,
          actimg: NS,
          isActive: false,
        },
        {
          name: props.t("menucollaborators"),
          img: CO,
          actimg: CO,
          isActive: false,
        },
        {
          name: props.t("menuactivities"),
          img: AC,
          actimg: AC,
          isActive: false,
        },
      ]);
    }
  };

  const handleMenu = (index) => {
    props.setMenuIndex(index);
    const resetmenu = dymMenuItems.map((item, i) => {
      return { ...item, isActive: false };
    });

    // if (index < 4) {
    resetmenu[index].isActive = true;
    setDymMenuItems(resetmenu);
    // }

    if (index === 5) {
      saveRdtUserActions(
        props.sesUserId,
        "profile",
        "onclick of Profile in left menu",
        ""
      );
      setTimeout(() => {
        window.location.href = "/design/profile.html";
      }, 100);
    } else if (index === 6) {
      saveRdtUserActions(
        props.sesUserId,
        "account settings",
        "onclick of Account Settings in left menu",
        ""
      );
      setTimeout(() => {
        window.location.href = "/design/account.html";
      }, 100);
    } else if (index === 7) {
      saveRdtUserActions(
        props.sesUserId,
        "notification settings",
        "onclick of Notification Settings in left menu",
        ""
      );
      setTimeout(() => {
        window.location.href = "/design/notification.html";
      }, 100);
    } else if (index === 8) {
      saveRdtUserActions(
        props.sesUserId,
        "collaborators",
        "onclick of Collaborators in left menu",
        ""
      );
      setTimeout(() => {
        window.location.href = "/design/collaborators.html";
      }, 100);
    } else if (index === 9) {
      saveRdtUserActions(
        props.sesUserId,
        "activities",
        "onclick of Activities in left menu",
        ""
      );
      setTimeout(() => {
        window.location.href = "/design/activities.html";
      }, 100);
    } else if (index === 4) {
      saveRdtUserActions(
        props.sesUserId,
        "dashboard",
        "onclick of DashBoard in left menu",
        ""
      );
      setTimeout(() => {
        window.location.href = "/design/dashboard.html";
      }, 100);
    }
  };

  return (
    <div>
      {isLoading && <Blocker></Blocker>}
      <Menuwraper id="left-menu-div-id">
        {collapseStatus ? (
          <CollapseLogo></CollapseLogo>
        ) : (
          <>
            <Iplogo></Iplogo>
          </>
        )}

        {window.location.href.includes("dashboard") && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "25px",
              marginTop: "20px",
            }}
          >
            {collapseStatus ? (
              <Button variant="solidBlue" onClick={createDesign} width="50px" height="50px" fontWeight="600" image={true}></Button>
            ) : (
              showSection && showSection.dashboard && <Button variant="solidBlue" onClick={createDesign} text={props.t("createnewdesign")} fontSize="20px" width="215px" height="53px" image={true}></Button>
            )}
          </div>
        )}
        <div
          style={{
            height: window.location.href.includes("dashboard") ? "200px" : "300px",
          }}
        >
          {dymMenuItems &&
            dymMenuItems.map((item, index) => {
              if (window.location.href.includes("dashboard") && index < 4) {
                return item.isActive ? (
                  !collapseStatus ? (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                      <Img style={{ width: "18px" }} src={item.actimg} />
                      {!collapseStatus && <Heading>{item.name}</Heading>}
                    </Toplistactive>
                  ) : (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                      <Img style={{ width: "18px" }} src={item.actimg} />
                    </Toplistactive>
                  )
                ) : !collapseStatus ? (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                    <Img style={{ width: "18px" }} src={item.img} />
                    {!collapseStatus && <Heading2>{item.name}</Heading2>}
                  </Toplist>
                ) : (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                    <Img style={{ width: "18px" }} src={item.img} />
                  </Toplist>
                );
              } else if ((props.profilePage || props.accountPage || props.notificationPage || props.collaboratorsPage || props.activitiesPage) && index > 3) {
                const highliteSection = (section) => {
                  switch (section) {
                    case props.t("profilemenu"):
                      return props.profilePage;
                    case props.t("accountmenu"):
                      return props.accountPage;
                    case props.t("notificationmenu"):
                      return props.notificationPage;
                    case props.t("collaboratorsmenu"):
                      return props.collaboratorsPage;
                    case props.t("activitiesmenu"):
                      return props.activitiesPage;
                    case PF:
                      return props.profilePage;
                    case AS:
                      return props.accountPage;
                    case NS:
                      return props.notificationPage;
                    case CO:
                      return props.collaboratorsPage;
                    case AC:
                      return props.activitiesPage;
                  }
                };

                return item.isActive || highliteSection(item.name ? item.name : item.actimg) ? (
                  !collapseStatus ? (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                      <Img src={item.actimg} />
                      {!collapseStatus && <Heading>{item.name}</Heading>}
                    </Toplistactive>
                  ) : (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                      <Img src={item.actimg} />
                    </Toplistactive>
                  )
                ) : !collapseStatus ? (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                    <Img src={item.img} />
                    {!collapseStatus && <Heading2>{item.name}</Heading2>}
                  </Toplist>
                ) : (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                    <Img src={item.img} />
                  </Toplist>
                );
              }
            })}
        </div>
        {(reportPm != null || checkPermission === "YES") && (collapseStatus ? <TextappCollapse>{props.t("otherapps")}</TextappCollapse> : <Textapp>{props.t("otherapps")}</Textapp>)}
        {/* {signalzPm === "YES" && <Toplist className='menuitems' style={{ gap: "0px", paddingTop: "4px" ,paddingBottom: "4px"}}>
          <Img src={Signallogo}></Img>
          {!collapseStatus && <Heading3 onClick={() => { openUrl("/Signalz/Search","onclick of signalz in left menu") }}>
            {dymMenuList[1].name}
          </Heading3>}
        </Toplist>} */}

        {checkPermission && checkPermission === "YES" && (
        <Toplist className="menuitems" style={{ gap: "6px", paddingTop: "4px", paddingBottom: "4px" }}>
          <Img src={portfolioImg}></Img>
          {!collapseStatus && (
            <Heading3
              onClick={() => {
                openUrl("/workspace.html?type=contract", "onclick of portfolio management in left menu");
              }}
            >
              {dymMenuList[4].name}
            </Heading3>
          )}
        </Toplist>
        )} 

        {reportPm && (
        <Toplist className="menuitems" style={{ gap: "6px", paddingTop: "4px", paddingBottom: "4px" }}>
          <Img src={Customize}></Img>
          {!collapseStatus && (
            <Heading3
              onClick={() => {
                openUrl("/reportlisting.html?navigation=Workspace", "onclick of customize report in left menu");
              }}
            >
              {dymMenuList[2].name}
            </Heading3>
          )}
        </Toplist>
        )} 

        {/* {cdPerm && cdPerm.indexOf(props.sesNetworkId) != -1 && <Toplist className='menuitems' style={{ gap: "0px", paddingTop: "4px", paddingBottom: "4px" }}>
          <Img src={myproject}></Img>
          {!collapseStatus && <Heading3 onClick={() => { openUrl("/customerdashboard.html", "onclick of my projects in left menu") }}>
            {dymMenuList[3].name}
          </Heading3>}
        </Toplist>} */}

        {props.sesUserType === "INTERNAL" && props.sesUserRole != undefined && (
          <Linkwraper>
            <DesignMyLink sesUserRole={props.sesUserRole} sesUserId={props.sesUserId} collapseStatus={collapseStatus}></DesignMyLink>
          </Linkwraper>
        )}

        {/* <Buttonicon sesNetworkId={props.sesNetworkId} sesIpAddress={props.sesIpAddress} sesUserId={props.sesUserId}></Buttonicon> */}
        <div
          id="domainwrapper"
          style={{
            position: "absolute",
            bottom: "117px",
            minWidth: "244px",
            transition: "width 0.6s",
            height: "92px",
          }}
        >
          <Tophonda id="memberwrapper" onClick={handleDropdown} onMouseEnter={() => handleHoverActions(true)} onMouseLeave={() => handleHoverActions(false)}>
            {props.sesDisplayName && props.sesDisplayName.length > 17 && tooltipVisible && (
              <div
                style={{
                  position: "absolute",
                  zIndex: "1",
                  bottom: "13px",
                  left: "23px",
                }}
              >
                <InfoTooltip title={props.sesDisplayName}></InfoTooltip>
              </div>
            )}
            {multidomain != undefined && multidomain.length > 1 ? (
              collapseStatus ? (
                <DomainPara>{props.sesDisplayName}</DomainPara>
              ) : (
                <Para>{props.sesDisplayName}</Para>
              )
            ) : collapseStatus ? (
              <DomainPara style={{ cursor: "default" }}>{props.sesDisplayName}</DomainPara>
            ) : (
              <Para style={{ cursor: "default" }}>{props.sesDisplayName}</Para>
            )}
            {multidomain != undefined && multidomain.length > 1 && showDropdown && <Img src={downArrow} style={{ cursor: "pointer" }}></Img>}
            {multidomain != undefined && multidomain.length > 1 && !showDropdown && <Img src={upArrow} style={{ cursor: "pointer" }}></Img>}
          </Tophonda>
          {memberValue && (
            <Para1
              id="memberValue"
              onClick={() => {
                openUrl("/workspace.html?type=members", "onclick of members in left menu");
              }}
              style={{ color: "#000", fontWeight: "400" }}
            >
              {memberValue}
            </Para1>
          )}
          {showDropdown && multidomain.length > 1 && <Multidomain userDomain={multidomain} changeWorkspace={props.changeWorkspace} sesNetworkId={props.sesNetworkId} handleDropdown={handleDropdown}></Multidomain>}

          {collapseStatus ? (
            <ExpandImg
              onClick={() => {
                handleCollapse();
              }}
            >
              <Img src={expandlogo}></Img>
            </ExpandImg>
          ) : (
            <ImgWrap
              onClick={() => {
                handleCollapse();
              }}
            >
              <Img src={collapselogo}></Img>
            </ImgWrap>
          )}
        </div>
      </Menuwraper>

      {/* Duplicate menu when the screen is minimized */}
      <Menuwrapper2 id="mainmenu" style={{ display: "none" }}>
        <Iplogo></Iplogo>
        <Img2
          onClick={() => {
            toggleLeftMenu();
          }}
          src={menuclose}
        ></Img2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "25px",
            marginTop: "20px",
          }}
        >
          {showSection && showSection.dashboard && <Button variant="solidBlue" onClick={createDesign} text={props.t("createnewdesign")} fontSize="22px" width="230px" height="53px" image={true}></Button>}
        </div>
        <div style={{ height: "200px" }}>
          {dymMenuItems &&
            dymMenuItems.map((item, index) => {
              if (window.location.href.includes("dashboard") && index < 4) {
                return item.isActive ? (
                  !collapseStatus ? (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                      <Img src={item.actimg} />
                      {!collapseStatus && <Heading>{item.name}</Heading>}
                    </Toplistactive>
                  ) : (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                      <Img src={item.actimg} />
                    </Toplistactive>
                  )
                ) : !collapseStatus ? (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                    <Img src={item.img} />
                    {!collapseStatus && <Heading2>{item.name}</Heading2>}
                  </Toplist>
                ) : (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                    <Img src={item.img} />
                  </Toplist>
                );
              } else if ((props.profilePage || props.accountPage || props.notificationPage || props.collaboratorsPage || props.activitiesPage) && index > 3) {
                const highliteSection = (section) => {
                  switch (section) {
                    case props.t("profilemenu"):
                      return props.profilePage;
                    case props.t("accountmenu"):
                      return props.accountPage;
                    case props.t("notificationmenu"):
                      return props.notificationPage;
                    case props.t("collaboratorsmenu"):
                      return props.collaboratorsPage;
                    case props.t("activitiesmenu"):
                      return props.activitiesPage;
                    case PF:
                      return props.profilePage;
                    case AS:
                      return props.accountPage;
                    case NS:
                      return props.notificationPage;
                    case CO:
                      return props.collaboratorsPage;
                    case AC:
                      return props.activitiesPage;
                  }
                };

                return item.isActive || highliteSection(item.name ? item.name : item.actimg) ? (
                  !collapseStatus ? (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                      <Img src={item.actimg} />
                      {!collapseStatus && <Heading>{item.name}</Heading>}
                    </Toplistactive>
                  ) : (
                    <Toplistactive className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                      <Img src={item.actimg} />
                    </Toplistactive>
                  )
                ) : !collapseStatus ? (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer" }} onClick={() => handleMenu(index)}>
                    <Img src={item.img} />
                    {!collapseStatus && <Heading2>{item.name}</Heading2>}
                  </Toplist>
                ) : (
                  <Toplist className="menuitems" key={index} style={{ cursor: "pointer", justifyContent: "center" }} onClick={() => handleMenu(index)}>
                    <Img src={item.img} />
                  </Toplist>
                );
              }
            })}
        </div>
        {(reportPm != null || checkPermission === "YES") && (collapseStatus ? <TextappCollapse>{props.t("otherapps")}</TextappCollapse> : <Textapp>{props.t("otherapps")}</Textapp>)}

        {/* {signalzPm === "YES" && <Toplist style={{ gap: "0px", paddingTop: "4px" ,paddingBottom: "4px" }}>
          <Img src={Signallogo}></Img>
          {!collapseStatus && <Heading3 onClick={() => { openUrl("/Signalz/Search","onclick of signalz in left menu") }}>
            {dymMenuList[1].name}
          </Heading3>}
        </Toplist>} */}

        {checkPermission && checkPermission === "YES" && (
          <Toplist style={{ gap: "6px", paddingTop: "4px", paddingBottom: "4px" }}>
            <Img src={portfolioImg}></Img>
            {!collapseStatus && (
              <Heading3
                onClick={() => {
                  openUrl("/workspace.html?type=contract", "onclick of portfolio management in left menu");
                }}
              >
                {dymMenuList[4].name}
              </Heading3>
            )}
          </Toplist>
        )}

        {reportPm && (
          <Toplist style={{ gap: "6px", paddingTop: "4px", paddingBottom: "4px" }}>
            <Img src={Customize}></Img>
            {!collapseStatus && (
              <Heading3
                onClick={() => {
                  openUrl("/reportlisting.html?navigation=Workspace", "onclick of customize report in left menu");
                }}
              >
                {dymMenuList[2].name}
              </Heading3>
            )}
          </Toplist>
        )}

        {/* {cdPerm && cdPerm.indexOf(props.sesNetworkId) != -1 && <Toplist style={{ gap: "0px", paddingTop: "4px", paddingBottom: "4px" }}>
          <Img src={myproject}></Img>
          {!collapseStatus && <Heading3 onClick={() => { openUrl("/customerdashboard.html", "onclick of my projects in left menu") }}>
            {dymMenuList[3].name}
          </Heading3>}
        </Toplist>} */}

        {props.sesUserType === "INTERNAL" && props.sesUserRole != undefined && (
          <Linkwraper>
            <DesignMyLink sesUserRole={props.sesUserRole} sesUserId={props.sesUserId}></DesignMyLink>
          </Linkwraper>
        )}

        {/* <Buttonicon sesNetworkId={props.sesNetworkId} sesIpAddress={props.sesIpAddress} sesUserId={props.sesUserId}></Buttonicon> */}

        <div
          style={{
            position: "absolute",
            top: "462px",
            minWidth: "244px",
            transition: " width 0.6s",
          }}
        >
          <Tophonda onClick={handleDropdown}>
            {multidomain != undefined && multidomain.length > 1 ? (
              collapseStatus ? (
                <DomainPara>{props.sesDisplayName}</DomainPara>
              ) : (
                <Para>{props.sesDisplayName}</Para>
              )
            ) : collapseStatus ? (
              <DomainPara style={{ cursor: "default" }}>{props.sesDisplayName}</DomainPara>
            ) : (
              <Para style={{ cursor: "default" }}>{props.sesDisplayName}</Para>
            )}
            {multidomain != undefined && multidomain.length > 1 && showDropdown && <Img src={downArrow} style={{ cursor: "pointer" }}></Img>}
            {multidomain != undefined && multidomain.length > 1 && !showDropdown && <Img src={upArrow} style={{ cursor: "pointer" }}></Img>}
          </Tophonda>
          {{ memberValue } && (
            <Para1
              onClick={() => {
                openUrl("/workspace.html?type=members", "onclick of members in left menu");
              }}
              style={{ color: "#000", fontWeight: "400" }}
            >
              {memberValue}
            </Para1>
          )}
          {showDropdown && multidomain.length > 1 && <Multidomain userDomain={multidomain} changeWorkspace={props.changeWorkspace} sesNetworkId={props.sesNetworkId} handleDropdown={handleDropdown}></Multidomain>}
        </div>
      </Menuwrapper2>
    </div>
  );
}
