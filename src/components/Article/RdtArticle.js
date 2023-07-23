import React,{useState} from "react";
// import styled from "styled-components";
// import Calendar from "./images/calendar.svg";
// import Clock from "./images/clock.svg";
// import Temp from "./images/Canvas Designed by Me.svg";
// import LeftMenuArticle from "./LeftMenuArticle";

import "./templete.css";



export default function RdtArticle(props) {
  const [briefData, setBriefData] = useState();
  const [type,setType] = useState();
   
  const ArticleData = props.articleData ;
  console.log("RdtArticle--->",ArticleData &&ArticleData.brief)
  console.log("ArticleType",ArticleData &&ArticleData.type)
  // setBriefData(ArticleData &&ArticleData.brief);
  // setType(ArticleData &&ArticleData.type)

  // { ArticleData && ArticleData.map((item, index) => {
  //   setBriefData(item.brief);
  //   console.log("ArticleData--->",item.brief)
  //   console.log("ArticleDataArticle--->",item.type)

  // })}

  return (

    <body>  
    <div dangerouslySetInnerHTML={{ __html: ArticleData.brief }}>
    </div> 
    </body> )

       
}
