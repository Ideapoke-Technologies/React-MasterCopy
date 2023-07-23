import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CommunityDesigns from '../CommunityDesignsCard/CommunityDesigns'
import LeftMenuList from '../LeftMenu/LeftMenuList'
import Templetecard from '../TempleteCard/Templetecard'
import { P } from '../CommonStyle'
import SearchBox from "../Searchbar/SearchBox"
import Arrowicon from '../Arrowicon/Arrowicon'
import Ballicon from './images/rd-ball.svg'
import Question from './images/rd-question.svg'
import DownArrow from './images/downArrow.svg'
import UpArrow from './images/upArrow.svg'
import HumbergarIcon from './images/humbergar-icon.svg'
import Ad from '../LeftMenu/images/all-data.svg'
import Pd from '../LeftMenu/images/public-design.svg'
import Md from '../LeftMenu/images/my-design.svg'
import Sd from '../CommunityDesignsCard/images/Add_template.svg'
import Dash from './images/Dashboard.svg'
import PF from './images/profile.svg'
import AS from './images/account.svg'
import NS from './images/notification.svg'
import CO from './images/Collaborators.svg'
import AC from './images/Activities.svg'
import Adact from '../LeftMenu/images/all-design.svg'
import Pdact from '../LeftMenu/images/community.svg'
import Mdact from '../LeftMenu/images/mydesign.svg'
import Sdact from '../LeftMenu/images/follow-back.svg'
import Popup from '../OdyssysPopup/Popup'
import Keyword from '../Keyword/Keyword'
import Deepresearch from '../DeepresearchCard/Deepresearch'
import Nodata from '../Nodata/Nodata'
import CollectionDropdown from '../CollectionDropdown'
import ResearchArea from '../ResearchArea'
import Success from '../Banner/Success'
import ErrorMessage from '../Banner/Error'
import CardLoader from '../CardLoader/CardLoader'
import Humger from '../LeftMenu/images/humbergar-icon.svg'
import DeepResearchNoData from '../Nodata/DeepResearchNoData'
// import AccountSettings from './AccountSettings'
import AccountPreview from './AccountPreview'
import ProfileActivity from './ProfileActivity'
import Tab from '../OdyssysPopup/Tab'
import SearchMsg from '../Searchbar/SearchMsg'
import { useTranslation } from "react-i18next";
import ProfilePreview from './ProfilePreview'
import NotifactionPreview from './NotifactionPreview';
import ProfileMemberPreview from './ProfileMemberPreview';
import { saveRdtUserActions } from "../UserTracking"
import LanguageDrpdwn from '../LanguageDropdown/LanguageDrpdwn'
import DashHelp from '../Help/DashHelp'
import NotificationDashSlider from '../NotificationSlider/NotificationDashSlider'
import AddNewRequest from '../AddNewCard/AddNewRequest'
import RequestIdeapoke from '../Popup/RequestIdeapoke'
import RequestThanksPopup from '../Popup/RequestThanksPopup'
import NoMessageImg from './images/no-message.png'

const Mainwraper = styled.div`
    /* display: grid;
    grid-template-columns: 0.25fr 1fr; */
    margin: -7px;
    /* min-width: 1025px; */
    transition: grid-template-columns 0.6s ease;

`
const ErrorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const RightMenuList = styled.div`
margin: 2px 0 0px 0px;
position:relative;
width: 100%;
@media (max-width: 765px) {
    margin: 10px 50px 0px;
}
@media (max-width: 1200px) {
    margin: 10px 50px 0px;
}
`
const CardWrap = styled.div`
    border: 1px solid #FFF;
    background: #FFF;
    padding: 10px;
    border-radius: 5px;
    margin: 25px 14px 20px 0px;
    min-height: 200px;
    box-shadow: 0px 0px 6px 0px rgba(69, 69, 69, 0.25);
    padding-top: 15px;
   
`
const TopWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 14px;
    align-items: center;
`
const DesignWrap = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 765px) {
        //flex-direction: row;
}
@media (max-width: 1200px) {
   // flex-direction: row;
}
`
const Textwraper = styled.div`
display: flex;
justify-content: space-between;
`
const Communiwraper = styled.div`
display: flex;
justify-content: space-between;
`
const Cardbox = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
/* width: 100%; */
gap: 12px;
margin-left: 2px;
transition: all 0.3s ease-in-out;
margin: 30px 0 50px 0;
`
const Iconwraper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 20px;
align-items: center;
`
const Wrapcard = styled.div`
display: flex;
flex-direction: row;
gap: 3px;
flex-wrap: wrap;
@media (min-width: 1524px) and (max-width: 1920px){
    gap: 22px;
}
`

const UserSectionWraper = styled.div`
position: absolute;
margin-top: 28px;
right: 18px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
height: 20px;
z-index: 1;
@media  screen and (max-width: 1280px){
    margin-top: 40px;
}
`;

const Searchwraper = styled.div`
/* display: flex;
align-items: center; */
/* width: 80%; */
`
const Img = styled.img`
    padding: 5px;
:hover{
    padding: 5px;
    background-color: rgb(239 248 255);
    border-radius: 20px;
}
`
const Wrapericon = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
position: absolute;
align-items: center;
white-space: nowrap;
right: 275px;
`
const CountWrapper = styled.div`
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 8px;
`
const Text = styled.p`
width: 45px;
height: 45px;
background: #1F936E;
font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
border-radius: 25px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`
const Carddeep = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
gap: 12px;
margin: 30px 0 50px 0;
`
const Deeptext = styled.div`
margin: 40px 0 0 10px;
`
const Deeppara = styled.div`
margin: 20px 0 0 0px;
`
const ErrorData = styled.div`
    padding: 0px 100px;
    padding-bottom: 100px;
`
const Keybox = styled.div`
display: flex;
align-items: start;
margin: 0px 0 -10px -33px;
`

