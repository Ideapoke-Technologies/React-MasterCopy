import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { P } from '../CommonStyle'
import SearchBox from '../Searchbar/SearchBox'
import LanguageDrpdwn from '../LanguageDropdown/LanguageDrpdwn'
import Question from './images/rd-question.svg'
import Ballicon from './images/rd-ball.svg'
import { saveRdtUserActions } from "../UserTracking"
import Hondadropdown from '../Hondadropdown/Hondadropdown'
import NotificationDashSlider from '../NotificationSlider/NotificationDashSlider'
import HumbergarIcon from './images/humbergar-icon.svg'
import { useTranslation } from "react-i18next";
import HelpPopup from "../HelpCenter/HelpPopup.js";

const TopWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 14px;
    align-items: center;
    margin-top: 20px;
    height: 66px;
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
const Wrapericon = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    position: absolute;
    align-items: center;
    white-space: nowrap;
    right: 8px;
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
const UserSectionWraper = styled.div`
    /* position: absolute;
    margin-top: 28px;
    right: 18px; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 20px;
    /* z-index: 1; */
    @media  screen and (max-width: 1280px){
        margin-top: 40px;
    }
`;
const Img = styled.img`
    padding: 5px;
    :hover{
        padding: 5px;
        background-color: rgb(239 248 255);
        border-radius: 20px;
    }
`
const NotifiyWrapper = styled.div`
    position: relative;
`
const Notify = styled.span`
    border-radius: 50%;
    width: 7px;
    position: absolute;
    aspect-ratio: 1 / 1;
    background-color: #2970B1;
    top: 9px;
    right: 2px;
    height: 7px;
    font-family: 'Poppins';
    justify-content: center;
    padding: 2px;
`;
const CountWrapper = styled.div`
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 8px;
`
const Text = styled.p`
    width: 38px;
    height: 38px;
    background-color: #2970B1;
    font-family: 'poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    border-radius: 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DropdownSection = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
`
const ProfileWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 235px;
`

export default function HeaderDashboard(props) {

    const { i18n } = useTranslation();
    
    //Profile Code
    const [showDropdown, setShowDropdown] = useState({
        profile: false,
        notification: false
    });
    const [notificationData, setNotificationData] = useState(null);
    const [nStartRec, setNStartRec] = useState(0);
    const [nDesignType, setNDesignType] = useState("ALL");
    const [nReadStatus, setNReadStatus] = useState("ALL");
    const [nCategory, setNCategory] = useState("ALL");
    const [dymMenuItems, setDymMenuItems] = useState(null);

    //Close popup on click of outside
    const dropdownRef = useRef(null);

    const [nCount, setNCount] = useState(0);
    const [searchData, setSearchData] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const showProfileDropdown = (param) => {

        setShowDropdown({
            [param]: true
        });

        if (param == "notification") {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of notication icon', '');
        } else {
            saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of profile dropdown', '');
        }
    }

    //Search Code
    const getSearchedTemplates = (query) => {
        setSearchInput(query)
    }

    useEffect(() => {
        updateHeading();
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown({
                    profile: false,
                    notification: false
                });
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [props.menuIndex,dymMenuItems]);


    //Notification Code Start

    const fetchNotification = async () => {

        const dataObj = {
            "networkid": props.userData.sesnet,
            "userid": props.sesUserId,
            "startrec": nStartRec,
            "endrec": 10,
            "category": nCategory,
            "readstatus": nReadStatus,
            "designtype": nDesignType,
            "modulename": "DesignTool"
        };
        console.log('fetchNotification dataObj : ', dataObj);

        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/getusernotificationdetails"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObj)
        });
        const data = await response.json();
        console.log('fetchNotification data : ', data);

    //     setNotificationData([{
    //         "messagecontent": "Your colleague Manjunath C has shared the collection, <&COLLECTIONNAME&> with you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21445,
    //         "posteddate": "Jan 23, 2023",
    //         "postedtime": "@ 11:22 PM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21444,
    //         "posteddate": "Jan 23, 2023",
    //         "postedtime": "@ 08:04 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21443,
    //         "posteddate": "Jan 23, 2023",
    //         "postedtime": "@ 08:04 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21442,
    //         "posteddate": "Jan 23, 2023",
    //         "postedtime": "@ 08:04 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21440,
    //         "posteddate": "Jan 23, 2023",
    //         "postedtime": "@ 07:53 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21448,
    //         "posteddate": "Jan 23, 2023",
    //         "postedtime": "@ 01:07 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21394,
    //         "posteddate": "Jan 20, 2023",
    //         "postedtime": "@ 11:12 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21393,
    //         "posteddate": "Jan 20, 2023",
    //         "postedtime": "@ 10:49 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21392,
    //         "posteddate": "Jan 20, 2023",
    //         "postedtime": "@ 10:46 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21390,
    //         "posteddate": "Jan 20, 2023",
    //         "postedtime": "@ 10:19 AM"
    //     },
    //     {
    //         "messagecontent": "Your colleague Manjunath C has forwarded a <&CONTENTTYPE&> - <&CONTENTTITLE&> to you.",
    //         "redirectionurl": "",
    //         "buttontext": "null",
    //         "category": "null",
    //         "designtype": "null",
    //         "readstatus": 1,
    //         "notifierid": 10912,
    //         "objectid": 21388,
    //         "posteddate": "Jan 20, 2023",
    //         "postedtime": "@ 10:11 AM"
    //     }
    // ]);
        setNotificationData(data);
    };

    //Notification Code End

    //get notification count
    const getNotificationCount = async () => {

        var dataObj = {
            "networkid": "NET1001003",
            "userid": "9760"
        }
        console.log("getNotificationCount dataObj : ", dataObj)
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/getuserunreadnotificationcount";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObj)
            });
            const data = await response.json();
            console.log("getNotificationCount response : ", data);
            setNCount(data[0].unreadcount);
        } catch (error) {
            console.log("Error in getNotificationCount");
        }
    };

    useEffect(() => {
        fetchNotification();
        getNotificationCount();
    }, [nStartRec, nDesignType, nReadStatus, nCategory]);


    const createTemplate = () => {
        saveRdtUserActions(props.sesUserId, 'dashboard', 'onclick of create template', '');
        const url = process.env.RDT_URL + "?type=" + window.btoa("templatebuilder");
        window.location.href = url;
    }

    useEffect(() => {
        setDymMenuItems([
            {
                name: props.t("alldesigns2"),
                // tag: props.t("alldesigntag"),
                tag: '',
                isActive: true
            },
            {
                name: props.t("mydesign"),
                tag: '',
                isActive: false
            },
            {
                name: props.t("communitydesign"),
                tag: props.t("communitydesigntag"),
                isActive: false
            },
            {
                name: props.t("followeddesign"),
                tag: props.t("followeddesigntag"),
                isActive: false
            },
            {
                name: props.t("alldesigns2"),
                tag: '',
                isActive: false

            },
            {
                name: props.t("menuprofile"),
                isActive: false

            },
            {
                name: props.t("menuaccount"),
                isActive: false

            },
            {
                name: props.t("menunotification"),
                isActive: false

            },
            {
                name: props.t("menucollaborators"),
                isActive: false

            },
            {
                name: props.t("menuactivities"),
                isActive: false

            },
        ]);
    }, [i18n.language]);

    const [headerTitle, setHeaderTitle] = useState("");
    const [headerTag, setHeaderTag] = useState("");

    const updateHeading = () => {
      
        if(dymMenuItems !=null){
            if(props.menuIndex < 5){
                if(props.menuIndex == -1 && window.location.href.includes('dashboard')){
                    setHeaderTitle(dymMenuItems[0].name); 
                    setHeaderTag(dymMenuItems[0].tag);
                }else if(props.menuIndex != -1){
                    setHeaderTitle(dymMenuItems[props.menuIndex].name);
                    setHeaderTag(dymMenuItems[props.menuIndex].tag);
                    // alert(dymMenuItems[props.menuIndex].name);
                }
            }
        }
    }

    const openUrl = (link, param) => {
        saveRdtUserActions(props.sesUserId, 'dashboard', param, '');
        window.open(process.env.SERVER_NAME_URL + link, "_self");
    }

    const [showHelpPopup,setShowHelpPopup] = useState(false);


    const ShowHelpPopup = ()=>{
        setShowHelpPopup(true);
    };

    return (
        <div>
            <span onClick={() => { toggleLeftMenu() }}><Img2 src={HumbergarIcon} ></Img2></span>

            <TopWrap>

                <DesignWrap>
                    {headerTitle && <P text={headerTitle} color="#454545" fontSize="24px" fontWeight="600" letterSpacing="-1px" width="320px"></P>}
                    {headerTag && <P text={headerTag} color="#454545" fontSize="13px" fontWeight="400"></P>}
                </DesignWrap>

                <Wrapericon >
                    {props.userData.sesusertype == "INTERNAL" && window.location.href.includes('/dashboard') && <DesignButton onClick={createTemplate}>Create Template</DesignButton>}
                    {/* {props.homePage && <SearchBox setSearchData={setSearchData} sesUserId={props.sesUserId} placeholder={props.t("searchplaceholder")} getSearchedTemplates={getSearchedTemplates}></SearchBox>} */}
                    {window.location.href.includes('/dashboard') && <SearchBox setSearchData={setSearchData} sesUserId={props.sesUserId} placeholder={props.t("searchplaceholder")} getSearchedTemplates={getSearchedTemplates}></SearchBox>}
                    <UserSectionWraper>
                        {/* <LanguageDrpdwn sesUserId={props.sesUserId} sesUserLang={props.userData.userpreflang}></LanguageDrpdwn> */}
                        <Img src={Question} onClick={ShowHelpPopup} style={{ cursor: "pointer", width: "22px", marginTop: "-4px" }}></Img>
                        <NotifiyWrapper>
                            <Img src={Ballicon} onClick={() => showProfileDropdown("notification")} style={{ cursor: "pointer", marginTop: "4px", width: '18px' }}></Img>
                            {notificationData && nCount > 0 && <Notify><CountWrapper>{nCount}</CountWrapper></Notify>}

                        </NotifiyWrapper>
                        <div style={{ position: "relative" }}>
                            <Text onClick={() => showProfileDropdown("profile")} style={{ cursor: "pointer" }}>{props.userData.sesuserinitials}</Text>
                            <DropdownSection>
                                {showDropdown.profile &&
                                    <ProfileWrapper ref={dropdownRef}>
                                        <Hondadropdown
                                            setShowDropdown={setShowDropdown}
                                            // setShowSection={setShowSection}
                                            userId={props.sesUserId}
                                            t={props.t}
                                        // setMenuItem={setMenuItem}
                                        ></Hondadropdown>
                                    </ProfileWrapper>
                                }
                            </DropdownSection>
                        </div>
                    </UserSectionWraper>

                </Wrapericon>
                {showDropdown.notification && <NotificationDashSlider
                    setShowDropdown={setShowDropdown}
                    setNDesignType={setNDesignType}
                    setNReadStatus={setNReadStatus}
                    setNCategory={setNCategory}
                    nReadStatus={nReadStatus}
                    notificationData={notificationData} sesUserId={props.sesUserId} setNStartRec={setNStartRec} nStartRec={nStartRec} ></NotificationDashSlider>}
            </TopWrap>

            {showHelpPopup &&<HelpPopup showHelpPopup={showHelpPopup} setShowHelpPopup={setShowHelpPopup} userData={props.userData} ></HelpPopup>}
        </div>
    )
}
