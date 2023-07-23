import React, { useState, useEffect, Profiler } from "react";
import styled from "styled-components";
import { P } from "../CommonStyle";
import Button from "../Button/Button";
import AccountSettings from "./AccountSettings";
import Edit from "./images/edit.svg";
import Arrow from "./images/arrow-icon.svg";
// import IPDropdown from "./IPDropdown";
import { useTranslation } from "react-i18next";
import AfterAlertSuccess1 from "./AfterAlertSuccess1";
import { saveRdtUserActions } from "../UserTracking";

const Mainwrapper = styled.div`
  min-width: 1025px;
`;
const ProfileEdit = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-left: 5px;
  margin-top: -63px;
`;
const Img2 = styled.img`
  width: 25px;
  cursor: pointer;
`;
const Startwraper = styled.div`
  display: flex;
  margin-left: 40px;
  flex-direction: row;
  gap: 70px;
`;
const Start = styled.p`
  position: relative;
  right: 322px;
  top: -11px;
  color: #ff4141;
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  background: #fbfbfb;
  width: 98%;
  padding: 10px 0 25px 0;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  margin-top: 30px;
`;
const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;
const SVG = styled.div`
  width: 50px;
`;
const Buttonwraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 20px 0 20px 0px;
`;
const Img = styled.img`
  position: relative;
  right: 95px;
  top: 10px;
  cursor: pointer;
`;
const Textwraper = styled.div`
  margin: 10px 0px 0 35px;
`;
// const Accountchildwraper = styled.div`
// float:left;
// width: 345px;
// `
export default function AccountPreview(props) {
  const { t } = useTranslation();
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [accountData, setAccountData] = useState();
  const [currentValue, setCurrentValue] = useState(null);
  const [initialAccountData, setInitialAccountData] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [textmsg, setTextmsg] = useState("");
  // const [showNoChangesMessage, setShowNoChangesMessage] = useState(false);
  const QUESTIONS = [
    t("wheredidyoumeetyourspouse"),
    t("whatwasthenameofyourfirstschool"),
    t("whowasyourchildhoodhero"),
    t("whatisyourfavoritepastime"),
    t("whatisyourfavoritesportsteam"),
    t("whatisyourfathersmiddlename"),
    t("whatwasyourhighschoolmascot"),
    t("whatmakewasyourfirstcarorbike"),
    t("whatisyourpetsname"),
  ];
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        process.env.APP_RDT_SERVICE_URL + "/rdt/user/fetchuserlogindetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: props.userData.sesuserid,
            // userId: 9117,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching account data");
      }

      const data = await response.json();
      setAccountData(data[0]);
      setInitialAccountData(data[0]);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleOldPassword = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCancelClick = () => {
    saveRdtUserActions(
      props.userData.sesuserid,
      "account settings",
      "onClick of Cancel in Account Settings"
    );
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    setAccountData(initialAccountData);
    setShowPlaceholder(false);
  };

  const handleupdateClick = async () => {
    saveRdtUserActions(
      props.userData.sesuserid,
      "account settings",
      "onClick of Upadte in Account Settings"
    );

    // const hasChanges =
    //   JSON.stringify(accountData.password) !==
    //   JSON.stringify(initialAccountData.password);

    // if (
    //   !hasChanges &&
    //   (oldPassword === "" || newPassword === "" || confirmPassword === "")
    // ) {
    //   // setShowNoChangesMessage(true);
    //   console.log("No changes in account data");
    //   return;
    // }

    const updateObj = {
      userId: accountData.userId,
      emailId: accountData.emailId,
      strnewpassword: confirmPassword,
      strconfpassword: newPassword,
      stroldpassword: oldPassword,
      securityQuestion: accountData.securityQuestion,
      securityAnswer: accountData.securityAnswer,
      userRole: accountData.userRole,
    };

    try {
      const response = await fetch(
        process.env.APP_RDT_SERVICE_URL + "/rdt/user/updateuserlogindetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        }
      );

      const msg = await response.json();
      setError(msg.status);

      if (msg.status === "New Data Updated") {
        setShowPlaceholder(false);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");

        setShowSuccessAlert(true);

        setTextmsg("Accounts Data  has been updated successfully");

        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      }

      if (!response.ok) {
        throw new Error("Error updating account data");
      }

      const updatedData = await response.json();
      setAccountData(updatedData);
      setInitialAccountData(updatedData);
      setShowPlaceholder(false);
    } catch (error) {
      console.error("Error updating account data:", error);
    }

    fetchUserData();
    // setOldPassword("");
    // setNewPassword("");
    // setConfirmPassword("");
  };

  const handlepass = (event) => {
    const obj = {
      ...accountData,
      ["password"]: event.target.value,
    };
    setAccountData(obj);
  };
  const handelSecurity = (event) => {
    const obj = {
      ...accountData,
      ["securityQuestion"]: event,
    };
    setAccountData(obj);
  };
  const handelAns = (event) => {
    const capitalizedAnswer =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    const obj = {
      ...accountData,
      securityAnswer: capitalizedAnswer,
    };
    console.log(capitalizedAnswer, "capitalizedAnswer");
    setAccountData(obj);
  };
  const handelrole = (event) => {
    const obj = {
      ...accountData,
      ["userRole"]: event.target.value,
    };
    setAccountData(obj);
  };

  console.log("userData-->", props.userData);

  return (
    <div>
      <Mainwrapper>
        <ProfileEdit>
          <P
            text={t("AccountSettings")}
            color="#454545"
            fontSize="30px"
            fontWeight="600"
            letterSpacing="-1px"
          />

          {!showPlaceholder && (
            <img
              onClick={() => {
                setShowPlaceholder(true);
                saveRdtUserActions(
                  props.userData.sesuserid,
                  "account settings",
                  "onClick of Edit in Account Settings"
                );
              }}
              src={Edit}
              style={{ width: "25px", cursor: "pointer" }}
            />
          )}
        </ProfileEdit>
        <MainWrap>

          <Textwraper>
            <P
              text={t("Basic")}
              color="#FF7624"
              fontSize="22px"
              fontWeight="400"
              letterSpacing="-1px"
            />
          </Textwraper>


          <ProfileWrap>
            <Startwraper>
              {accountData && (
                <>
                  <AccountSettings
                    Text={t("EmailId")}
                    tcolor="#352960"
                    Subtext={accountData["emailId"]}
                    stcolor="#7E7E7E"
                    showPlaceholder={showPlaceholder}
                  />

                  <AccountSettings
                    Text={t("SecurityQuestion")}
                    tcolor="#352960"
                    Subtext={
                      accountData && accountData["securityQuestion"] == "null"
                        ? "Add a security question"
                        : accountData["securityQuestion"]
                    }
                    onChange={handelSecurity}
                    stcolor="#7E7E7E"
                    showPlaceholder={showPlaceholder}
                    value={currentValue}
                    options={QUESTIONS}
                  />
                </>
              )}
            </Startwraper>
          </ProfileWrap>

          <ProfileWrap>
            <Startwraper>
              {accountData && (
                <>
                  <AccountSettings
                    Text={t("password")}
                    type="password"
                    error={error}
                    oldPassword={oldPassword}
                    newPassword={newPassword}
                    confirmPassword={confirmPassword}
                    handleOldPassword={handleOldPassword}
                    handleNewPassword={handleNewPassword}
                    handleConfirmPassword={handleConfirmPassword}
                    tcolor="#352960"
                    Subtext={accountData["password"]}
                    onChange={handlepass}
                    stcolor="#7E7E7E"
                    showPlaceholder={showPlaceholder}
                  />

                  <AccountSettings
                    Text={t("Answer")}
                    tcolor="#352960"
                    Subtext={
                      accountData && accountData["securityAnswer"] == "null"
                        ? "Type Your Answer"
                        : accountData["securityAnswer"]
                    }
                    onChange={handelAns}
                    stcolor="#7E7E7E"
                    showPlaceholder={showPlaceholder}
                  />
                </>
              )}
            </Startwraper>
          </ProfileWrap>
          {!showPlaceholder && (
            <ProfileWrap>
              <Startwraper>
                {accountData && (
                  <AccountSettings
                    Text={t("AccessRole")}
                    tcolor="#352960"
                    Subtext={
                      accountData && accountData["userRole"] == "null"
                        ? "Member"
                        : accountData["userRole"]
                    }
                    // Subtext={accountData["userRole"]}
                    onChange={handelrole}
                    stcolor="#7E7E7E"
                  />
                )}
              </Startwraper>
            </ProfileWrap>
          )}
        </MainWrap>
        {showPlaceholder && (
          <Buttonwraper>
            <Button
              onClick={handleCancelClick}
              text={t("Cancel")}
              variant="outlineOrange"
              width="125px"
              height="auto"
              fontSize="16px"
              fontWeight="600"
            />
            <Button
              onClick={handleupdateClick}
              text={t("Update")}
              variant="solidOrange"
              width="135px"
              height="auto"
            />
          </Buttonwraper>
        )}
        {showSuccessAlert && <AfterAlertSuccess1 text={textmsg} />}
      </Mainwrapper>
    </div>
  );
}
