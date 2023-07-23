import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Button from './Button/Button';
import { P } from './CommonStyle';
import CheckBox from '././CheckBox';
// import AddCollectionSlider from './AddCollectionSlider';
import Arrow from './images/dropdown-arrow.svg'

const CollectionWrap = styled.div`
    position: relative;
`
const ColDropValue = styled.div`
    background: #FFFFFF;
    border: 1px solid #8A8A8A;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.15);
    border-radius: 4px;
    width: 760px;
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 0.1fr;
    top: 36px;
    z-index: 2;
`

const SelectValue = styled.div`
    position: relative;
    padding: 20px 30px;
`

const AddValue = styled.div`
    background: #BDDFFF;
    box-shadow: 0px -30px 60px rgba(22, 41, 65, 0.15);
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const ExportBtn = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`
const Svg = styled.svg`
    cursor: pointer;
`
const CheckVaue = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 12px;
`
const CheckVaueWrap = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 0.9fr 1fr;
    overflow-y: auto;
    max-height: 330px;
    width: 730px;
    scrollbar-color: #E5E5E5 #fff;
    scrollbar-width: thin;
    margin-top: 13px;
    ::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #fff;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    ::-webkit-scrollbar{
        width: 6px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 0%);
        background-color: #e5e5e5;
        margin-top: 5px;
        margin-bottom: 5px;
    }

`
const Img = styled.img`

`

export default function ResearchArea(props) {

    const [show, setShow] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false)
    const [fltrRschArea, setFltrRschArea] = useState(null)
    const [rschAreaData, setRschAreaData] = useState(null)
    const [rschAreaObj, setRschAreaObj] = useState({
        type: "subindustry",
        flag: "A"
    })

    const toggle = () => {
        setIsDisplay(!isDisplay)
        // let x = document.getElementById("rsrhareadpid");

        // if (x) {
        //     if (window.getComputedStyle(x).display === "block") {
        //         x.style.display = "none";
        //     } else {
        //         x.style.display = "block";
        //     }
        // }
    }
    let selecttext = "Select " + props.heading.toLowerCase();

    useEffect(() => {
        fetchResearchArea()
        collectResearchAreaId()

    }, [props.communityData])

    document.addEventListener("mouseup", function (e) {
        var container = document.querySelector("#rsrhareadpid");
        if (container != null) {
            if (!container.contains(e.target) && container !== e.target) {
                setIsDisplay(false)
            }
        }

    });

    const fetchResearchArea = async () => {
        console.log(" fetchproindustryandsubindustry rschAreaObj : ", rschAreaObj);
        const url = process.env.API_URL + "/fetchproindustryandsubindustry";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rschAreaObj),
        });
        const data = await response.json();
        setRschAreaData(data.eimsProReqIndustryAndSubInd);
        console.log('Research area data : ', data.eimsProReqIndustryAndSubInd);

    };

    const collectResearchAreaId = () => {
        let rschAreaArr = [];
        for (let i = 0; i < props.communityData.length; i++) {
            if (rschAreaArr.indexOf(props.communityData[i].researchAreaId) === -1) {
                if (props.communityData[i].researchAreaId != undefined) {
                    rschAreaArr.push(props.communityData[i].researchAreaId);
                }
            }
        }
        setFltrRschArea(rschAreaArr);
        console.log("props.communityData : ", props.communityData);
        console.log("rschAreaArr : ", rschAreaArr);
    }

    return (
        <div>
            <CollectionWrap>

                <ColDropValue id="rsrhareadpid" style={{ display: isDisplay ? "block" : "none" }}>
                    <SelectValue>
                        <P text={selecttext} color="#ACACAC" fontSize="16px" fontWeight="400" cursor="auto"></P>
                        <CheckVaueWrap>

                            {isDisplay && rschAreaData && rschAreaData.map((item, index) => {
                                return (
                                    <CheckVaue key={index}>
                                        {fltrRschArea && fltrRschArea.indexOf(item.id) != -1 ? (<CheckBox id={item.id} checked={true} name={props.dymid}></CheckBox>) : (<CheckBox id={item.id} checked={false}></CheckBox>)}
                                        <P text={item.industry} color="#454545" fontSize="16px" fontWeight="400" cursor="auto"></P>
                                    </CheckVaue>);
                            })}


                        </CheckVaueWrap>
                    </SelectValue>
                    <AddValue onClick={() => { props.applyFilter(props.dymid, "RESEARCHAREA"), toggle() }}>
                        <P text="Apply" color="#2970B1" fontSize="16px" fontWeight="400" cursor="pointer"></P>
                    </AddValue>
                </ColDropValue>
                <ExportBtn onClick={() => toggle()}>
                    <P text={props.t('researcharea')} color="#2970B1" fontSize="16px" fontWeight="400" cursor="pointer"></P>
                    <Img src={Arrow}></Img>

                </ExportBtn>
            </CollectionWrap>
        </div>
    )
}
