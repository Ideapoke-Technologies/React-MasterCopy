import React, { useEffect } from "react";
import { Wraped } from "./LogInPage";
import CarouselSlider from "./CarouselSlider";
import { BtnWrap, FormWrap, Header, LoginBtn, SubHeader, Wrap } from "./LoginForm";
import styled from "styled-components";
import { getURLValue } from "../../Common";

const BottomWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
    margin-bottom: 25px;
`

const AccountVerified = () => {
    useEffect(() => {
        const url = process.env.API_URL + '/verifyuseremailaccount';
        const strtargetemailid = getURLValue('email');
        const inputObj = {
            emailid: strtargetemailid
        }

        verifyUserEmailAccount(url, inputObj);
    }, []);

    const verifyUserEmailAccount = async (url, inputOnj) => {

        console.log('user verification url-->', url);
        console.log('user verification inputOnj-->', inputOnj);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(inputOnj)
        })
        const data = await response.json();

        console.log('user verification-->', data);
    }

    return (
        <Wraped style={{ overflowY: "hidden", height: "100vh" }}>
            <div>
                <CarouselSlider />
            </div>
            <div>
                <Wrap style={{ top: "30%" }}>
                    <FormWrap>
                        <Header>Sign up</Header>
                        <SubHeader>to see your research come alive!</SubHeader>


                        <BottomWrap>
                            <SubHeader>Your email id has been successfully verified</SubHeader>
                            <LoginBtn
                                style={{ width: "210px", textWrap: "nowrap" }}
                                onClick={() => { window.location.href = '/design/dashboard.html' }}
                            >Go to Dashboard</LoginBtn>
                        </BottomWrap>

                    </FormWrap>
                </Wrap>
            </div>
        </Wraped>
    )
}

export default AccountVerified;