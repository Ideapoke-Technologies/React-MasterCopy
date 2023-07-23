import React from "react";
import styled from "styled-components";
import { P } from "../CommonStyle";
import Button from "../Button/Button";
import NotifactionScreen from "./NotifactionScreen";
import ToggleSwitch from "./ToogleSwitch";
import Edit from "./images/edit.svg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AfterAlertSuccess1 from "./AfterAlertSuccess1";
import { saveRdtUserActions } from "../UserTracking";
import ProfileBlocker1 from "./ProfileBlocker1";

const Mainwraper = styled.div`
    margin-top: -80px;
  /* display: grid;
    grid-template-columns: 0.55fr 2fr; */
  // margin: -7px;
  // min-width:1025px;
`;
const Topwraper = styled.div`
  padding: 20px;
  background: rgb(251, 251, 251);
  /* margin-left: 304px; */
  border-radius: 10px;
  height: auto;
  position: relative;
  margin-bottom: 20px;
  /* width: 980px; */
  margin-top: 40px;
  border: 1px solid #E4E4E4;
`;
const Wrapper = styled.div`
  // display: grid;
`;
const Rightmenulist = styled.div`
  margin: 0px 20px 0 20px;
  // display: inline-block;
`;

const Proheading = styled.div`
  /* margin-left: 350px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;
const Buttonwraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
`;
const ProfileEdit = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 21px;
`;
const Contentwraper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 0.8fr;
`;
const Headingwraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 485px;
`;
const Buttonwraper1 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 46px;
`;
const Collobratetextborder = styled.div`
  width: 95%;
  display: flex;
  margin-bottom: 20px;
`;
const Textlinebox = styled.div`
  width: 100%;
  position: relative;
`;
const Togglebox = styled.div`
  margin-left: auto !important;
  padding-top: 5px;
`;
const Textlineborder = styled.div`
  border-top: 2px solid rgb(226, 226, 226);
  display: inline-block;
  width: 97%;
  position: absolute;
  top: 13px;
`;
const Textbg = styled.div`
  background: rgb(251, 251, 251);
  display: inline-block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: rgb(134, 134, 134);
  cursor: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  letter-spacing: -1.25px;
  position: relative;
  z-index: 1;
  padding-right: 15px;
`;
const Img2 = styled.img`
  width: 25px;
`;
const Innerwraper = styled.div``;
const Wraperwrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const LoopWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;
`;

const getMatchingNItemId = (accountArray, id) => {
  // Use find method instead of map to find the matching item
  const matchingItem = accountArray.find((item) => item.isdefault === id);
  if (matchingItem) {
    return matchingItem.nitemid;
  }
};

export default function NotifactionPreview(props) {
  const { t } = useTranslation();
  const [notifictiondata, setNotifictiondata] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [textmsg, setTextmsg] = useState("");
  const [toggleAll, setToggleAll] = useState(false);
  const [originalNotifictiondata, setOriginalNotifictiondata] = useState([]);
  const [pauseall, setPauseall] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  console.log("toggleAll :>> ", toggleAll);
  useEffect(() => {
    if (notifictiondata) {
      const allTogglesOff = notifictiondata.every(
        (item) =>
          item.accountSettingNotificationList &&
          Array.isArray(item.accountSettingNotificationList) &&
          item.accountSettingNotificationList.every((notificationItem) =>
            notificationItem.accountsettingnotificationitemlist.every(
              (settingItem) => settingItem.finalisdefault === 0
            )
          )
      );
      console.log("allTogglesOff:", allTogglesOff);
      setToggleAll(allTogglesOff);
    }
  }, [notifictiondata]);

  // Existing code...
  console.log("notifictiondata data-->", notifictiondata);
  console.log(toggleAll, "toggleAll");
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        process.env.APP_RDT_SERVICE_URL + "/rdt/user/fetchnotification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: props.userData.sesuserid,
            // userId: 9144,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching account data");
      }

      const data = await response.json();
      console.log("data :>> ", data);
      setNotifictiondata(data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  console.log(notifictiondata);

  const updateNotificationInfo = async () => {


    setUpdateLoader(true);

    saveRdtUserActions(
      props.userData.sesuserid,
      "notification settings",
      "onClick of Update in Notification Settings"
    );

    let inputData = notifictiondata;

    if (toggleAll) {
      inputData = inputData.map((item) => ({
        ...item,
        accountSettingNotificationList:
          item.accountSettingNotificationList &&
          item.accountSettingNotificationList.map((notificationItem) => ({
            ...notificationItem,
            accountsettingnotificationitemlist:
              notificationItem.accountsettingnotificationitemlist.map(
                (settingItem) => ({
                  ...settingItem,
                  finalisdefault: 0,
                })
              ),
          })),
      }));
    }
    const updatedObj = [];

    console.log("notifictiondata data-->", notifictiondata);

    inputData.map((item, index) => {
      console.log("index-->", index);
      const accountArray = item.accountSettingNotificationList;
      console.log("accountArray data-->", accountArray);
      accountArray.map((nestedItem, nestedindex) => {
        const accList = nestedItem.accountsettingnotificationitemlist;

        const objectNItemId = getMatchingNItemId(
          accList,
          accList[0].finalisdefault
        );

        const obj = {
          notificationid: accList[0].notificationid,
          nitemid: objectNItemId,
          networkid: props.userData.sesnetworkid,
          userid: props.userData.sesuserid,
        };

        updatedObj.push(obj);
      });
    });

    console.log("updatedObj-->", updatedObj);

    try {
      const response = await fetch(
        process.env.APP_RDT_SERVICE_URL + "/rdt/user/updatenotificationinfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedObj),
        }
      );

      const data = await response.json();

      if (data) {
        setShowSuccessAlert(true);
        setTextmsg("Notification settings has been updated successfully");
        setTimeout(() => {
          setShowButtons(false);
          setShowSuccessAlert(false);
        }, 3000);
        setNotifictiondata(updatedObj);
        // setShowButtons(false);
      } else {
        throw new Error("Error updating notification information");
      }
    } catch (error) {
      console.error("Error updating notification information:", error);
    }

    fetchUserData();
    setUpdateLoader(false);
  };

  const maintogglehandeler = () => {
    if (toggleAll == true) {
      setToggleAll(false)
    }
    if (toggleAll == false) {
      setToggleAll(true)
    }

  }

  console.log("notifictiondata :>> ", notifictiondata);
  const resetChanges = () => {
    saveRdtUserActions(
      props.userData.sesuserid,
      "notification settings",
      "onClick of Cancel in Notification Settings"
    );
    setNotifictiondata(originalNotifictiondata);
    fetchUserData();
    setShowButtons(false);
  };
  console.log(toggleAll);


  return (
    <div>
      <Mainwraper>
        <Wrapper>
          <Rightmenulist>
            <Proheading>
              <ProfileEdit>
                <P
                  text={t("emailNotification")}
                  color="#454545"
                  fontSize="30px"
                  fontWeight="600"
                  letterSpacing="-1px"
                ></P>
              </ProfileEdit>
            </Proheading>

            <Topwraper>
              <Proheading>
                <ProfileEdit>
                  <div style={{ marginBottom: "20px" }}>
                    <P
                      text={t("notifymebyemail")}
                      color="#FF7624"
                      fontSize="22px"
                      fontWeight="400"
                      letterSpacing="-1px"
                    ></P>
                  </div>
                </ProfileEdit>
                <div>
                  <Buttonwraper1>
                    <P
                      text={t("pauseallemailnotifications")}
                      color="#1A5C97"
                      fontSize="16px"
                      fontWeight="400"
                      letterSpacing="-1px"
                      onClick={() => setShowButtons(true)}
                    ></P>
                    <Togglebox onChange={() => setShowButtons(true)}>
                      <ToggleSwitch
                        id="pauseall"
                        toggleAll={toggleAll}
                        maintogglehandeler={maintogglehandeler}
                        initialChecked={toggleAll}
                        setPauseall={setPauseall}
                      // onChange={handleToggleAll}
                      />
                    </Togglebox>
                  </Buttonwraper1>
                </div>
              </Proheading>
              <LoopWrap>
                {notifictiondata &&
                  notifictiondata.map((item, mainindex) => {
                    return (
                      <Wraperwrap
                        style={mainindex == 2 ? { marginTop: "-130px" } : {}}
                        id={"section" + mainindex}
                      >
                        <Innerwraper>
                          <Headingwraper>
                            <NotifactionScreen
                              Text={item.modulename}
                              tcolor="#352960"
                            ></NotifactionScreen>
                          </Headingwraper>
                          {item.accountSettingNotificationList &&
                            item.accountSettingNotificationList.map(
                              (notificationItem, index) => {
                                return (
                                  <Collobratetextborder key={index}>
                                    <Textlinebox>
                                      <Textlineborder></Textlineborder>
                                      <Textbg>
                                        <P
                                          text={notificationItem.description}
                                          color="#868686"
                                          fontSize="13px"
                                          fontWeight="500"
                                          letterSpacing="-0.25px"
                                        ></P>
                                      </Textbg>
                                    </Textlinebox>

                                    {notificationItem && (
                                      <Togglebox
                                        key={index}
                                        onChange={() => setShowButtons(true)}
                                      >
                                        <ToggleSwitch
                                          setNotifictiondata={
                                            setNotifictiondata
                                          }
                                          notifictiondata={notifictiondata}
                                          notificationItem={notificationItem}
                                          initialChecked={
                                            notificationItem
                                              .accountsettingnotificationitemlist[0]
                                              .finalisdefault === 1
                                          }
                                          mainindex={mainindex}
                                          index={index}
                                        />
                                      </Togglebox>
                                    )}
                                  </Collobratetextborder>
                                );
                              }
                            )}
                        </Innerwraper>
                      </Wraperwrap>
                    );
                  })}
              </LoopWrap>
            </Topwraper>

            {showButtons && (
              <Buttonwraper>
                <Button
                  text="Cancel"
                  variant="outlineOrange"
                  width="125px"
                  height="auto"
                  font-size="16px"
                  font-weight="600"
                  onClick={resetChanges}
                ></Button>
                {toggleAll ? (
                  <Button
                    text="Update"
                    variant="solidOrange"
                    width="135px"
                    height="auto"
                    onClick={
                      updateNotificationInfo
                    }
                  ></Button>
                ) : (
                  <Button
                    text="Update"
                    variant="solidOrange"
                    width="135px"
                    height="auto"
                    onClick={updateNotificationInfo}
                  ></Button>
                )}
                {showSuccessAlert && <AfterAlertSuccess1 text={textmsg} />}
              </Buttonwraper>
            )}
          </Rightmenulist>
        </Wrapper>
      </Mainwraper>

      <ProfileBlocker1 updateLoader={updateLoader}></ProfileBlocker1>
    </div>
  );
}


// if (!Array.isArray(notifictiondata)) {(line 229)
    //   console.error("notifictiondata is not an array");
    //   return;
    // }

// const allTogglesOff = notifictiondata.every((item) =>
//   item.accountSettingNotificationList.every((notificationItem) =>
//     notificationItem.accountsettingnotificationitemlist.every(
//       (settingItem) => settingItem.finalisdefault === 0
//     )
//   )
// );
// setPauseall(allTogglesOff);
//  resetChanges();

// const resetChanges = () => {
//   setNotifictiondata(originalNotifictiondata);
// };
//  resetChanges();

// useEffect(() => {
//   const val = handleMainToggle(notifictiondata);
//   setPauseall(val);
// }, [notifictiondata]);

// useEffect(() => {
//   // Check the finalisdefault values in notifictiondata
//   const allTogglesOff = notifictiondata.every((item) =>
//     item.accountSettingNotificationList.every((notificationItem) =>
//       notificationItem.accountsettingnotificationitemlist.every(
//         (settingItem) => settingItem.finalisdefault === 0
//       )
//     )
//   );
//   setPauseall(allTogglesOff);
// }, [notifictiondata])

// const getMatchingNItemId = (accountArray, id) => {
//   console.log("getMatchingNItemId-->", accountArray, id);
//   accountArray.map((item, index) => {
//     console.log("getMatchingNItemId item-->", item);
//     if (item.isdefault == id) {
//       console.log("enter if-->", item.nitemid);
//       return item.nitemid;
//     }
//   });
// };
 // const handleToggleAll = () => {
  //   // setToggleAll((prevToggleAll) => !prevToggleAll);
  //   setNotifictiondata((prevNotifictiondata) =>
  //     prevNotifictiondata.map((item) => ({
  //       ...item,
  //       accountSettingNotificationList:
  //         item.accountSettingNotificationList &&
  //         item.accountSettingNotificationList.map((notificationItem) => ({
  //           ...notificationItem,
  //           accountsettingnotificationitemlist:
  //             notificationItem.accountsettingnotificationitemlist.map(
  //               (settingItem) => ({
  //                 ...settingItem,
  //                 finalisdefault: 0,
  //               })
  //             ),
  //         })),
  //     }))
  //   );
  //   // setToggleAll(!toggleAll);
  //   setShowButtons(true);
  // };
