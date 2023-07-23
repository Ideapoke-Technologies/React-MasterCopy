import React, { useEffect, useRef, useState } from 'react'
import { InputError, Wrap } from './LoginForm'
import { FormWrap } from './LoginForm'
import { Header } from './LoginForm'
import { SubHeader } from './LoginForm'
import { Details } from './LoginForm'
import { Label } from './LoginForm'
import { EmailFiled } from './LoginForm'
import { BtnWrap } from './LoginForm'
import { LoginBtn } from './LoginForm'
import { ForgetPwd } from './LoginForm'
import { NewAccount } from './LoginForm'
import VerifyEmail from './VerifyEmail'
import { useTranslation } from 'react-i18next'
import { checkEmailValidation, checkPublicDomain, getURLValue, getUserGeolocationInfo } from '../../Common'
import ErrorMassage from '../../Banner/Error.js';

const SignUpForm = (props) => {
    const { t } = useTranslation();

    const [signupError, setSignupError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        if (signupError) {
            setTimeout(() => {
                setSignupError(null)
            }, 4000)
        }
    }, [signupError])

    const resetErrors = () => {
        setNameError(null);
        setEmailError(null);
        setPasswordError(null);
    };

    const setError = (field, message) => {
        resetErrors();
        switch (field) {
            case 'name':
                setNameError(message);
                break;
            case 'email':
                setEmailError(message);
                break;
            case 'password':
                setPasswordError(message);
                break;
            default:
                break;
        }
    };

    const handleEnterClick = (event) => {
        if (event.key == 'Enter') {
            signUpHandler();
        }
    }

    const signUpHandler = () => {

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (name === '') {
            setError('name', t('nameRequired'))
            return;
        } else if (name.length < 3) {
            setError('name', t('nameMinLength'))
            return;
        } else if (name.length > 200) {
            setError('name', t('nameMaxLength'))
            return;
        }

        if (email === '') {
            setError('email', t('emailRequired'))
            return;
        } else if (!checkEmailValidation(email)) {
            setError('email', t('validEmail'))
            return;
        } else if (checkPublicDomain(email)) {
            setError('email', t('enterWorkEmail'))
            return;
        }

        if (password === '') {
            setError('password', t('passwordRequired'));
            return;
        } else if (password.length < 6) {
            setError('password', t('passwordMinLength'))
            return;
        } else if (password.length > 16) {
            setError('password', t('passwordMaxLength'))
            return;
        }

        resetErrors();

        const splitArray = name.split(" ");
        const firstName = splitArray[0];
        const lastName = splitArray.slice(1).join(" ");

        let geoLocation = 'unknown';
        let geoUseragent = 'unknown';
        let geoPortal = 'unknown';
        const userLocationDetails = getUserGeolocationInfo();
        if (userLocationDetails) {
            geoLocation = userLocationDetails.usrgeolocation;
            geoUseragent = userLocationDetails.usergeouseragent;
            geoPortal = userLocationDetails.usergeoportal;
        }


        const url = process.env.API_URL + "/designsaveuserSignupRequest";
        const inputObj = {
            "workemaild": email,
            "publicemailid": '',
            "isinvited": 0,
            "ispaiddomain": 0,
            "invitedby": '',
            "geolocation": geoLocation,
            "geoportal": geoPortal,
            "geouseragent": geoUseragent,
            "firstname": firstName,
            "lastname": lastName,
            "password": password,
            "token": ''
        };
        const msgkey = getURLValue('key');

        if (msgkey && msgkey.trim() != '') {
            inputObj.messagekey = msgkey;
        } else {
            inputObj.messagekey = 'DESIGNUSERSIGNUP';
        }

        callSingUpAPI(url, inputObj)

    }


    const callSingUpAPI = async (url, inputObj) => {
        props.setIsLoading(true);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputObj)
        })

        const data = await response.text();

        props.setIsLoading(false);

        switch (data) {
            case 'Login to access':
                setSignupError('Login to access')
                return;
            case 'Activate account':
                setSignupError('Activate account')
                return;
            case 'Pending for verification':
                setSignupError('Pending for verification')
                return;
        }

        window.location.href = '/design/signupconfirmation.html';

    }

    return (
        <div>
            {signupError && <ErrorMassage
                width='45%'
                message={signupError}
            />}
            <Wrap>
                <FormWrap>
                    <Header>Sign up</Header>
                    <SubHeader>to see your research come alive!</SubHeader>

                    <Details>
                        <div>
                            <Label>Name</Label>
                            <EmailFiled
                                ref={nameRef}
                                placeholder='Enter your Name'
                                onKeyPress={handleEnterClick}
                            ></EmailFiled>
                            {nameError && <InputError>{nameError}</InputError>}
                        </div>
                        <div>
                            <Label>Your Work Email ID</Label>
                            <EmailFiled
                                ref={emailRef}
                                placeholder='Enter your registered Email'
                                id='email_id'
                                onKeyPress={handleEnterClick}
                            ></EmailFiled>
                            {emailError && <InputError>{emailError}</InputError>}
                        </div>
                        <div>
                            <Label>Password</Label>
                            <EmailFiled
                                ref={passwordRef}
                                type='password'
                                placeholder='Enter Password'
                                onKeyPress={handleEnterClick}
                            ></EmailFiled>
                            {passwordError && <InputError>{passwordError}</InputError>}
                        </div>
                    </Details>

                </FormWrap>


                <div>
                    <NewAccount>By clicking “Sign Up” you agree to the Ideapoke</NewAccount>
                    <div style={{ display: "flex", alignItems: "center", gap: "3px", justifyContent: "center" }}>
                        <ForgetPwd href='/terms.html'>Terms of Use</ForgetPwd> <span style={{ color: "#ACACAC", fontSize: '12px' }}>and</span> <ForgetPwd href='/privacy.html'>Privacy Policy.</ForgetPwd>
                    </div>
                </div>

                <BtnWrap>
                    <LoginBtn onClick={signUpHandler}>Sign Up</LoginBtn>
                </BtnWrap>

                <div>
                    <ForgetPwd href='/forgotpassword.html'>
                        Forgot Password?
                    </ForgetPwd>
                    <div style={{ display: "flex", alignItems: "center", gap: "3px", justifyContent: "center" }}>
                        <NewAccount> Already have an account? </NewAccount>
                        <ForgetPwd href='/design/signin.html'>Log in</ForgetPwd>
                    </div>
                </div>

            </Wrap>
        </div>
    )
}

export default SignUpForm;