import React, { useState } from 'react'
import { Wraped } from './LogInPage'
import SignUpForm from './SignUpForm'
import CarouselSlider from './CarouselSlider'
import Blocker from '../../Blocker/Blocker'

export default function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            {isLoading && <Blocker />}
            <Wraped>
                <div style={{width:"100%"}}>
                    <CarouselSlider />
                </div>
                <div>
                    <SignUpForm
                        setIsLoading={setIsLoading}
                    ></SignUpForm>
                </div>
            </Wraped>
        </div>
    )
}

