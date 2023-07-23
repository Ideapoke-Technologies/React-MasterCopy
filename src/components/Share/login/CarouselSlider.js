import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginTempSlider from "./LoginTempSlider";
import Template1 from "../images/temp-1.png";
import Template2 from "../images/temp-2.png";
import Template3 from "../images/temp-3.png";
import styled from "styled-components";
import BgImg from "../images/b-bg.png"

export const LeftContent = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    background-image: url(${BgImg});
`
export const ThreeDots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    margin-top: 8px;
`
export const Dots = styled.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: #fff;
    cursor: pointer;
`

const getImage = (index) => {
    switch (index) {
        case 0:
            return Template1;

        case 1:
            return Template2;

        case 2:
            return Template3;
    }
}

const contentSelector = (index) => {
    let obj = {};
    switch (index) {
        case 0:
            obj = {
                heading: "Build from Templates",
                description: "Design your research with our pre-defined templates for a quick summarized view of a topic."
            }
            break;

        case 1:
            obj = {
                heading: "Fewer Pages.  More Relevant Data.",
                description: "Continuously monitor and assess your areas of interest to identify new market opportunities."
            }
            break;

        case 2:
            obj = {
                heading: "Work Together with your colleagues",
                description: "Share information seamlessly, research & build strategies together with your team."
            }
            break;
    }

    return obj;
}

const CarouselSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [heading, setHeading] = useState(contentSelector(0).heading);
    const [description, setDescription] = useState(contentSelector(0).description);

    const updateSlide = (index) => {
        setCurrentSlide(index);
        const heading = contentSelector(index).heading;
        const description = contentSelector(index).description;
        setHeading(heading);
        setDescription(description);
    }
    return (
        <LeftContent>
            <LoginHeader></LoginHeader>
            <LoginTempSlider
                Temp={getImage(currentSlide)}
                title={heading}
                desc={description}
            ></LoginTempSlider>
            <ThreeDots>
                <Dots
                    onClick={() => { updateSlide(0) }}
                    style={currentSlide == 0 ? { backgroundColor: "#2970B1" } : {}}
                />
                <Dots
                    onClick={() => { updateSlide(1) }}
                    style={currentSlide == 1 ? { backgroundColor: "#2970B1" } : {}}
                />
                <Dots
                    onClick={() => { updateSlide(2) }}
                    style={currentSlide == 2 ? { backgroundColor: "#2970B1" } : {}}
                />
            </ThreeDots>
        </LeftContent>
    )
}

export default CarouselSlider;