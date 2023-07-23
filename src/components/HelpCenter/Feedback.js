import React, { useState , useEffect} from 'react'
import styled from "styled-components";
import RatingRadio from './RatingRadio'
import { MsgBoxTxt } from './ContactUs'
import { MsgBox } from './ContactUs'
import { ReachBtn } from './ContactUs'

const FeedbackWrap = styled.div`
    margin-top: 10px;
`
const Rating = styled.p`
    margin: 0;
    font-family: 'Poppins';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    color: #454545;
    margin-bottom: 30px;
`
const RatingContent = styled.div`
    display: flex;
    align-items: center;
    gap: 75px;
`




export default function Feedback() {
    const [saveFeedBack, setSaveFeedBack] = useState([]);
    const [obj, setObj] = useState({
      userid: 9793,
      networkid: "NET1000003",
      ratingvalue: "", // Set an initial default value for ratingvalue
      brief: "",
    });
  
    const SaveFeedBack = async () => {
      try {
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/saveuserfeedback";
  
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(obj),
        });
  
        if (!res.ok) {
          throw new Error("Error updating account data");
        }
  
        const updatedData = await res.json();
        console.log(updatedData);
        setSaveFeedBack(updatedData);
      } catch (error) {
        console.error("Error updating account data:", error);
      }
    };
  
    const SaveBrief = (event) => {
      const value = event.target.value;
      const updatedObj = { ...obj, brief: value };
      setObj(updatedObj);
    };
  

    const [intialChecked,setIntialChecked] = useState();
    const SaveRatingValue = (event) => {
        const value = event;
      const updatedObj = { ...obj, ratingvalue: value };
      setObj(updatedObj);
    };
  
    return (
      <div>
        <FeedbackWrap>
          <Rating>How would you rate our platform?<span style={{ color: "red" }}>*</span></Rating>
          <RatingContent >
            {/* Updated the onClick prop to use SaveRatingValue */}
            <RatingRadio onChange={(e)=>SaveRatingValue("Very Unsatisfied")} intialChecked={intialChecked} label="Very Unsatisfied" value="Very Unsatisfied" ></RatingRadio>
            <RatingRadio onChange={(e)=>SaveRatingValue("Unsatisfied")} label="Unsatisfied" value="Unsatisfied" onClick={SaveRatingValue}></RatingRadio>
            <RatingRadio onChange={(e)=>SaveRatingValue("Neutral")} label="Neutral" value="Neutral" onClick={SaveRatingValue}></RatingRadio>
            <RatingRadio onChange={(e)=>SaveRatingValue("Satisfied")} label="Satisfied" value="Satisfied" onClick={SaveRatingValue}></RatingRadio>
            <RatingRadio onChange={(e)=>SaveRatingValue("Very Satisfied")}  label="Very Satisfied" value="Very Satisfied" onClick={SaveRatingValue}></RatingRadio>
          </RatingContent>
          <div style={{ width: "440px" }}>
            <MsgBoxTxt>Your Feedback</MsgBoxTxt>
            <MsgBox rows={6} placeholder='Type your message' onChange={SaveBrief}></MsgBox>
            <ReachBtn onClick={SaveFeedBack}>Submit</ReachBtn>
          </div>
        </FeedbackWrap>
      </div>
    );
  }
  
  
  
  
