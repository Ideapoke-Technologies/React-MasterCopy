import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Feedback from "./Feedback";
import GettingStartCards from "./GettingStartCards";
import "./HelpCenter.css";
import GlaImg from "./images/gla.svg";

const MenuWrap = styled.div`
  height: 534px;
  width: 295px;
  padding: 50px 0px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px 0 0 8px;
`;
const MenuHeader = styled.p`
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 16.22px;
  color: #454545;
  margin: 0;
  padding: 0 30px;
`;
const SubmenuContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 40px;
`;
const SubmenuContent1 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 40px;
  bottom: 20px;
  position: absolute;
  width: 294px;
`;
const SubMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 30px;
  cursor: pointer;
`;
const MenuTxt = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const GImg = styled.img``;

export default function LeftMenuHelp(props) {
  const [leftMenu, setLeftMenu] = useState([]);

  const FetchLeftMenu = async () => {
    try {
      const url = process.env.APP_RDT_SERVICE_URL + "/rdt/fetchhelpcategory";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setLeftMenu(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchLeftMenu();
  }, []);

  console.log("data--->", leftMenu.length > 0 && leftMenu[0].name);



const CloseHelpPopup=()=>{
    // setCloseHelpPopup(false);
    props.setShowHelpPopup(false)
};
  

  return (
    <div>
      <MenuWrap>
        <MenuHeader>Help Centre</MenuHeader>
        <SubmenuContent>
          {leftMenu &&
            leftMenu.map((item, index) => {
              return (
                <SubMenu
                  className="submenu"
                  onClick={() => props.HeighlightSection(index)}
                  style={
                    item.name === "Give Us Feedback"
                      ? { marginTop: "180px" }
                      : {}
                  }
                >
                  <svg
                    className="submenuImg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.90919 4.17095C4.90919 3.993 4.97988 3.82234 5.10571 3.69652C5.23153 3.57069 5.40219 3.5 5.58014 3.5H20.3445C20.4691 3.5 20.5913 3.5347 20.6973 3.60021C20.8033 3.66571 20.8889 3.75944 20.9447 3.87089C21.0004 3.98234 21.024 4.1071 21.0128 4.2312C21.0016 4.3553 20.9561 4.47383 20.8813 4.57351L17.1562 9.53941L20.8813 14.5062C20.9561 14.6059 21.0016 14.7244 21.0128 14.8485C21.024 14.9726 21.0004 15.0974 20.9447 15.2088C20.8889 15.3203 20.8033 15.414 20.6973 15.4795C20.5913 15.545 20.4691 15.5797 20.3445 15.5797H6.25108V19.8282C6.25108 19.9903 6.19236 20.1469 6.08579 20.2691C5.97922 20.3913 5.83201 20.4708 5.67139 20.4928L5.58014 20.5C5.418 20.5 5.26136 20.4413 5.13916 20.3347C5.01697 20.2281 4.9375 20.0809 4.91545 19.9203L4.90919 19.8282V4.17095ZM19.0026 4.84189H6.25108V14.2378H19.0026L15.7803 9.94198C15.6932 9.82584 15.6461 9.68459 15.6461 9.53941C15.6461 9.39424 15.6932 9.25299 15.7803 9.13685L19.0026 4.84189Z"
                      fill="#454545"
                    />
                  </svg>
                  <MenuTxt className="menuTxt">{item.name}</MenuTxt>
                </SubMenu>
              );
            })}
        </SubmenuContent>
      </MenuWrap>
      
    </div>
  );
}
