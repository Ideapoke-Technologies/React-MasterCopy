import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import styled from "styled-components";
import "./Notification.css";
import PopupBg from "./images/bg-img.png";
import Close from "./images/close.svg";
import ToggleSwitch from "./ToogleSwitch";
import FilerIcon from "./images/filter.svg";
import NotificationTab from "./NotificationTab"
import NotificationProgress from "./NotificationProgress";
import AllReadNotification from "./AllReadNotification";
import NoNotification from "./NoNotification";

const Slidewraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.14fr;
  padding-left: 34px;
  height: 100%;
  z-index: 2;
  overflow-y: auto;
`;
const RightImg = styled.div`
  background-image: url(${PopupBg});
  height: 100%;
`;
const CloseSlide = styled.img`
  position: absolute;
  top: 12px;
  right: 20px;
  cursor: pointer;
`;
const SlideHeader = styled.div`
  margin: 26px 40px 42px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const NotifyTxt = styled.p`
  font-size: 28px;
  font-family: "Poppins";
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -1.25px;
  color: #2970b1;
  margin: 0;
`;
const RightFilter = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`;
const SwitchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
const Txt = styled.p`
  margin: 0;
  color: #000;
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  line-height: 18.5px;
`;
const Img = styled.img``;

const NotifyList = styled.div`
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 18px;
`;
const NotifyContent = styled.div`
  border-bottom: 1px solid #efefef;
  margin-top: 28px;
  position: relative;
`;
const NotifyMsg = styled.p`
  margin: 0;
  color: #000;
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  line-height: 18.5px;
  margin-top: 10px;
  margin-bottom: 25px;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;
const ViewBtn = styled.button`
  border-radius: 4px;
  background-color: #2970b1;
  padding: 7px 12px;
  color: #fff;
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 22px;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #15436d;
  }
`;
const UnreadDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #2d71d7;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: -25px;
`;
const FilterDropBox = styled.div`
  border-radius: 8px;
  box-shadow: 0px 30px 60px 0px rgba(69, 69, 69, 0.25);
  border: 1px solid #bddfff;
  padding: 8px 0px;
  width: 192px;
  background-color: #f3f3f3;
  z-index: 1;
  position: absolute;
  right: 0px;
  top: 30px;
`;
const FilterTxt = styled.div`
  color: #454545;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 400;
  line-height: 17.5px;
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background-color: #ffece2;
  }
`;

export default function NotificationDashSlider(props) {

  const [isDisplay, setIsDisplay] = useState("false");
  const [categoryData, setCategoryData] = useState(null);

  const toggle = () => {
    setIsDisplay(!isDisplay);
  };

  const [state, setState] = useState({
    isPaneOpen: false,
  });

  const handleCloseSlider = () => {
    setState({ isPaneOpen: false });
    props.setShowDropdown({
      notification: false
    });
    document.body.style.overflowY = "visible";
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setState({ isPaneOpen: true });
    fetchCategoryList();
  }, []);

  const fetchCategoryList = async () => {

    const dataObj = {
      "networkid": "NET1001003",
      "userid": 9793
    };
    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/getusernotifcationcategory"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj)
    });
    const data = await response.json();
    console.log('fetchCategoryList data : ', data);
    setCategoryData(data);
  };

  const handlescroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      props.setNStartRec(props.nStartRec + 10);
    }
  }

  const handleFilter = (category) => {
    setIsDisplay(!isDisplay);
    props.setNCategory(category);
  }

  return (
    <div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        onRequestClose={() => {
          handleCloseSlider();
        }}
        hideHeader={true}
      >{console.log('props.notificationData : ', props.notificationData)}
        <Slidewraper onScrollCapture={(e) => handlescroll(e)}>
          <div>
            <SlideHeader>
              <NotifyTxt>Notifications</NotifyTxt>
              {props.notificationData && props.notificationData.length > 0 && <RightFilter>
                <div>
                  <SwitchWrap>
                    <Txt>Only show unread</Txt>
                    <ToggleSwitch setNReadStatus={props.setNReadStatus} ></ToggleSwitch>
                  </SwitchWrap>
                </div>
                <div>
                  <SwitchWrap onClick={() => toggle()}>
                    <Txt>Filter</Txt>
                    <Img src={FilerIcon} />
                  </SwitchWrap>
                  <FilterDropBox
                    style={{ display: isDisplay ? "none" : "block" }}
                  >
                    <FilterTxt onClick={() => handleFilter('ALL')}>All</FilterTxt>
                    {categoryData && categoryData.map((item, index) => {

                      var value = "";

                      if (item.category == "SHARE") {
                        value = "Share";
                      } else if (item.category == "PLATFORMUPDATES") {
                        value = "Platform Updates";
                      } else if (item.category == "FOLLOWEDDESIGNS") {
                        value = "Followed Designs";
                      } else if (item.category == "DESIGNUPDATES") {
                        value = "Design Updates";
                      } else if (item.category == "DESIGNREQUEST") {
                        value = "Design Request";
                      } else if (item.category == "UPGRADE") {
                        value = "Upgrade";
                      } else if (item.category == "COMMENT") {
                        value = "Comment";
                      }

                      return (
                        <FilterTxt key={index} onClick={() => handleFilter(item.category)}>{value}</FilterTxt>
                      )
                    }
                    )}
                  </FilterDropBox>
                </div>
              </RightFilter>}
            </SlideHeader>

            {props.notificationData && props.notificationData.length > 0 ? <><NotificationTab sesUserId={props.sesUserId} setNDesignType={props.setNDesignType}></NotificationTab>

              <NotifyList>
                {props.notificationData && props.notificationData.map((item, index) => {

                  var value = "";
                  var color = "";

                  if (item.category == "SHARE") {
                    value = "Share";
                    color = "#dbdbdb";
                  } else if (item.category == "PLATFORMUPDATES") {
                    value = "Platform Updates";
                    color = "#BFC9FF";
                  } else if (item.category == "FOLLOWEDDESIGNS") {
                    value = "Followed Designs";
                    color = "#ffc09b";
                  } else if (item.category == "DESIGNUPDATES") {
                    value = "Design Updates";
                    color = "#c5e1fa";
                  } else if (item.category == "DESIGNREQUEST") {
                    value = "Design Request";
                    color = "#FBC7BD";
                  } else if (item.category == "UPGRADE") {
                    value = "Upgrade";
                    color = "#FFD480";
                  } else if (item.category == "COMMENT") {
                    value = "Comment";
                    color = "#DDF8DE";
                  }

                  return (
                    <NotifyContent key={index}>
                      <NotificationProgress
                        bgTag={color} //progress
                        width="115px"
                        tag={value}
                        date={item.posteddate}
                        time={item.postedtime}
                      ></NotificationProgress>
                      <NotifyMsg>
                        {item.messagecontent}
                      </NotifyMsg>
                      {item.readstatus == 0 && <UnreadDot></UnreadDot>}
                      <BtnWrap>
                        <ViewBtn>View Design</ViewBtn>
                      </BtnWrap>
                    </NotifyContent >
                  )
                }
                )}
              </NotifyList></> :
              (props.nReadStatus == "ALL" ?
                <NoNotification></NoNotification>
                :
                <AllReadNotification></AllReadNotification>
              )
            }
          </div>
          <div>
            <RightImg></RightImg>
            <CloseSlide src={Close} onClick={handleCloseSlider} />
          </div>
        </Slidewraper>
      </SlidingPane>
    </div>
  );
}
