import React, { useState } from "react";
import styled from "styled-components";
import { saveRdtUserActions } from "../UserTracking";

const Dropwraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 0px;
  position: relative;
  width: 220px;
  height: auto;
  background: #fafafa;
  border: 1px solid #bddfff;
  box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.15);
  border-radius: 8px;
  display: inline-block;
  bottom: 165px;
  z-index: 10;
  right: 12px;
`;
const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #454545;
  padding: 10px;
  margin: 0px;
  cursor: pointer;

  :hover {
    background-color: #e3f2ff;
  }
`;
const Text2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ff7624;
  padding: 10px;
  margin: 0px;
  cursor: pointer;
  :hover {
    background-color: #e3f2ff;
  }
`;
const objectKeyLookup = {
  Profile: "profile",
  "Account Settings": "account",
  "Notification Settings": "notification",
  Collaborators: "collaborators",
  Activities: "activities",
  プロフィール: "profile",
  アカウント設定: "account",
  通知設定: "notification",
  協力者: "collaborators",
  活動内容: "activities",
};

export default function Hondadropdown(props) {
  console.log("props----------->", props);

  const changeView = (val, setShowSection, setShowDropdown) => {
    const objKey = objectKeyLookup[val];
    setShowSection((prev) => {
      return Object.keys(prev).reduce((updatedShowSection, key) => {
        updatedShowSection[key] = key === objKey;
        return updatedShowSection;
      }, {});
    });
    setShowDropdown((prev) => {
      return {
        ...prev,
        profile: false,
      };
    });
  };

  const dropOptions = [
    props.t("profiledropdown"),
    props.t("accountdropdown"),
    props.t("notificationdropdown"),
    props.t("collaboratorsdropdowm"),
    props.t("activitiesdropdown"),
  ];
  const [navigationLinks, setNavigationLinks] = useState({
    Profile: process.env.SERVER_NAME_URL + "/design/profile.html",
    "Account Settings": process.env.SERVER_NAME_URL + "/design/account.html",
    "Notification Settings":
      process.env.SERVER_NAME_URL + "/design/notification.html",
    Collaborators: process.env.SERVER_NAME_URL + "/design/collaborators.html",
    Activities: process.env.SERVER_NAME_URL + "/design/activities.html",
    logout: process.env.SERVER_NAME_URL + "/signout.html",
    プロフィール: process.env.SERVER_NAME_URL + "/design/profile.html",
    アカウント設定: process.env.SERVER_NAME_URL + "/design/account.html",
    通知設定: process.env.SERVER_NAME_URL + "/design/notification.html",
    協力者: process.env.SERVER_NAME_URL + "/design/collaborators.html",
    活動内容: process.env.SERVER_NAME_URL + "/design/activities.html",
    logout: process.env.SERVER_NAME_URL + "/signout.html",
  });

  const profileNavigation = (param, action) => {
    if (action) {
      saveRdtUserActions(
        props.sesUserId,
        "dashboard",
        "onclick of  in HondaDropDown",
        ""
      );
    }
    window.open(navigationLinks[param], "_self");
  };

  return (
    <div>
      <Dropwraper>
        {dropOptions &&
          dropOptions.map((item, index) => {
            console.log(props.userId, "props.userId");

            return (
              <Text
                key={index}
                onClick={() => {
                  saveRdtUserActions(
                    props.userId,
                    (index == 0 && "profile") ||
                      (index == 1 && "account settings") ||
                      (index == 2 && "notifiction settings") ||
                      (index == 3 && "collaborators") ||
                      (index == 4 && "activities"),
                    "onclick of " + item + " in Profile-Dropdown ",
                    ""
                  );
                  profileNavigation(
                    item,
                    "onclick of " + item + " in Profile-Dropdown"
                  );
                }}
              >
                {item}
              </Text>
            );
          })}

        <Text2
          onClick={() =>
            profileNavigation("logout", "onclick of log out in the dropdown")
          }
          style={{ cursor: "pointer" }}
        >
          {props.t("logout")}
        </Text2>
      </Dropwraper>
    </div>
  );
}
