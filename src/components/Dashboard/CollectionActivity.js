import React, { useState } from "react";
import styled from "styled-components";
import { P } from "../CommonStyle";
import Arrow from "../images/dropdown-arrow.svg";
import CheckBox from "../CheckBox";
import { saveRdtUserActions } from "../UserTracking";
import { useTranslation } from "react-i18next";

const CollectionWrap = styled.div`
  position: relative;
  margin-left: -60px;
`;
const ColDropValue = styled.div`
  background: #ffffff;
  border: 1px solid #8a8a8a;
  box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.15);
  border-radius: 4px;
  width: 305px;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 0.1fr;
  top: 14px;
  z-index: 2;
`;

const SelectValue = styled.div`
  position: relative;
  padding: 20px 30px;
`;

const AddValue = styled.div`
  background: #bddfff;
  box-shadow: 0px -30px 60px rgba(22, 41, 65, 0.15);
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ExportBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Svg = styled.svg`
  cursor: pointer;
`;
const CheckVaue = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 12px;
`;
const CheckVaueWrap = styled.div`
  overflow-y: auto;
  max-height: 265px;
  width: 274px;
  scrollbar-color: #e5e5e5 #fff;
  scrollbar-width: thin;
  border-radius: 10px;
  margin-top: 13px;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #fff;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  ::-webkit-scrollbar {
    width: 6px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 0%);
    background-color: #e5e5e5;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
const Img = styled.img``;
export default function CollectionActivity(props) {
  const [isDisplay, setIsDisplay] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const { t } = useTranslation();


  // const handleCheckboxChange = (value) => {
  //   if (selectedValues.includes(value)) {
  //     setSelectedValues(selectedValues.filter((val) => val !== value));
  //   } else {
  //     setSelectedValues([...selectedValues, value]);
  //   }
  // };
  const handleCheckboxChange = (value) => {
    if (value === "All") {
      if (selectedValues.length === uniqueNotifictionData.length) {
        setSelectedValues([]);
      } else {
        setSelectedValues(uniqueNotifictionData);
      }
    } else {
      if (selectedValues.includes(value)) {
        setSelectedValues(selectedValues.filter((val) => val !== value));
      } else {
        setSelectedValues([...selectedValues, value]);
      }
    }
  };

  console.log("Userid--->", props.userData)
  const handleApplyFilter = (event) => {
    saveRdtUserActions(
      props.userData.sesuserid,
      "Activiteis",
      "onClick of Apply in Activities"
    );
    event.preventDefault();
    props.applyFilter(selectedValues);
    props.notshow();
  };
  const uniqueNotifictionData = Array.from(
    new Set(
      props.notifictiondata.map((data) =>
        data.fullname
          ? data.fullname
          : data.collaborateddesign
            ? data.collaborateddesign
            : data.roleType
      )
    )
  ).filter((value) => value);
  return (
    <div>
      <CollectionWrap >
        <ColDropValue style={{ display: "block" }}>
          <SelectValue>
            <P
              text="Select Activity"
              color="#ACACAC"
              fontSize="16px"
              fontWeight="400"
              cursor="auto"
            ></P>
            <CheckVaueWrap>
              <CheckVaue>
                <CheckBox
                  onChange={() => handleCheckboxChange("All")}
                  checked={selectedValues.length === uniqueNotifictionData.length}></CheckBox>
                <P
                  text="All"
                  color="#454545"
                  fontSize="14px"
                  fontWeight="400"
                  cursor="auto"
                ></P>
              </CheckVaue>
              {uniqueNotifictionData.map((value) => (
                <div key={value}>
                  <CheckVaue>
                    <CheckBox
                      onChange={() => handleCheckboxChange(value)}
                      checked={selectedValues.includes(value)}
                    ></CheckBox>
                    <P
                      text={value}
                      color="#454545"
                      fontSize="14px"
                      fontWeight="400"
                      cursor="auto"
                    ></P>
                  </CheckVaue>
                </div>
              ))}
            </CheckVaueWrap>
          </SelectValue>
          <AddValue onClick={handleApplyFilter}>
            <P
              text={t("apply")}
              color="#2970B1"
              fontSize="16px"
              fontWeight="400"
            ></P>
          </AddValue>
        </ColDropValue>
      </CollectionWrap>
    </div>
  );
}
