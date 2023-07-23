import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'
import LoginTempSlider from './LoginTempSlider'
import Template1 from "../images/temp-1.png";
import styled from 'styled-components'
import CarouselSlider from './CarouselSlider';
import ErrorMassage from '../../Banner/Error.js';
import { useState } from 'react';
import Blocker from '../../Blocker/Blocker';

export const Wraped = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    background-color: #FFF;
    height: 100vh;
`;

export default function LogInPage() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            {isLoading && <Blocker />}
            <Wraped>
                <div style={{width:"100%"}}>
                    <CarouselSlider />
                </div>
                <div>
                    <LoginForm
                        setIsLoading={setIsLoading}
                    ></LoginForm>
                </div>
            </Wraped>
        </div>
    )
}
