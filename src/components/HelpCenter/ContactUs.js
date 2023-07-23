import React, { useState } from "react";
import styled from "styled-components";

const ContactWrap = styled.div`
  margin-top: 12px;
  width: 440px;
`;
const ContactMsg = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #454545;
`;
const ShortMsg = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #454545;
  margin-top: 20px;
`;
export const MsgBoxTxt = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #352960;
  margin-bottom: 12px;
  margin-top: 40px;
`;
export const MsgBox = styled.textarea`
  outline: none;
  border-radius: 12px !important;
  border: 1px solid #ff7624 !important;
  background-color: #fff !important;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #454545 !important;
  width: 415px;
  white-space: break-spaces !important;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: rgb(136, 176, 239) 0px 0px 10px;
    border: 1px solid #fff;
  }

  &::placeholder {
    color: #acacac;
  }
`;
export const ReachBtn = styled.button`
  outline: none;
  border: 1px solid #ff7624;
  padding: 8px;
  border-radius: 4px;
  background-color: #ff7624;
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 24px;
  cursor: pointer;
  float: right;

  &:hover {
    border: 1px solid #cd5900;
    background-color: #cd5900;
  }
`;
const ErrorMsg = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
  font-family: "Poppins";
`;

export default function ContactUs(props) {
  const [errorMessage, setErrorMessage] = useState(false);
  console.log(props.userData)
  const saveContactUs = async () => {    
    let message = document.getElementById("contactusmessage").value;
    if (message != null && message.trim() != "") {
      setErrorMessage(false)
      document.getElementById("contactusmessage").value = "";
      var request = {
        "message": message,
        "name": props.userData.sesfirstname,
        "emailid":props.userData.sesemailid
      }
      const url = process.env.SERVER_NAME_URL + "/populatedropusquerydata.html";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });      
      const data = await response.json();
     
    } else {
      setErrorMessage(true)
    }
  }

  return (
    <div>
      <ContactWrap>
        <ContactMsg>
          Have a requirement or queries related to the platform? Our customer
          success team is ready to help with your queries
        </ContactMsg>
        <ShortMsg>
          Leave us a message and our team will be in touch shortly.
        </ShortMsg>
        <div>
          <MsgBoxTxt>
            What’s on your mind?<span style={{ color: "red" }}>*</span>
          </MsgBoxTxt>
          <MsgBox
            rows={6}
            placeholder="Please enter a short note that will help us understand how we can help."
            id="contactusmessage"></MsgBox>
          {errorMessage && <ErrorMsg>This field is required</ErrorMsg>}
          <ReachBtn onClick={() => { saveContactUs() }}>Reach Ideapoke</ReachBtn>
        </div>
      </ContactWrap>
    </div>
  );
}
