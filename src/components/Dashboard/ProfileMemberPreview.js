import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Member from "./images/member-profile.svg";
import { P } from "../CommonStyle";
import Edit from "./images/edit.svg";
import ProfileMember from "./ProfileMember";
import ProfileMemberText from "./ProfileMemberText";
import { useTranslation } from "react-i18next";
import MemberHoverpreview from "./MemberHoverpreview";
import ProfileMemberhover from "./ProfileMemberhover";

const Topwraper = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 15px;
  width: 280px;
  margin-top: 35px;
`;
const Outerwraper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Mainwrapper = styled.div`
  flex-direction: row;
  flex-shrink: 3;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
const Mainwraper = styled.div`
  /* display: grid;
    grid-template-columns: 0.55fr 2fr; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  width: 105%;
  
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.26fr 1fr;
  margin-top: -80px;
`;
const Rightmenulist = styled.div`
  margin: 0px 20px 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 287%;
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
`;

const Img = styled.img``;
const Wrapericon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
`;

const Profilewraperheader = styled.div`
  z-index: 2;
`;
const ProfileEdit = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Img2 = styled.img`
  width: 25px;
`;

const ProfileNoImg = styled.p`
  margin-top: 1px;
  width: 58px;
  height: 58px;
  background: #1f936e;
  font-family: "poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  border-radius: 55px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @-moz-document url-prefix() {
    width: 58px;
    height: 58px;
  }
`;

export default function ProfileMemberPreview(props) {
  const { t } = useTranslation();

  const [collabratorData, setCollabratorData] = useState([]);
  const [hoverComponent, setHoverComponent] = useState(null);
  const [nullDataCheck, setNullDataCheck] = useState();

  const fetchCollebrareData = async () => {
    const url =
      process.env.APP_RDT_SERVICE_URL + "/rdt/network/fetchCollaborators";

    const obj = {
      userId: props.userData.sesuserid,
      networkId: props.userData.sesnetworkid,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    console.log("data");
    const data = await res.json();
    console.log(data);
    setCollabratorData(data);
    if (data) {
      setNullDataCheck(false);
    } else {
      setNullDataCheck(true);
    }
  };

  console.log(collabratorData);

  useEffect(() => {
    fetchCollebrareData();
  }, []);

  function getInitials(firstName, lastName) {
    const firstNameInitial = firstName ? firstName.charAt(0) : "";
    const lastNameInitial = lastName ? lastName.charAt(0) : "";
    return firstNameInitial + lastNameInitial;
  }

  console.log("collabratorData", collabratorData);
  console.log("nullDataCheck", nullDataCheck);
  // Inside your component
  const firstName =
    collabratorData.length > 0 ? collabratorData[0].firstName : "";
  const lastName =
    collabratorData.length > 0 ? collabratorData[0].lastName : "";
  const initials = getInitials(firstName, lastName);
  console.log(initials, "initialsinitials");

  function formatDate(date) {
    const currentDate = new Date(date); // Ensure date is a valid Date object
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    let dayWithSuffix = day;
    if (day >= 11 && day <= 13) {
      dayWithSuffix += "th";
    } else {
      switch (day % 10) {
        case 1:
          dayWithSuffix += "st";
          break;
        case 2:
          dayWithSuffix += "nd";
          break;
        case 3:
          dayWithSuffix += "rd";
          break;
        default:
          dayWithSuffix += "th";
      }
    }

    return `${dayWithSuffix} ${month} ${year}`;
  }

  const propcollabratorData = collabratorData;

  return (
    <Mainwrapper>
      <Wrapper>
        <Rightmenulist>
          {/* <div style={{position: "absolute"}}> */}
          <Proheading>
            <ProfileEdit>
              <P
                text={t("collabrators")}
                color="#454545"
                fontSize="30px"
                fontWeight="600"
                letterSpacing="-1px"
                marginTop="20px"
              ></P>

              {/* <Img2 src={Edit}></Img2> */}

              {/* <Button text="Edit" variant="outlineOrange" width="75px" height="auto"  font-size="18px" font-weight="600"></Button> */}
            </ProfileEdit>
          </Proheading>

          <Mainwraper>
            {collabratorData &&
              collabratorData.length > 0 &&
              collabratorData.map((item, index) => {
                const handleHover = (index) => {
                  setHoverComponent(index);
                };

          

                console.log(item.userPhoto.includes("/accessdoc?filePath=") ? item.userPhoto : "/accessdoc?filePath="+item.userPhoto+".png","item.userPhoto")


                const handleHoverLeave = () => {
                  setHoverComponent(null);
                };

                function getInitials(firstName, lastName) {
                  const firstNameInitial = firstName
                    ? firstName.charAt(0).toUpperCase()
                    : "";
                  const lastNameInitial = lastName
                    ? lastName.charAt(0).toUpperCase()
                    : "";
                  return firstNameInitial + lastNameInitial;
                }

                // Inside your component
                const firstName = item.firstName;
                const lastName = item.lastName;
                const initials = getInitials(firstName, lastName);
                console.log(initials, "initialsinitials");

                let fullName = item.fullName;
                let words = fullName.split(" ");

                for (let i = 0; i < words.length; i++) {
                  let word = words[i];

                  if (word.charAt(0) === word.charAt(0).toLowerCase()) {
                    word = word.charAt(0).toUpperCase() + word.slice(1);
                  }

                  if (
                    i > 0 &&
                    word.charAt(0) === word.charAt(0).toLowerCase()
                  ) {
                    word = word.charAt(0).toUpperCase() + word.slice(1);
                  }

                  words[i] = word;
                }

                fullName = words.join(" ");

                return (
                  <Topwraper key={index}>
                    <Outerwraper>
                      <div>
                        {item.userPhoto == "null" || item.userPhoto == "" ? (
                          <ProfileNoImg
                            onMouseEnter={() => {
                              handleHover(index);
                            }}
                            onMouseLeave={handleHoverLeave}
                          >
                            {initials}
                          </ProfileNoImg>
                        ) : (
                          <ProfileMember
                            index={index}
                            initials={initials}
                            collabratorData={collabratorData}
                            memberImg={"/accessdoc?filePath="+item.userPhoto}
                            Brcolor="red"
                          />
                        )}
                      </div>
                      <div>
                        <ProfileMemberText
                          text={fullName}
                          stext={
                            item.joinedDate ? formatDate(item.joinedDate) : ""
                          }
                        />
                      </div>
                    </Outerwraper>

                    {hoverComponent === index && (
                      <>
                        {(index + 1) % 3 === 0 ? (
                          <ProfileMemberhover
                            propcollabratorData={propcollabratorData[index]}
                            index={index}
                            initials={initials}
                          ></ProfileMemberhover>
                        ) : (
                          <MemberHoverpreview
                            propcollabratorData={propcollabratorData[index]}
                            index={index}
                            initials={initials}
                          ></MemberHoverpreview>
                        )}
                      </>
                    )}
                  </Topwraper>
                );
              })}

            {nullDataCheck == false && collabratorData.length == 0 && (
              <p
                style={{
                  fontFamily: "Poppins",
                  color: " rgb(69, 69, 69)",
                  fontSize: "26px",
                  fontWeight: 400,
                  marginTop: "250px",
                  marginLeft: "350px",
                }}
              >
                {t("nocollaboratorsfound")}
              </p>
            )}
          </Mainwraper>
        </Rightmenulist>
      </Wrapper>
    </Mainwrapper>
  );
}
