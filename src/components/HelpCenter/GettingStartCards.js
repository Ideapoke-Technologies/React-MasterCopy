import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bcard from "./Bcard";
import Scard from "./Scard";
import ExploreMore from "./ExploreMore";
import Temp from "./images/temp1.png";
import Temp1 from "./images/temp2.png";
import RdtArticle from "../Article/RdtArticle";
import {useNavigate} from "react-router-dom"
import GuidePage from "./GuidePage";

const CardWrapped = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 20px;
  overflow-y: auto;
  height: 532px;
`;

export default function GettingStartCards(props) {
  const navigate = useNavigate();

  const [gettingStartedContent, setGettingStartedContent] = useState();

  const FetchGettingStarted = async () => {
    const obj = {
      categoryid: 1,
    };
    try {
      const url = process.env.APP_RDT_SERVICE_URL + "/rdt/fetchhelpcontent";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const data = await res.json();
      console.log("Datasss--->", data);
      setGettingStartedContent(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchGettingStarted();
  }, []);

  const GettingStartedData = gettingStartedContent;

  //const [articleData,setArticleData] = useState();
  const [hideCard, setHideCard] = useState(true);
  const [showArticle, setShowArticle] = useState(false);
  const BriefData = (item) => {
    console.log("gettingStartedContent", item);
    //setArticleData(item)
    props.setArticleData(item);
    setHideCard(false);
    navigate("/design/article")
    // setShowArticle((window.location.href = "/design/article"));
  };

  const [showGuidePage,setShowGuidePage]= useState(false);
  // const [hideGettingStartPage,setHideGettingStartPage]= useState(true);
  const ShowGuidePage=()=>{
    setShowGuidePage(true);
    // setHideGettingStartPage(false);
    setHideCard(false);
    alert("dfghj")
  };

  
 

  return (
    <div>
      {hideCard && (
        <CardWrapped>
          {gettingStartedContent &&
            gettingStartedContent.map((item, index) => {
              return index < 2 ? (
                <Bcard
                  onClick={() => BriefData(item)}
                  item={item}
                  GettingStartedData={GettingStartedData}
                  Detail={`${item.type} - ${item.duration}min`}
                  Title={item.title}
                ></Bcard>
              ) : (
                <Scard
                  GettingStartedData={GettingStartedData}
                  BgImg={Temp1}
                  Detail={`${item.type} - ${item.duration}min`}
                  Title={item.title}
                ></Scard>
              );
            })}
          <ExploreMore onClick={ShowGuidePage}></ExploreMore>
        </CardWrapped>
      )}
      {showGuidePage  && <GuidePage ></GuidePage>}
      {/* {showArticle &&<RdtArticle articleData={articleData} ></RdtArticle>} */}
    </div>
  );
}
