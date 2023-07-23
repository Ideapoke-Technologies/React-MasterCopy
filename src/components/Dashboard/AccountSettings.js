import React, { useState } from "react";
import styled from "styled-components";
import IPDropdown from "./IPDropdown";
import { useTranslation } from "react-i18next";

const Topwraper = styled.div``;

const Text = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
`;

const Subtext = styled.p`
  color: ${(props) => props.color};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  width: 264px;
`;
const SubtextInput = styled.div``;
const InputText = styled.input`
 border: 1px solid #d9d9d9;
border-radius: 5px;
background: #FFFFFF;
  width: 330px;
  height: 42px;
  padding-left: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14spx;
  line-height: 24px;
  color: #000000;
  margin-bottom: 25px;
  /*  */

  &::placeholder {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #ccc;
  }
  &:focus {
    outline: none;
    box-shadow: rgb(255, 212, 193 ,1) 0px 0px 10px;
box-shadow: #e88041 0px 0px 6px;
border: 1px solid #ff9e64;
    
  }
`;
const Inputwraper = styled.div`
  // margin-right: 50px;
`;
const SVG = styled.svg`
  cursor: pointer;
`;

const Errorwraper = styled.div`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #f00;
  margin-top: -20px;
  margin-bottom: 15px;
`;

const AccountSettings = (props) => {
  const { t } = useTranslation();
  const { showPlaceholder } = props;
  console.log("pass--------->", props.Text)
  console.log("options---->", props.options)
  return (
    <div>


      <Topwraper>
        <Text color={props.tcolor}>{props.Text} </Text>
        {showPlaceholder == true ? (
          ""
        ) : (
          <Subtext color={props.stcolor}>
            {" "}
            {(props.Text == "Password" || props.Text == "パスワード") ? "********" : props.Subtext}

          </Subtext>
        )}

        <SubtextInput>
          <Inputwraper>
            {showPlaceholder &&
              (props.Text === "Security Question" || props.Text === "秘密の質問" ? (
                <IPDropdown
                  value={props.Subtext}
                  onChange={props.onChange}
                  options={props.options}
                ></IPDropdown>
              ) : (props.Text === "Password" || props.Text == "パスワード") ? ( 
                <React.Fragment>
                  <InputText
                    type="password"
                    value={props.oldPassword}
                    onChange={props.handleOldPassword}
                    placeholder={t("Typeoldpassword")}
                  ></InputText>

                  <InputText
                    type="password"
                    value={props.newPassword}
                    onChange={props.handleNewPassword}
                    placeholder={t("Typenewpassword")}
                  ></InputText>

                  <InputText
                    type="password"
                    value={props.confirmPassword}
                    onChange={props.handleConfirmPassword}
                    placeholder={t("Retypenewpassword")}
                  ></InputText>
                  {props.error && props.error !== "New Data Updated" && (
                    <Errorwraper>{props.error} *</Errorwraper>
                  )}
                </React.Fragment>
              ) : (
                <InputText
                  type="text"
                  value={props.Subtext.toLowerCase() == "type your answer" ? "" : props.Subtext}
                  onChange={props.onChange}
                  placeholder={props.Text}
                ></InputText>
              ))}
          </Inputwraper>
        </SubtextInput>
      </Topwraper>

      {/* <SVG width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.63404 8C6.51437 8.00003 6.39714 8.03391 6.29591 8.09775C6.19468 8.16158 6.11358 8.25275 6.06198 8.36073C6.01038 8.46871 5.99038 8.58908 6.00431 8.70795C6.01823 8.82681 6.0655 8.9393 6.14065 9.03244L8.55939 12.0276C8.64856 12.1381 8.7613 12.2271 8.88936 12.2883C9.01742 12.3495 9.15755 12.3813 9.29947 12.3813C9.4414 12.3813 9.58153 12.3495 9.70959 12.2883C9.83764 12.2271 9.95039 12.1381 10.0396 12.0276L12.4589 9.03244C12.5341 8.9393 12.5814 8.82681 12.5953 8.70795C12.6092 8.58908 12.5892 8.46871 12.5376 8.36073C12.486 8.25275 12.4049 8.16158 12.3037 8.09775C12.2024 8.03391 12.0852 8.00003 11.9655 8H6.63404Z" fill="#454545"/>
             </SVG> */}
    </div>
  );
};

export default AccountSettings;
