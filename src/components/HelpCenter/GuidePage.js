import React,{useState , useEffect} from 'react'
import styled from 'styled-components'
import Temp from "./images/temp1.png"
import Temp1 from "./images/temp3.png"
import Scard from './Scard'
import GuideListPage from './GuideListPage'

const GuideWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 24px;
    row-gap: 20px;
    overflow-y: auto;
    height: 532px;
`

export default function GuidePage(props) {

  const [guidePageContent, setGuidePageContent] = useState();

  const FetchGuidePageContent = async () => {
    const obj = {
      categoryid: 2,
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
      console.log("DataGuide--->", data);
      setGuidePageContent(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchGuidePageContent();
  }, []);

  return (
    <div>
        <GuideWrap>
            <Scard Detail="Video - 2min" Title="Product Pitch"></Scard>
            <Scard Detail="Video - 2min" Title="Product Tour"></Scard>
            <Scard BgImg={Temp} Detail="Tutorial - 6 Steps" Title="Key Platform Concepts"></Scard>
            <Scard BgImg={Temp1} Detail="Tutorial - 5 steps" Title="Dashboard Tour"></Scard>
            <Scard BgImg={Temp} Detail="Tutorial - 6 Steps" Title="Canvas Tour"></Scard>
            <Scard Detail="Video - 1 min" Title="Onboarding Video"></Scard>
            <GuideListPage Title="Design & Collaborate" Detail="Article - 2 mins read"></GuideListPage>
            <GuideListPage Title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." Detail="Article - 2 mins read"></GuideListPage>
            <GuideListPage Title="Lorem Ipsum is simply dummy text" Detail="Article - 2 mins read"></GuideListPage>
            <GuideListPage Title="Lorem Ipsum is simply dummy text of the printing and typesetting" Detail="Article - 2 mins read"></GuideListPage>
            <GuideListPage Title="Design & Collaborate Lorem Ipsum is simply dummy" Detail="Article - 2 mins read"></GuideListPage>
        </GuideWrap>
    </div>
  )
}
