import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { checkEmailValidation, checkPublicDomain, getURLValue, getUserGeolocationInfo } from '../../Common'
import ErrorMassage from '../../Banner/Error.js';

export const Wrap = styled.div`
  margin: 0 auto;
  width: 520px;
  text-align: center;
  position: absolute;
  top: 32%;
  transform: translate(0, -30%);
  margin-left: 75px;
`;
export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const Header = styled.div`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  letter-spacing: -1.25px;
  color: #ff7624;
`;
export const SubHeader = styled.div`
  font-size: 16px;
  font-family: "Poppins";
  line-height: 16px;
  color: #454545;
`;
export const Details = styled.div`
  margin-top: 25px;
`;
export const Label = styled.div`
  font-size: 16px;
  font-family: "Poppins";
  line-height: 24px;
  color: #352960;
  margin-top: 15px;
  text-align: left;
`;
export const EmailFiled = styled.input`
  font-family: "Poppins";
  font-size: 12px;
  line-height: 24px;
  border: 1px solid #454545;
  border-radius: 12px;
  padding: 13px 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  width: 475px;
  color: #454545;
  &:focus {
    outline: none;
    border: 1px solid #2970b1;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;
export const LoginBtn = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  line-height: 20px;
  padding: 14px 40px;
  width: 145px;
  background-color: #2970b1;
  border: 1px solid #2970b1;
  border-radius: 4px;
  &:hover {
    background-color: #15436d;
    border: 1px solid #15436d;
    cursor: pointer;
  }
`;
export const ForgetPwd = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Poppins";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`;
export const NewAccount = styled.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Poppins";
  line-height: 24px;
`;
export const InputError = styled.div`
  font-size: 14px;
  font-family: "Poppins";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`;

const LoginForm = ({ setIsLoading }) => {
    const { t } = useTranslation();

    const [signInError, setSignInError] = useState(null);
    const [userEmailError, setUserEmailError] = useState(null);
    const [userPasswordError, setUserPasswordError] = useState(null);
    const userEmailRef = useRef(null);
    const userPasswordRef = useRef(null);

    useEffect(() => {
        if (signInError != null) {
            setTimeout(() => {
                setSignInError(null)
            }, 4000)
        }
    }, [signInError])

    const resetErrors = () => {
        setUserEmailError(null);
        setUserPasswordError(null);
    };

  const setError = (field, message) => {
    resetErrors();
    switch (field) {
      case "email":
        setUserEmailError(message);
        break;
      case "password":
        setUserPasswordError(message);
        break;
      default:
        break;
    }
  };

    const handleEnterClick = (event) => {
        if (event.key == 'Enter') {
            loginHandler();
        }
    }
  const loginHandler = () => {
    const email = userEmailRef.current.value.trim();
    const password = userPasswordRef.current.value.trim();

    if (email === "") {
      setError("email", t("emailRequired"));
      return;
    } else if (!checkEmailValidation(email)) {
      setError("email", t("validEmail"));
      return;
    } else if (checkPublicDomain(email)) {
      setError("email", t("enterWorkEmail"));
      return;
    }

    if (password === "") {
      setError("password", t("passwordRequired"));
      return;
    } else if (password.length < 6) {
      setError("password", t("passwordMinLength"));
      return;
    } else if (password.length > 16) {
      setError("password", t("passwordMaxLength"));
      return;
    }

    resetErrors();

    let geoLocation = "unknown";
    let geoUseragent = "unknown";
    let geoPortal = "unknown";
    const userLocationDetails = getUserGeolocationInfo();
    console.log("geo-->", userLocationDetails);
    if (userLocationDetails) {
      geoLocation = userLocationDetails.usrgeolocation;
      geoUseragent = userLocationDetails.usergeouseragent;
      geoPortal = userLocationDetails.usergeoportal;
    }

    const url = process.env.API_URL + "/designloginaction";

    const inputObject = {
      emailid: email,
      password: password,
      geolocation: geoLocation,
      geoportal: geoPortal,
      geouseragent: geoUseragent,
      targetUrl: "",
      token: null,
      actiontype: "",
    };

        const msgkey = getURLValue('key');

        if (msgkey && msgkey.trim() != '') {
            inputObject.messagekey = msgkey;
        } else {
            inputObject.messagekey = 'DESIGNUSERSIGNIN';
        }
    callSingInAPI(url, inputObject);
  };

  const callSingInAPI = async (url, inputObj) => {
        setIsLoading(true);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputObj),
    });

    const data = await response.json();
        setIsLoading(false);

        switch (data[0].identifier) {
            case 'User record not found':
                setSignInError('Incorrect E-mail ID or password');
                return;

            case 'User deactivated':
                setSignInError('Register to access');
                return;

            case 'User Mail Verification Pending':
                setSignInError('User Mail Verification Pending');
                return;

        }

        window.location.href = data[0].url;

    }
  return (
    <div>
      {signInError && <ErrorMassage width="45%" message={signInError} />}
      <Wrap>
        <FormWrap>
          <Header>Login</Header>
          <SubHeader>to see your research come alive!</SubHeader>

          <Details>
            <div>
              <Label>Your Work Email ID</Label>
              <EmailFiled ref={userEmailRef} placeholder="Enter your registered Email" onKeyPress={handleEnterClick}></EmailFiled>
              {userEmailError && <InputError>{userEmailError}</InputError>}
            </div>
            <div>
              <Label>Password</Label>
              <EmailFiled type="password" placeholder="Enter Password" ref={userPasswordRef} onKeyPress={handleEnterClick}></EmailFiled>
              {userPasswordError && <InputError>{userPasswordError}</InputError>}
            </div>
          </Details>
        </FormWrap>

        <BtnWrap>
          <LoginBtn onClick={loginHandler}>Log In</LoginBtn>
        </BtnWrap>

        <div>
          <ForgetPwd href="/forgotpassword.html">Forgot Password?</ForgetPwd>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              justifyContent: "center",
            }}
          >
            <NewAccount>Don’t have an account? </NewAccount>
            <ForgetPwd href="/design/signup.html">Sign Up</ForgetPwd>
          </div>
        </div>
      </Wrap>
    </div>
  );
};

export default LoginForm;
