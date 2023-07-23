import React from 'react'
import { Wraped } from './LogInPage'
import BgImg from "../designelements/images/b-bg.png"
import { LeftContent } from './LogInPage'
import LoginTempSlider from './LoginTempSlider'
import Template4 from "../designelements/images/temp-4.png"
import LoginHeader from './LoginHeader'
import LoginFormGuest from './LoginFormGuest'

export default function LoginGuestPage() {
  return (
    <div>
        <Wraped>
            <div>
                <LeftContent>
                    <LoginHeader></LoginHeader>
                    <LoginTempSlider Temp={Template4} title="Build from templatesAI Automotive Trends - Trend Timeline Map" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></LoginTempSlider>
                </LeftContent>
            </div>
            <div>
                <LoginFormGuest></LoginFormGuest>
            </div>
        </Wraped>
    </div>
  )
}