const NotifiyWrapper = styled.div`
position: relative;
`
const Notify = styled.span`
    border-radius: 50%;
    width: 7px;
    position: absolute;
    aspect-ratio: 1 / 1;
    background-color: rgb(255, 117, 45);
    top: 9px;
    right: 2px;
    height: 7px;
    font-family: 'Poppins';
    justify-content: center;
    padding: 2px;
`;

const Collectionwraper = styled.div`
display: flex;
flex-direction: row;
gap: 35px;
margin: 20px;
margin-left: 0px;
`
const CommunityWrap = styled.div`
    display: flex;
    gap: 15px;
    cursor: pointer;
    align-items: center;
`

const DesignButton = styled.div`
    border: 1px solid #2970b1;
    border-radius: 6px;
    padding: 11px 12px;
    color: #2970b1;
    font-size: 12px;
    /* position: absolute;
    right: 630px; */
    cursor: pointer;

    &:hover{
        color: #15436d;
        border: 1px solid #15436d;
    }
    @media (min-width: 1524px) and (max-width: 1920px){
        font-size: 14px;
    }
`
const ErrorImg = styled.img``

const Clearwraper = styled.div`
`
const Tourwraper = styled.div`
position: absolute;
margin-left: 160px;
margin-top: -89px;
z-index: 1;
`
const Humberger = styled.div`
  position: absolute;
    left: 11px;
    top: 30px;
    display: none;
    cursor: pointer;
@media (max-width: 765px) {
    display:block;
}
`
const Img2 = styled.img`
    opacity: 0.6;
    display: none;
    height: 30px;
    cursor: pointer;
    margin-top: 3px;
    position: absolute;
    left: -42px;
    padding: 5px;
@media (max-width: 765px) {
    display:block;
    margin-top: 12px;
}
@media (max-width: 1200px) {
    display:block;
    margin-top: 12px;
}
`
export default function Dashboard(props) {

    const { i18n } = useTranslation();

    /*Code By Manju => Start */

    const [fltrType, setFltrType] = useState(null);
    const [fltrData, setFltrData] = useState(null);
    const [popup, setPopup] = useState(false)

    const [addCard, setAddCard] = useState(null);
    const [removeCard, setRemoveCard] = useState(null);
    const [pgtnComDsgnCount, setPgtnComDsgnCount] = useState(0);
    const [pgtnDgByIdeapoke, setPgtnDgByIdeapoke] = useState(0);
    const [pgtnDgByMe, setPgtnDgByMe] = useState(0);
    const [pgtnDgSharedWithMe, setPgtnDgSharedWithMe] = useState(0);
    const [pgtnDpRsrch, setPgtnDpRsrch] = useState(0);

    const [recTemp, setRecTemp] = useState(null);
    const [recTempCount, setRecTempCount] = useState(0);
    const [recTempTabData, setRecTempTabData] = useState(null);

    const [comDesignData, setComDesignData] = useState(null);

    const [dgByIdeapokeData, setDgByIdeapokeData] = useState(null);
    const [dgByMeData, setDgByMeData] = useState(null);
    const [dgSharedWtMeData, setDgSharedWtMeData] = useState(null);
    const [dpRschData, setDpRschData] = useState(null);
    const [followedDesignData, setFollowedDesignData] = useState(null);

    const [totalComDsgnCount, setTotalComDsgnCount] = useState(0);
    const [totalDgByIdeapokeCount, setTotalDgByIdeapokeCount] = useState(0);
    const [totalDgByMeCount, setTotalDgByMeCount] = useState(0);
    const [totalSharedWtMeCount, setTotalSharedWtMeCount] = useState(0);
    const [totalDpRschCount, setTotalDpRschCount] = useState(0);

    //Loader States
    const [loaderCd, setLoaderCd] = useState(false);
    const [loaderDbi, setLoaderDbi] = useState(false);
    const [loaderDbm, setLoaderDbm] = useState(false);
    const [loaderSwm, setLoaderSwm] = useState(false);
    const [loaderDr, setLoaderDr] = useState(false);

    const [subHeadingDBI, setSubHeadingDBI] = useState('');
    const [subHeadingDR, setSubHeadingDR] = useState('');
    const [showSHeading, setShowSHeading] = useState(false);

    //code for fetch Recommended Templates
    useEffect(() => {
        // getNotificationCount();
        fetchRecommendedTemplates(0, "", 6);
        fetchCommunityDesigns(0, 4);
        fetchDesignByIdeapoke(0, 3);
        fetchDesignByMe(0, 4);
        fetchSharedWithMe(0, 4);
        fetchDpRschDesigns(0, 3);
        fetchTourCount();
        fetchFollowedDesigns();
    }, []);

    useEffect(() => {
        if (props.menuIndex > -1) {
            setMenuItem(props.menuIndex)
        }
    }, [props.menuIndex])


    const [searchData, setSearchData] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchRecommendedTemplates(0, "", 6);
        fetchCommunityDesigns(0, 4);
        fetchDesignByIdeapoke(0, 3);
        fetchDesignByMe(0, 4);
        fetchSharedWithMe(0,4);
        fetchDpRschDesigns(0, 3);
    }, [searchInput])

    const fetchRecommendedTemplates = async (categoryid,param,count) => {

      console.log('fetchRecommendedTemplates calling ');

        let dataObj;        
        if(categoryid && param){
          dataObj = {
            "userid":props.sesUserId,
            "request": {
              "groupingIds":[categoryid]
            }
        }
      }
        else if(param){
          dataObj = {
            "userid":props.sesUserId,
            "request": {
                "type": param
            }
        }
        }else{
          if (count) {
            dataObj = {
              userid: props.sesUserId,
              request: {
                solutionId: categoryid,
              },
              startRecord: 0,
              noOfRecord: count,
            };
          } else {
            dataObj = {
              "userid":props.sesUserId,
              "request": {
                  "solutionId": categoryid
              },
              "startRecord": 0
          }
          }
        }
        console.log('fetchRecommendedTemplates dataObj : ', dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/template/searchtemplate";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        if (param == "") {
            setRecTemp(data.data);
            setRecTempCount(data.count);
        }
        setRecTempTabData(data.data);
        console.log('fetchRecommendedTemplates data : ', data.data);
    };
    const fetchCommunityDesigns = async (count, endCount) => {

        var dataObj = {
            "userid": props.sesUserId,
            "researchareas": [],
            "industries": [],
            "templates": [],
            "searchInput": "",
            "arid": [],
            "designs": 0,
            "startRecord": count,
            "noOfRecord": endCount
        }
        console.log(" fetchCommunityDesigns dataObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/community/searchdesign";
        // const url = "https://ideastageservices.in/rdt/community/searchdesign";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        console.log('fetchCommunityDesigns data : ', data);
        setComDesignData(data.data);
        setLoaderCd(true);
        setTotalComDsgnCount(data.count);
    };

    const fetchDesignByIdeapoke = async (count, endCount) => {

        var dataObj = {
            "networkId": props.sesNetworkId,
            "userId": props.sesUserId,
            "searchInput": searchInput,
            "startRecord": count,
            "noOfRecord": endCount

        }
        console.log(" fetchDesignByIdeapoke dpReqObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/mydesign/getdesignedbyideapoke";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        setDgByIdeapokeData(data.data);

        if (data.count == 0){
          setShowSHeading(true);
        }
        setLoaderDbi(true);
        setTotalDgByIdeapokeCount(data.count);
        console.log('fetchDesignByIdeapoke data : ', data);
    };

    const fetchDesignByMe = async (count, endCount) => {

        var dataObj = {
            "networkId": props.sesNetworkId,
            "userId": props.sesUserId,
            "searchInput": searchInput,
            "startRecord": count,
            "noOfRecord": endCount
        }
        //console.log(" fetchDesignByMe dpReqObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/mydesign/getdesignbyme";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        setDgByMeData(data.data);
        setTotalDgByMeCount(data.count);
        setLoaderDbm(true);
        console.log('fetchDesignByMe data : ', data);
    };

    const fetchSharedWithMe = async (count, endCount) => {

        var dataObj = {
            "networkId": props.sesNetworkId,
            // "networkId": "NET1001022",
            "userId": props.sesUserId,
            // "userId": "11392",
            "startRecord": count,
            "noOfRecord": endCount
        }
        //console.log(" fetchSharedWithMe dpReqObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/mydesign/getsharedwithme";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        setDgSharedWtMeData(data.data);
        setLoaderSwm(true);
        setTotalSharedWtMeCount(data.count);
        //console.log('fetchSharedWithMe data : ', data);
    };

    const fetchDpRschDesigns = async (count, endCount) => {

        var dataObj = {
            "networkId": props.sesNetworkId,
            "userId": props.sesUserId,
            "searchInput": searchInput,
            "startRecord": count,
            "noOfRecord": endCount
        }
        console.log(" fetchDpRschDesigns dpReqObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/mydesign/getdeepresearch";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        setDpRschData(data.data);
        if (data.count == 0) {
            setShowSHeading(true);
        }
        setLoaderDr(true);
        setTotalDpRschCount(data.count);
        console.log('fetchDpRschDesigns data : ', data);
    };

    const fetchFollowedDesigns = async () => {

        var dataObj = {
            "userId": props.sesUserId
        }
        console.log(" fetchFollowedDesigns dpReqObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/search/bookeddesign";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj),
        });
        const data = await response.json();
        setFollowedDesignData(data);
        console.log('fetchFollowedDesigns data : ', data);
    };

    // remove from bookmark 
    useEffect(() => {
        { removeCard != null && removeBookmarkedDesigns(removeCard) }
    }, [removeCard])
    const removeBookmarkedDesigns = async (id) => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of unfollow icon', '');

        var dataObj = {
            "dataDesignId": id,
            "userId": props.sesUserId
        }
        // console.log("removeBookmarkedDesigns dpReqObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/unfolloweddesign";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj)
        });
        const data = await response.text();
        console.log('removebookmarkeddesigns Success : ', data);
        showBannerMessage("Error", props.t("unfollowedalert") + cardName + ".");
        setRemoveCard(null);
        fetchFollowedDesigns();
    };

    const [bannerMessage, setBannerMessage] = useState("");
    const [cardName, setCardName] = useState("");

    // Add to bookmark 
    useEffect(() => {
        { addCard != null && saveBookmarkedDesigns(addCard) }
    }, [addCard])
    const saveBookmarkedDesigns = async (id) => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of follow icon', '');

        var dataObj = {
            "dataDesignId": id,
            "userId": props.sesUserId
        }
        // console.log(" savebookmarkeddesigns dataObj : ", dataObj);
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/followeddesign";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj)
        });
        const data = await response.text();
        console.log('savebookmarkeddesigns Success : ', data);
        showBannerMessage("Success", props.t("followedalert") + cardName + ".");
        setAddCard(null);
        fetchFollowedDesigns();
    };

    const [messageType, setSetMessageType] = useState({
        Error: false,
        Success: false
    });

    //show banner message 
    const showBannerMessage = (type, text) => {
        //console.log('messageType[type] ', messageType[type])
        setBannerMessage(text);

        setSetMessageType({
            [type]: true
        })
        setTimeout(() => {
            setBannerMessage("");
        }, 3000);
    }

    // menu code - start
    const [titleTxt, setTitleTxt] = useState("");
    const [dymMenuItems, setDymMenuItems] = useState(null);



    const setMenuItem = (index, action) => {
        const resetmenu = dymMenuItems.map((item, i) => {
            return { ...item, isActive: false };
        });

        if (index < 4)
            resetmenu[index].isActive = true;
        setDymMenuItems(resetmenu);
        setTitleTxt(resetmenu[index].name);
        //To view all data for communtiy & My design
        if (index === 2) {
            if (document.getElementById('communitywrapper') != null) {
                document.getElementById('communitysection').style.height = "300px";
                document.getElementById('communitywrapper').style.overflow = "inherit";
            }
            if (action) {
                saveRdtUserActions(props.sesUserId, 'dashboard', action, '');
            } else {
                saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of sample designs in left menu', '');
            }
            fetchCommunityDesigns(0, 0);
            setFltrData(null);
            setFltrType(null);
        } else if (index === 0) {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of all designs in left menu', '');
            setCollapseCommunity(false);
            if (document.getElementById('communitywrapper') != null) {
                document.getElementById('communitywrapper').style.overflow = "hidden";
            }
            setPgtnComDsgnCount(0);
            setPgtnDgByIdeapoke(0);
            setPgtnDgByMe(0);
            setPgtnDgSharedWithMe(0);
            setPgtnDpRsrch(0);
            fetchCommunityDesigns(0, 4);
            fetchDesignByIdeapoke(0, 3);
            fetchDesignByMe(0, 4);
            fetchSharedWithMe(0, 4);
            fetchDpRschDesigns(0, 3);
            setTabItem(0);
        }
        else if (index === 1 && (pgtnDgByIdeapoke != null || pgtnDgByMe != null || pgtnDgSharedWithMe != null || pgtnDpRsrch != null)) {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of my designs in left menu', '');
            fetchDesignByIdeapoke(0, 0);
            fetchDesignByMe(0, 0);
            fetchSharedWithMe(0, 0);
            fetchDpRschDesigns(0, 0);
        }
        else {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of my followed designs in left menu', '');
        }
    }
    // menu code end

    // Tab code - start
    const [dymTabItems, setDymTabItems] = useState(null);

    const setTabItem = (index) => {

        if (index == 0) {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of designs by ideapoke under my designs', '');
        } else if (index == 1) {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of designs by me under my designs', '');
        } else if (index == 2) {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of deep research under my designs', '');
        }
        const resetTab = dymTabItems.map((item, i) => {
            return { ...item, isActive: false };

        })
        resetTab[index].isActive = true;
        setDymTabItems(resetTab);
    }

    // Tab code end

    // Tour code start
    const [tourSteps, setTourSteps] = useState([
        {
            step: 1,
            isActive: false
        },
        {
            step: 2,
            isActive: false
        }, {
            step: 3,
            isActive: false
        },
        {
            step: 4,
            isActive: false
        },
        {
            step: 5,
            isActive: false
        }
    ]);

    const setTourItem = (index, boolean, type) => {
        const resetTour = tourSteps.map((item) => {
            return { ...item, isActive: false };
        })
        resetTour[index].isActive = boolean;
        setTourSteps(resetTour);

        if (index === 3) {
            setTabItem(0)
        } else if (index === 4) {
            setTabItem(1)
        }
        scrollToStep("tour-step-id" + index);
    }

    const scrollToStep = (dymid) => {
        const element = document.getElementById(dymid);
        if (element) {
            let offsetTop = element.offsetTop;
            if (dymid.indexOf('3') != -1) {
                offsetTop = parseInt(offsetTop) + 200;
            }
            scrollToSmoothly(offsetTop, 1000)
        }
    };

    function scrollToSmoothly(pos, time) {
        var currentPos = window.pageYOffset;
        var start = null;
        if (time == null) time = 500;
        pos = +pos, time = +time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            var progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    }

    function findPosition(obj) {
        var currenttop = 0;
        if (obj) {
            if (obj.offsetParent) {
                do {
                    currenttop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return [currenttop];
            }
        }
    }

    const fetchTourCount = async () => {
        const url = process.env.API_URL + "/fetchusertourcount/LO";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        //console.log("fetchusertourcount response : ", data)
        if (data === 0) {
            // setDemoPopUp(true)
        }

    };

    const updateTourCount = async () => {
        const url = process.env.API_URL + "/saveupdateusertourcount/1/LO";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        //console.log("saveupdateusertourcount response : ", data)
    };

    // Tour code end

    const getCheckedBoxData = (chkboxName) => {
        var checkboxesChecked = "";
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxesChecked == "") {
                checkboxesChecked = checkboxes[i].value;
            } else {
                checkboxesChecked = checkboxesChecked + "," + checkboxes[i].value;
            }
        }
        return checkboxesChecked;
    };

    //Filter function
    const applyFilter = (dymid, identifier) => {
        //console.log("applyFilter : " + identifier + " : " + getCheckedBoxData(dymid))
        setFltrData(getCheckedBoxData(dymid));
        setFltrType(identifier);
        // setFltrData(null);
        // setFltrType(null);
    }

    //Help
    const openUrl = (link, param) => {
        saveRdtUserActions(props.sesUserId, 'dashboard', param, '');
        window.open(process.env.SERVER_NAME_URL + link, "_self");
    }

    const [showSlider, setShowSlider] = useState(false);

    const handleSlider = () => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of view all in notification popup', '');
        setShowSlider(true);
        // setShowDropdown({
        //     notification: false
        // });
    }
    //Profile Code End

    useEffect(() => {
        setTitleTxt(props.t("alldesigns"));
        setDymMenuItems([
            {
                name: props.t("alldesigns"),
                img: Ad,
                actimg: Adact,
                isActive: true
            },
            {
                name: props.t("mydesign"),
                img: Md,
                actimg: Mdact,
                isActive: false
            },
            {
                name: props.t("communitydesign"),
                img: Pd,
                actimg: Pdact,
                isActive: false
            },
            {
                name: props.t("followeddesign"),
                img: Sd,
                actimg: Sdact,
                isActive: false
            },
            {
                name: props.t("menudashBoard"),
                img: Dash,
                actimg: Dash,
                isActive: false

            },
            {
                name: props.t("menuprofile"),
                img: PF,
                actimg: PF,
                isActive: false

            },
            {
                name: props.t("menuaccount"),
                img: AS,
                actimg: AS,
                isActive: false

            },
            {
                name: props.t("menunotification"),
                img: NS,
                actimg: NS,
                isActive: false

            },
            {
                name: props.t("menucollaborators"),
                img: CO,
                actimg: CO,
                isActive: false

            },
            {
                name: props.t("menuactivities"),
                img: AC,
                actimg: AC,
                isActive: false

            },
        ]);

        setDymTabItems([
            {
                name: props.t("designbyideapoke"),
                isActive: true,
                tag: props.t("designbyideapoketag")
            }, {
                name: props.t("designbyme"),
                isActive: false,
                tag: props.t("designbymetag")
            },
             {
                name: props.t("sharedwithme"),
                isActive: false,
                tag: props.t("sharedwithmetag")
            },
            {
                name: props.t("deepresearch"),
                isActive: false,
                tag: props.t("deepresearchtag")
            }]);

        setSubHeadingDBI(props.t('newdesigntag'));
        setSubHeadingDR(props.t('postrequirementtag'));
    }, [i18n.language]);

    useEffect(() => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'page load', '');
    }, []);

    const [collapseCommunity, setCollapseCommunity] = useState(false);

    const handleCommunityCollapse = () => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of sample designs arrow icon', '');

        var elem = document.getElementById('communitysection');
        var elem1 = document.getElementById('communitywrapper');
        if (collapseCommunity) {
            setCollapseCommunity(false);
            elem.style.height = "300px";
            elem1.style.height = "369px";
        } else {
            setCollapseCommunity(true);
            elem.style.height = "0";
            elem1.style.height = "70px";
        }
    }

    const [showRequestPopup, setShowRequestPopup] = useState(false);
    const [showRequestThankPopup, setShowRequestThankPopup] = useState(false);

    const viewAllTemplates = () => {
      fetchRecommendedTemplates(0, "");
      setPopup(true);
    };

    return (
      <div>
        <Mainwraper id="mainwrapper">
          {
            <RightMenuList>
              {props.homePage && (
                <>
                  {/* Recommended templates -- start */}
                  {dymMenuItems && dymMenuItems[0].isActive && (
                    <CardWrap>
                      <div>
                        <Textwraper>
                          <P text={props.t("alldesignheading")} color="#454545" fontSize="15px" fontWeight="500"></P>

                          {recTempCount > 6 && (
                            <div style={{ position: "absolute", right: "28px" }}>
                              <P
                                onClick={() => {
                                  viewAllTemplates(), saveRdtUserActions(props.sesUserId, "dashboard", "onclick of view all in all designs", "");
                                }}
                                text={props.t("viewall")}
                                color="#2970B1"
                                hoverColor="#15436d"
                                fontSize="12px"
                                fontWeight="400"
                                cursor="pointer"
                              ></P>
                            </div>
                          )}
                          {popup && <Popup t={props.t} closePopup={setPopup} recTemp={recTempTabData} callRmdTemplateAPI={fetchRecommendedTemplates} setSearchInput={setSearchInput} userData={props.userData} sesUserId={props.sesUserId} />}
                        </Textwraper>
                      </div>

                      <Wrapcard>
                        {/* Code By Manju => Start  */}

                        {recTemp != null &&
                          recTemp != "" &&
                          recTemp.map((item, index) => {
                            if (index < 6) {
                              return (
                                <Templetecard
                                  userData={props.userData}
                                  identifier="HIDE"
                                  key={index}
                                  templateId={item.templateId}
                                  name={item.templateName}
                                  version={item.version}
                                  tempData={recTemp}
                                  cardImage={item.imageUrl ? process.env.S3_IMAGE_PATH_URL + item.imageUrl : "null"}
                                  item={item}
                                ></Templetecard>
                              );
                            }
                          })}

                        {recTemp == "" && <P text={props.t("templatesearch")} color="#454545" fontSize="16px" fontWeight="400" cursor="auto" padding="70px 0 0 300px"></P>}

                        {/* Code By Manju => end  */}
                      </Wrapcard>
                    </CardWrap>
                  )}
                  {/* Recommended templates -- end */}

                  {/* My designs code -- start */}
                  {((dymMenuItems && dymMenuItems[1].isActive === true) || (dymMenuItems && dymMenuItems[0].isActive === true)) && (
                    <>
                      {dymMenuItems[0].isActive && (
                        <>
                          <Communiwraper style={{ marginTop: "56px" }}>
                            <P text={props.t("mydesign")} color="#000000" fontSize="24px" fontWeight="500" letterSpacing="-1.25px"></P>

                            {/* Enable pagination for My design - Designed by Ideapoke */}
                            {dymTabItems[0].isActive === true && dgByIdeapokeData != null && totalDgByIdeapokeCount > 3 && (
                              <Iconwraper>
                                <P
                                  text={props.t("viewall")}
                                  hoverColor="#15436d"
                                  color="#2970B1"
                                  fontSize="12px"
                                  fontWeight="400"
                                  cursor="pointer"
                                  onClick={() => {
                                    setMenuItem(1);
                                  }}
                                ></P>
                                <Arrowicon pagenationCount={pgtnDgByIdeapoke} setPagenationCount={setPgtnDgByIdeapoke} count={totalDgByIdeapokeCount} paginationFun={fetchDesignByIdeapoke} type="designbyideapoke"></Arrowicon>
                              </Iconwraper>
                            )}

                            {/* Enable pagination for My design - Designs by me */}
                            {dymTabItems[1].isActive === true && dgByMeData != null && totalDgByMeCount > 4 && (
                              <Iconwraper>
                                <P
                                  text={props.t("viewall")}
                                  hoverColor="#15436d"
                                  color="#2970B1"
                                  fontSize="12px"
                                  fontWeight="400"
                                  cursor="pointer"
                                  onClick={() => {
                                    setMenuItem(1);
                                  }}
                                ></P>
                                <Arrowicon pagenationCount={pgtnDgByMe} setPagenationCount={setPgtnDgByMe} count={totalDgByMeCount} paginationFun={fetchDesignByMe} type="designbyme"></Arrowicon>
                              </Iconwraper>
                            )}

                            {/* Enable pagination for My design - Shared with me */}
                            {dymTabItems[2].isActive === true && dgSharedWtMeData != null && totalSharedWtMeCount > 4 && (
                              <Iconwraper>
                                <P
                                  text={props.t("viewall")}
                                  hoverColor="#15436d"
                                  color="#2970B1"
                                  fontSize="12px"
                                  fontWeight="400"
                                  cursor="pointer"
                                  onClick={() => {
                                    setMenuItem(1);
                                  }}
                                ></P>
                                <Arrowicon pagenationCount={pgtnDgSharedWithMe} setPagenationCount={setPgtnDgSharedWithMe} count={totalSharedWtMeCount} paginationFun={fetchSharedWithMe} type="sharedwithme"></Arrowicon>
                              </Iconwraper>
                            )}

                            {/* Enable pagination for My design - Deep research */}
                            {dymTabItems[3].isActive === true && dpRschData != null && totalDpRschCount > 3 && (
                              <Iconwraper>
                                <P
                                  text={props.t("viewall")}
                                  hoverColor="#15436d"
                                  color="#2970B1"
                                  fontSize="12px"
                                  fontWeight="400"
                                  cursor="pointer"
                                  onClick={() => {
                                    setMenuItem(1);
                                  }}
                                ></P>
                                <Arrowicon pagenationCount={pgtnDpRsrch} setPagenationCount={setPgtnDpRsrch} count={totalDpRschCount} paginationFun={fetchDpRschDesigns} type="deepresearch"></Arrowicon>
                              </Iconwraper>
                            )}
                          </Communiwraper>
                        </>
                      )}
                      <Keybox>
                        <Keyword dymTabItems={dymTabItems} setTabItem={setTabItem}></Keyword>
                      </Keybox>
                      <Deeppara>
                        {dymTabItems[0].isActive && <P text={props.t("designbyideapoketag")} color="#454545" fontSize="13px" fontWeight="400"></P>}
                        {dymTabItems[1].isActive && <P text={props.t("designbymetag")} color="#454545" fontSize="13px" fontWeight="400"></P>}
                        {dymTabItems[2].isActive && <P text={props.t("sharedwithmetag")} color="#454545" fontSize="13px" fontWeight="400"></P>}
                        {dymTabItems[3].isActive && <P text={props.t("deepresearchtag")} color="#454545" fontSize="13px" fontWeight="400"></P>}
                      </Deeppara>
                      {/* Design By Ideapoke Card Integration */}
                      {dymTabItems[0].isActive === true && (
                        <>
                          <Cardbox>
                            <AddNewRequest heading={props.t("createnewdesign")} subheading={subHeadingDBI} sesNetworkId={props.sesNetworkId} sesUserId={props.sesUserId} showSHeading={showSHeading}></AddNewRequest>
                            {!loaderDbi && dymTabItems[0].isActive === true && dymMenuItems[0].isActive === true && (
                              <>
                                <CardLoader></CardLoader>
                                <CardLoader></CardLoader>
                                <CardLoader></CardLoader>
                              </>
                            )}

                            {loaderDbi &&
                              dymTabItems[0].isActive === true &&
                              dgByIdeapokeData != null &&
                              dgByIdeapokeData.map((item, index) => {
                                return (
                                  <CommunityDesigns
                                    templateId={item.templateId}
                                    setCardName={setCardName}
                                    text={item.flag === "Y" || item.flag === "P" ? "Processing Request" : (item.flag === "A" && "In Progress") || ((item.flag === "C" || item.isPublished === "Y") && "Design is Ready")}
                                    name={item.designName}
                                    version={item.version}
                                    color={item.flag === "Y" || item.flag === "P" ? "#FF7624" : item.flag === "A" ? "#1F7793" : "#1F936E"}
                                    key={index}
                                    projTitle={item.reqTitle}
                                    templateName={item.name}
                                    setAddCard={setAddCard}
                                    setRemoveCard={setRemoveCard}
                                    image={item.imageUrl ? process.env.S3_IMAGE_PATH_URL + item.imageUrl : "null"}
                                    sesUserId={props.sesUserId}
                                    reportkey={item.reportkey}
                                    subText={item.templateName}
                                    item={item}
                                    type={"designbyideapoke"}
                                  ></CommunityDesigns>
                                );
                              })}
                          </Cardbox>
                        </>
                      )}

                      {/* Design By Me Card Integration */}
                      {dymTabItems[1].isActive === true && (
                        <Carddeep>
                          {!loaderDbm && dymTabItems[0].isActive === true && dymMenuItems[0].isActive === true && (
                            <>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                            </>
                          )}
                          {dgByMeData &&
                            dgByMeData != null &&
                            dgByMeData != "" &&
                            dgByMeData.map((item, index) => {
                              return (
                                <CommunityDesigns
                                  templateId={item.templateId}
                                  designFun={fetchDesignByMe}
                                  postedBy={props.userData.sesfirstname}
                                  setCardName={setCardName}
                                  name={item.designName}
                                  version={item.latestVersion}
                                  color={"#1F936E"}
                                  key={index}
                                  projTitle={item.designName}
                                  templateName={item.designName}
                                  setAddCard={setAddCard}
                                  setRemoveCard={setRemoveCard}
                                  image={item.imageUrl ? process.env.S3_IMAGE_PATH_URL + item.imageUrl : "null"}
                                  sesUserId={props.sesUserId}
                                  reportkey={item.reportkey}
                                  subText={item.templateName}
                                  type={"designbyme"}
                                  item={item}
                                ></CommunityDesigns>
                              );
                            })}
                        </Carddeep>
                      )}

                      {/* Shared with me not part of this release -- Commenting all the shared codes */}
                      {/* Shared With Me Card Integration */}
                      {dymTabItems[2].isActive === true && (
                        <Carddeep>
                          {!loaderSwm && dymTabItems[0].isActive === true && dymMenuItems[0].isActive === true && (
                            <>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                            </>
                          )}
                          {loaderSwm &&
                            dgSharedWtMeData &&
                            dgSharedWtMeData != null &&
                            dgSharedWtMeData != "" &&
                            dgSharedWtMeData.map((item, index) => {
                              return (
                                <CommunityDesigns
                                  templateId={item.templateId}
                                  setCardName={setCardName}
                                  name={item.designName}
                                  item={item}
                                  version={item.latestVersion}
                                  color={"#1F936E"}
                                  key={index}
                                  projTitle={item.designName}
                                  templateName={item.designName}
                                  setAddCard={setAddCard}
                                  setRemoveCard={setRemoveCard}
                                  image={item.imageUrl ? process.env.S3_IMAGE_PATH_URL + item.imageUrl : "null"}
                                  sesUserId={props.sesUserId}
                                  reportkey={item.reportkey}
                                  subText={item.templateName}
                                  type={"sharedwithme"}
                                ></CommunityDesigns>
                              );
                            })}
                        </Carddeep>
                      )}

                      {/* Deep Research Card Integration */}
                      {dymTabItems[3].isActive === true && (
                        <Carddeep>
                          {!loaderDr && dymMenuItems[0].isActive === true && dgByIdeapokeData == null && (
                            <>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                            </>
                          )}

                          {!loaderDr && dymMenuItems[1].isActive === true && dpRschData == null && (
                            <>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                              <CardLoader></CardLoader>
                            </>
                          )}
                          <AddNewRequest heading={props.t("postrequirement")} subheading={subHeadingDR} setShowRequestPopup={setShowRequestPopup} sesNetworkId={props.sesNetworkId} sesUserId={props.sesUserId} showSHeading={showSHeading} ></AddNewRequest>

                          {loaderDr &&
                            dpRschData &&
                            dpRschData.map((item, index) => {
                              let status, color;
                              if (item.flag == "P") {
                                status = "Pending";
                                color = "#1F7793";
                              } else if (item.flag == "A") {
                                status = "Active";
                                color = "#FF7624";
                              } else if (item.flag == "C") {
                                status = "Closed";
                                color = "#1F936E";
                              }

                              return (
                                <Deepresearch
                                  key={index}
                                  projTitle={item.reqTitle}
                                  imageUrl={item.imageUrl ? process.env.S3_IMAGE_PATH_URL + item.imageUrl : "null"}
                                  lastupdateddate={item.lastUpdatedDate}
                                  rkey={item.rkey}
                                  projectUrl={item.projectUrl}
                                  sesUserId={props.sesUserId}
                                  status={status}
                                  color={color}
                                ></Deepresearch>
                              );
                            })}
                        </Carddeep>
                      )}

                      {/* {dymTabItems[0].isActive === true && (dgByIdeapokeData == null || dgByIdeapokeData.length == 0) && loaderDbi && <ErrorData><Nodata text={props.t("designbyideapokemessage")}></Nodata><Nodata text={props.t("designbyideapokemessage1")}></Nodata></ErrorData>} */}
                      {dymTabItems[1].isActive === true && (dgByMeData == null || dgByMeData.length == 0) && loaderDbm && (
                        <ErrorData> 
                          <ErrorWrap>
                          <ErrorImg src={NoMessageImg} ></ErrorImg>
                          <Nodata text={props.t("designbymemessage1")}></Nodata>
                          <Nodata text={props.t("designbymemessage2")}></Nodata>
                          </ErrorWrap>
                        </ErrorData>
                      )}
                      {dymTabItems[2].isActive === true && (dgSharedWtMeData == null || dgSharedWtMeData.length == 0) && loaderSwm && (
                        <ErrorData>
                          <ErrorWrap>
                          <ErrorImg src={NoMessageImg} ></ErrorImg>
                          <Nodata text={props.t("sharedwithmemessage")}></Nodata>
                          </ErrorWrap>
                        </ErrorData>
                      )}
                      {/* {dymTabItems[2].isActive === true && (dpRschData == null || dpRschData.length == 0) && loaderDr && <DeepResearchNoData></DeepResearchNoData>} */}
                    </>
                  )}
                  {/* My designs code -- end */}

                  {/* Sample designs code -- start */}
                  {((dymMenuItems && dymMenuItems[2].isActive === true) || (dymMenuItems && dymMenuItems[0].isActive === true)) && (
                    <div
                      id="communitywrapper"
                      style={{
                        overflow: "hidden",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {dymMenuItems[0].isActive && (
                        <>
                          <Communiwraper>
                            <CommunityWrap>
                              <P text={props.t("communitydesign")} color="#000000" fontSize="24px" fontWeight="500" letterSpacing="-1.25px"></P>
                              {comDesignData && comDesignData != null && comDesignData != "" && <>{collapseCommunity ? <Img onClick={handleCommunityCollapse} src={UpArrow}></Img> : <Img onClick={handleCommunityCollapse} src={DownArrow}></Img>}</>}
                            </CommunityWrap>
                            {comDesignData != null && comDesignData != "" && totalComDsgnCount > 4 && !collapseCommunity && (
                              <Iconwraper>
                                <P
                                  text={props.t("viewall")}
                                  color="#2970b1"
                                  hoverColor="#15436d"
                                  fontSize="12px"
                                  fontWeight="400"
                                  cursor="pointer"
                                  onClick={() => {
                                    setMenuItem(2, "onclick of view all in sample designs");
                                  }}
                                ></P>

                                <Arrowicon pagenationCount={pgtnComDsgnCount} setPagenationCount={setPgtnComDsgnCount} count={totalComDsgnCount} paginationFun={fetchCommunityDesigns} type="communitydesign"></Arrowicon>
                              </Iconwraper>
                            )}
                          </Communiwraper>
                        </>
                      )}
                       {dymMenuItems[0].isActive === true && <P text={props.t("communitydesigntag")} color="#454545" fontSize="13px" fontWeight="400"></P>}
                      {dymMenuItems[2].isActive === true && (
                        <Collectionwraper>
                          <CollectionDropdown heading={props.t("template")} dropdowndata={recTemp} dymid="templatedpid" communityData={comDesignData} setFltrData={setFltrData} setFltrType={setFltrType} applyFilter={applyFilter}></CollectionDropdown>
                          <CollectionDropdown heading={props.t("opportunity")} dymid="opportunitydpid" communityData={comDesignData} setFltrData={setFltrData} setFltrType={setFltrType} applyFilter={applyFilter}></CollectionDropdown>
                          <CollectionDropdown heading={props.t("industry")} dymid="industrydpid" communityData={comDesignData} setFltrData={setFltrData} setFltrType={setFltrType} applyFilter={applyFilter}></CollectionDropdown>
                          <ResearchArea t={props.t} heading={props.t("researcharea")} dymid="rschareadpid" communityData={comDesignData} setFltrData={setFltrData} setFltrType={setFltrType} applyFilter={applyFilter}></ResearchArea>
                          {fltrData && (
                            <Clearwraper
                              onClick={() => {
                                setFltrData(null), setFltrType(null);
                              }}
                            >
                              <P text={props.t("clearfilter")} color="#FF7624" fontSize="16px" fontWeight="400" cursor="pointer"></P>
                            </Clearwraper>
                          )}
                        </Collectionwraper>
                      )}

                      <Cardbox id="communitysection">
                        {!loaderCd && dymMenuItems[0].isActive === true && (
                          <>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                          </>
                        )}

                        {!loaderCd && dymMenuItems[2].isActive === true && (
                          <>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                            <CardLoader></CardLoader>
                          </>
                        )}

                        {loaderCd &&
                          comDesignData &&
                          comDesignData.map((item, index) => {
                            return (
                              <>
                                {" "}
                                <CommunityDesigns
                                  designFun={fetchCommunityDesigns}
                                  isTemplate={false}
                                  templateId={item.templateId}
                                  designId={item.designId}
                                  setCardName={setCardName}
                                  key={index}
                                  name={item.designName}
                                  version={item.version}
                                  networkid={item.networkid}
                                  hover={true}
                                  projTitle={item.designName}
                                  templateName={item.name}
                                  setAddCard={setAddCard}
                                  setRemoveCard={setRemoveCard}
                                  image={item.image_url && item.image_url != "null" ? process.env.S3_IMAGE_PATH_URL + item.image_url : "null"}
                                  sesUserId={props.sesUserId}
                                  reportkey={item.reportkey}
                                  item={item}
                                  subText={item.masterTitle}
                                  type={"communitydesigns"}
                                ></CommunityDesigns>
                              </>
                            );
                          })}
                      </Cardbox>
                      {comDesignData && (comDesignData == null || comDesignData.length == 0) && (
                        <ErrorData>
                          <ErrorWrap>
                          <ErrorImg src={NoMessageImg} ></ErrorImg>
                          <Nodata text={props.t("communitysearch")}></Nodata>
                          </ErrorWrap>
                        </ErrorData>
                      )}
                    </div>
                  )}
                  {/* Sample designs code -- end */}
                </>
              )}

              {/* Followed designs code -- start */}
              {dymMenuItems && dymMenuItems[3].isActive === true && (
                <>
                  <Cardbox>
                    {followedDesignData &&
                      followedDesignData.map((item, index) => {
                        return (
                          <CommunityDesigns
                            key={index}
                            isTemplate={false}
                            templateId={item.templateid}
                            designId={item.id}
                            setCardName={setCardName}
                            name={item.designname}
                            hoverFollow={true}
                            networkid={item.networkid}
                            projTitle={item.designname}
                            setAddCard={setAddCard}
                            setRemoveCard={setRemoveCard}
                            image={item.imageurl ? process.env.S3_IMAGE_PATH_URL + item.imageurl : "null"}
                            sesUserId={props.sesUserId}
                            item={item}
                            type="followeddesign"
                          ></CommunityDesigns>
                        );
                      })}
                  </Cardbox>
                  {dymMenuItems[3].isActive === true && (followedDesignData == null || !followedDesignData.length > 0) && (
                    <ErrorData>
                      <ErrorWrap>
                      <ErrorImg src={NoMessageImg} ></ErrorImg>
                      <Nodata text={props.t("designfollowedmessage")}></Nodata>
                      </ErrorWrap>
                    </ErrorData>
                  )}
                </>
              )}
              {/* Followed designs code -- end */}
            </RightMenuList>
          }
        </Mainwraper>

        {showRequestPopup && <RequestIdeapoke sesUserId={props.sesUserId} sesNetworkId={props.sesNetworkId} closePopup={setShowRequestPopup} showBannerMessage={showBannerMessage} setShowRequestThankPopup={setShowRequestThankPopup} handleFun={fetchDpRschDesigns}></RequestIdeapoke>}
        {showRequestThankPopup && <RequestThanksPopup closePopup={setShowRequestThankPopup}></RequestThanksPopup>}
        {bannerMessage && messageType.Success && <Success message={bannerMessage}></Success>}
        {bannerMessage && messageType.Error && <ErrorMessage message={bannerMessage}></ErrorMessage>}
      </div>
    );
}
