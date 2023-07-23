import React from "react";
import { FormWrap, Header, SubHeader, Wrap } from "./LoginForm";
import VerifyEmail from "./VerifyEmail";
import { Wraped } from "./LogInPage";
import CarouselSlider from "./CarouselSlider";

const SignupConfirmation = () => {
    return (
        <Wraped>
            <div>
                <CarouselSlider />
            </div>
            <div>
                <Wrap>
                    <FormWrap>
                        <Header>Sign up</Header>
                        <SubHeader>to see your research come alive!</SubHeader>

                        <VerifyEmail></VerifyEmail>
                    </FormWrap>
                </Wrap>
            </div>
        </Wraped>

    )
}

export default SignupConfirmation;