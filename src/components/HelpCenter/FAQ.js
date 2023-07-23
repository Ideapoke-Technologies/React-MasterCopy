import React, { useState } from "react";
import styled from "styled-components";
import Add from "./images/plus.svg";

const QuesBoxWraped = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  overflow-y: auto;
  height: 522px;
`;
const QBox = styled.div`
  border: 1px solid #454545;
  border-radius: 8px;
  background-color: #fff;
  width: 790px;
  padding: 15px;
  height: auto;
  transition: height 2s;
`;
const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const QTxt = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #454545;
  width: 758px;
`;
const AddImg = styled.img`
  cursor: pointer;
`;
const CrossImg = styled.img`
  cursor: pointer;
  transform: rotate(45deg);
`;
const FaqAns = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #454545;
  margin-top: 18px;
`;
const FaqAnsLine = styled.p`
  margin: 0;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #454545;
  margin-top: 25px;
`;
const ContentWrap = styled.div`
  transition: height 2s;
`;

export default function FAQ() {
  const [showText, setShowText] = useState(1);

  return (
    <div>
      <QuesBoxWraped>
        <QBox>
          <TopWrap>
            <div>
              <QTxt>How is the Ideapoke platform different from other research tools in the market? </QTxt>
            </div>
            <div>
              { showText == 1 ?<CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add} onClick={() => setShowText(1)}/> } 
            </div>
          </TopWrap>
          {showText == 1 && (
            <ContentWrap>
              <FaqAns>
                Ideapoke’s new platform is to help researchers find new market opportunities and design their own business and growth opportunities.
              </FaqAns>
              <FaqAnsLine>
                The Ideapoke Platform is built keeping research design at the centre. <b>A new type of collaboration research platform that provides a shared space for researchers and strategists to design their research, work closely with peers as well as experts, and present their findings to senior members.</b>
              </FaqAnsLine>
              <FaqAnsLine>
                Our platform also enables you to <b>continuously monitor trending topics</b> so that you are on top of the latest happenings in the market.
              </FaqAnsLine>
              <FaqAnsLine>
                Coupled with a <b>powerful AI research engine</b> that is trained to not just be exhaustive but also identify information that really matters, the Ideapoke platform has all our customers need to identify their next opportunity.
              </FaqAnsLine>
            </ContentWrap>
          )}
        </QBox>
        <QBox>
          <TopWrap >
            <div>
              <QTxt>What is a design?  </QTxt>
            </div>
            <div>
            { showText == 2 ?<CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add} onClick={() => setShowText(2)}/> } 
            </div>
          </TopWrap>
          {showText == 2 &&  <ContentWrap>
            <FaqAns>
              Designs are research outcomes or the research output for a topic. Users could request Ideapoke to design research for them for specific topics or they can design their research with available templates for their topics of interest.
            </FaqAns>
          </ContentWrap>}
        </QBox>
        <QBox>
          <TopWrap >
            <div>
              <QTxt>How are templates different from designs? </QTxt>
            </div>
            <div>
            { showText == 3 ?<CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add} onClick={() => setShowText(3)}/> } 
            </div>
          </TopWrap>
          { showText == 3 && <ContentWrap>
            <FaqAns>
              Not all research needs to be lengthy. As companies are competing to go to market first with innovations, there is a need to quickly evaluate and make go/no-go decisions on new ideas.
            </FaqAns>
            <FaqAnsLine>
              Our templates facilitate this quick research. These templates are structures or frameworks that provide guidelines to the user to focus research on data points that matter.
            </FaqAnsLine>
          </ContentWrap>}
        </QBox>
        <QBox>
          <TopWrap>
            <div>
              <QTxt>What is the difference between Map & Lite Templates? </QTxt>
            </div>
            <div>
            { showText == 4 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add}  onClick={() => setShowText(4)}/> } 
            </div>
          </TopWrap>
          {showText == 4 && <ContentWrap>
            <FaqAns>
              There are two types of templates:
            </FaqAns>
            <FaqAnsLine>
              <b>Maps:</b>  These templates provide a visual landscape of a market. These maps are updated regularly by our AI engine and provide our users with an up-to-date view of the market. There are 5 Map templates in our template library today. These include: Trend Motion Map, Ecosystem Trends Map, Trend Timeline Map, Company Scouting Map and Innovation Map.
            </FaqAnsLine>
            <FaqAnsLine>
              <b>Lite:</b> These templates offer a pre-organized format for doing research for a customized requirement of your company. Templates help both a less experienced researcher and an expert researcher to do research faster with less time being spent on presentation formatting and thinking about the output layout. Whether it’s technology scouting, supply chain analysis or regulatory policy landscape, Ideapoke has more than 15 templates that covers different types of research.
            </FaqAnsLine>
            <FaqAnsLine>
              You can access the template gallery from your Dashboard > Select a pre-defined template to kickstart your research > View All
            </FaqAnsLine>
            <FaqAnsLine>
              or
            </FaqAnsLine>
            <FaqAnsLine>
              by clicking + New Design on the dashboard
            </FaqAnsLine>
          </ContentWrap>}
        </QBox>
        <QBox>
          <TopWrap >
            <div>
              <QTxt>What are the templates available on the Ideapoke platform? </QTxt>
            </div>
            <div>
            { showText == 5 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add} onClick={() => setShowText(5)}/> } 
            </div>
          </TopWrap>
          {showText == 5 && <ContentWrap>
            <FaqAns>
              We have a growing template library of 20 templates to choose from. Our template library consists of Maps and Lite templates.
            </FaqAns>
            <FaqAns>
              <table>
                <tr>
                  <th>Template Name </th>
                  <th>Template Description </th>
                </tr>
                <tr>
                  <td><b>Trend Ecosystem Map </b></td>
                  <td>A map to manage and track trends across selected ecosystem sources </td>
                </tr>
                <tr>
                  <td><b>Trend Timeline Map  </b></td>
                  <td>A timeline-based view of trends. View recent historical signals that make or break a trend.</td>
                </tr>
                <tr>
                  <td><b>Company Scouting Map  </b></td>
                  <td>A dynamic visual, scouting Map of companies and startups in a particular area.</td>
                </tr>
                <tr>
                  <td><b>New Business Use cases   </b></td>
                  <td>A template to identify new use cases, target industries, and customers for your organization’s technology/product. </td>
                </tr>
                <tr>
                  <td><b>Innovation Map  </b></td>
                  <td>A visual teardown of an emerging area into its main innovation components - related Markets, innovative organizations, trending technologies and upcoming use cases. </td>
                </tr>
                <tr>
                  <td><b>Use Case Analysis </b></td>
                  <td>Identify and summarize information for a long list of use cases for your material, or technology; plan your market expansion and New Application Development.</td>
                </tr>
                <tr>
                  <td><b>Business Model Analysis</b></td>
                  <td>A strategic visual tool that outlines the essential aspects of a business, such as target customers, value proposition, channels, revenue streams, key activities, resources, partnerships, and costs. Thereby helping in designing, analysing, optimizing, and communicating any business model effectively. </td>
                </tr>
                <tr>
                  <td><b>Technology Scouting </b></td>
                  <td>Scouting for technology providers (Startups/Universities) for collaboration, investments, etc. </td>
                </tr>
                <tr>
                  <td><b>M&A Analysis - Business  </b></td>
                  <td>Business analysis of M&A target companies.</td>
                </tr>
                <tr>
                  <td><b>M&A Analysis- Product </b></td>
                  <td>Product analysis of M&A target companies.</td>
                </tr>
                <tr>
                  <td><b>Supply Chain Analysis </b></td>
                  <td>Detailed identification and analysis of the various stages in the supply chain of a product or service.</td>
                </tr>
                <tr>
                  <td><b>Value Chain Analysis </b></td>
                  <td>A process where you can identify the primary and support activities that add value to the final product and then analyze these activities to reduce costs or increase differentiation. </td>
                </tr>
                <tr>
                  <td><b>Market Landscape </b></td>
                  <td>A quick assessment of a specific market within an industry to understand its dynamics.</td>
                </tr>
                <tr>
                  <td><b>Cross-Pollination Analysis  </b></td>
                  <td>Suitable for scouting inspired solutions from adjacent and cross-industry fields by using cross-pollination principles.</td>
                </tr>
                <tr>
                  <td><b>Company Profiling</b></td>
                  <td>Detailed company profile with rich business and technology details.</td>
                </tr>
                <tr>
                  <td><b>Competitive Analysis </b></td>
                  <td>Conduct a thorough competitive analysis to gain insights into market trends and competitor strategies. (capabilities & strategies)</td>
                </tr>
                <tr>
                  <td><b>Regulation & Policies </b></td>
                  <td>An analysis of existing and upcoming regulations, key stakeholders mainly regulatory bodies, regulatory aspects covered in the regulations and the regulations itself </td>
                </tr>
                <tr>
                  <td><b>Vendor Evaluation</b></td>
                  <td>Evaluating different tech/product vendors using tech and business parameters to help you make an informed shortlist.</td>
                </tr>
                <tr>
                  <td><b>Technology Landscape</b></td>
                  <td>Assessment of a technology areas to identify and evaluate relevant technologies' current and future state.</td>
                </tr>
              </table>
            </FaqAns>
          </ContentWrap>}
        </QBox>
        <QBox>
          <TopWrap >
            <div>
              <QTxt>What is Deep Research? </QTxt>
            </div>
            <div>
            { showText == 6 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add} onClick={() => setShowText(6)}/> } 
            </div>
          </TopWrap>
          {showText == 6 && <ContentWrap>
            <FaqAns>
              This is an extensive and exhaustive research activity undertaken by our analysts. We work closely with our customers to deliver a research output that is highly customized to the customer’s business. Such research activities usually take a few months and employ more than one Map and Lite template in the process.
            </FaqAns>
          </ContentWrap>}
        </QBox>
        <QBox>
          <TopWrap>
            <div>
              <QTxt>What are Sample Designs? </QTxt>
            </div>
            <div>
            { showText == 7 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add}  onClick={() => setShowText(7)} /> }
            </div>
          </TopWrap>
          {showText == 7 && <ContentWrap>
            <FaqAns>
              A set of designs prepared by our in-house subject matter experts to help you imagine how the templates will look when filled with data specific to a topic. These sample designs will be regularly updated by Ideapoke. Users can also follow sample designs that are of interest to them and track new developments. Users can also request updates on sample designs.
            </FaqAns>
          </ContentWrap>}
        </QBox>
        <QBox>
          <TopWrap>
            <div>
              <QTxt>How to request Ideapoke for a Map, Lite or Deep Research design? </QTxt>
            </div>
            <div>
            { showText == 8 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add}  onClick={() => setShowText(8)}/> }
            </div>
          </TopWrap>
          {showText == 8 && <ContentWrap>
            <FaqAns>
              Ideapoke is your partner for research. Once you have signed up, simply drop us a design request and our analysts and AI will start working to deliver your request.
            </FaqAns>
            <FaqAnsLine>
              <b>Step 1: Select the right template for your business needs</b>
            </FaqAnsLine>
            <FaqAnsLine>
              Click +New Design on the dashboard.
            </FaqAnsLine>
            <image src=""></image>

            <FaqAnsLine>
              The template gallery will open. Browse from our library of 20+ templates and select one that best suits your needs.
            </FaqAnsLine>
            <image src=""></image>
            <FaqAnsLine>
              To help you decide on the right template, you may first preview a template for more information. The template preview page helps you:
            </FaqAnsLine>
            <FaqAnsLine>
              <ul>
                <li>
                  Understand what the template is about,
                </li>
                <li>
                  in what situations the template can be used,
                </li>
                <li>
                  which teams typically find it useful, and
                </li>
                <li>
                  what you can achieve with the template
                </li>
              </ul>
            </FaqAnsLine>
            <FaqAnsLine>
              You will also find Sample Designs related to the template you are previewing. View these sample designs to understand how designs are built from templates for a specific topic.
            </FaqAnsLine>
            <image src=""> </image>
            <FaqAnsLine>
              Templates are also categorized By Solution, By Team and By Research Goal to help you find the right template.
            </FaqAnsLine>
            <FaqAnsLine>
              In case, you need help choosing the right template, you can contact us any time using the Contact Us page in Help Centre or contact your assigned Ideapoke Customer Success representative through phone or email or drop us an email at customersuccess@ideapoke.com
            </FaqAnsLine>
            <FaqAnsLine>
              Once you have decided on a template, click Design, and the template will be loaded on canvas.
            </FaqAnsLine>
            <image src=""></image>
            <FaqAnsLine>
              You may change the template by clicking on <image src="icon" />Browse Template on the left toolbar.
            </FaqAnsLine>
            <FaqAnsLine>
              For now, you can only load one template on a canvas at a time.
            </FaqAnsLine>
            <FaqAnsLine>
              The next steps vary depending on the type of template you have selected.
            </FaqAnsLine>
            <FaqAnsLine>
              <b>Step 2a: Request Ideapoke for a Map </b>
            </FaqAnsLine>
            <FaqAnsLine>
              <ol>
                <li>
                  Click Request Ideapoke
                </li>

                <li>
                  Enter a topic and Search for maps on your topic from our existing repository of maps.
                  <image src="Screenshot of Request Ideapoke "> </image>
                </li>
                <li>Browse a list of Maps that match your search. Click to view a map.
                  <image src="Screenshot of search results "></image>
                </li>
                <li>If you don’t find a map relevant to you, send us a request and Ideapoke will prepare a map on the topic of your choice.
                </li>
                <li>To send us a request, all you need to do is input the topic name and hit Submit.

                </li>
              </ol>
            </FaqAnsLine>
            <FaqAnsLine>
              <image src="Screenshot of Request Ideapoke form "></image>
              Once you submit the request, our customer success team will get in touch with you to ensure we capture your requirements and guide you through the process.
            </FaqAnsLine>
            <FaqAnsLine>
              Note:
              <ul>
                <li>
                  Your topic can be as broad or narrow as you wish. For example, ‘Generative AI’ is a broad topic. But ‘Generative AI in Healthcare’ is narrow and more specific. Please bear in mind that the more specific you are, the more specific our research design will be.
                </li>
                <li>
                  One request can have one template and one topic at a time. Topics given as say, ‘Generative AI and Clean Technology’ are not valid. You will be allowed to submit such a topic, but our customer success team will get in touch and help you with your request.
                </li>
              </ul>
            </FaqAnsLine>
            <FaqAnsLine>
              <b>Step 2b: Request Ideapoke for a Lite Research Design </b>
              <ol>
                <li>
                  Click Request Ideapoke
                </li>
                <li>
                  Give us a Requirement Title and provide details on the Research request.
                </li>
                <li>
                  Click Submit.
                </li>
              </ol>
            </FaqAnsLine>
            <FaqAnsLine>
              <image src="Screenshot of Request Ideapoke form "></image>
            </FaqAnsLine>
            <FaqAnsLine>
              Once you submit the request, our customer success team will get in touch with you to ensure we capture your requirements and guide you through any concerns.
            </FaqAnsLine>
            <FaqAnsLine>
              Note:
              <ul>
                <li>
                  Your topic can be as broad or narrow as you wish. For example, ‘Generative AI’ is a broad topic. But ‘Generative AI in Healthcare’ is narrow and more specific. Please bear in mind that the more specific you are, the more specific our research design will be.
                </li>
                <li>
                  In the description, feel free to add more details on the research request. You can give us some context to the request or talk about what information is more relevant to you compared to others. For example – Planning an adjacent market strategy, financials of companies are of particular interest etc. These details will help us understand your request better.
                </li>
                <li>
                  One request can have one template and one topic at a time. Topics given as say, ‘Generative AI and Clean Technology’ are not valid. You will be allowed to submit such a topic, but our customer success team will get in touch and help you with your request.
                </li>
              </ul>
            </FaqAnsLine>
            <FaqAnsLine>
              <b>Step 2c: Request Ideapoke for a Deep Research Design </b>
            </FaqAnsLine>
            <FaqAnsLine>
              To post a new requirement for Deep Research services
              <ol>
                <li>
              On Dashboard > My Designs > Deep Research by Ideapoke
                </li>
                <li>
                  Click + Post Requirement
                </li>
                <li>
                  Enter a Requirement Title and provide some details on the Research request.
                </li>
                <li>
                  Click Submit.
                </li>
              </ol>
              <image src="Screenshot of Request Ideapoke form "></image>
            </FaqAnsLine>
            <FaqAnsLine>
              Once you submit the request, our customer success team will get in touch with you to ensure we capture your requirements without any misses.
            </FaqAnsLine>
            <FaqAnsLine>
              Note:
              <ul>
                <li>
                  Your topic can be as broad or narrow as you wish. For example, ‘Generative AI’ is a broad topic. But ‘Generative AI in Healthcare’ is narrow and more specific. Please bear in mind that the more specific you are, the more specific our research design will be.
                </li>
                <li>
                  In the description, feel free to add more details on the research request. You can give us some context to the request or talk about what information is more relevant to you compared to others. For example – Planning an adjacent market strategy, financials of companies are of particular interest etc. These details will help us understand your request better.
                </li>
                <li>
                  One request can have one template and one topic at a time. Topics given as say, ‘Generative AI and Clean Technology’ are not valid. You will be allowed to submit such a topic, but our customer success team will get in touch and help you with your request.
                </li>
              </ul>

            </FaqAnsLine>
          </ContentWrap>}
        </QBox>

        <QBox>
          <TopWrap >
            <div>
              <QTxt>How can I track the progress of my design request?  </QTxt>
            </div>
            <div>
            { showText == 9 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add} onClick={() => setShowText(9)}/> }
            </div>
          </TopWrap>
          {showText == 9 && <ContentWrap>
            <FaqAns>
            Once you have submitted a Design request, a Design is created on your Dashboard under My Designs > Designs by Ideapoke
            </FaqAns>
            <FaqAnsLine>
              Text BoxYou can track the status of your request as follows:
            </FaqAnsLine>
            <FaqAnsLine>
              User submits the request.
            </FaqAnsLine>
            <FaqAnsLine>
              Text BoxOur Research analyst accepts the request and starts the Design.
            </FaqAnsLine>
            <FaqAnsLine>
              Ideapoke delivers the requested design.
            </FaqAnsLine>
            <FaqAnsLine>
              Invalid requests.
            </FaqAnsLine>
            <FaqAnsLine>
              The status of a new request is displayed on your dashboard.
            </FaqAnsLine>
            <image src="Screenshot of My Designs > Designs by Ideapoke"></image>
            <FaqAnsLine>
              When your design status is ‘Processing Request’
            </FaqAnsLine>
            <FaqAnsLine>
              You can access the request details and Modify the request.
            </FaqAnsLine>
            <image src=""></image>
            <FaqAnsLine>
              When your design is ‘In Progress’
            </FaqAnsLine>
            <FaqAnsLine>
              <ul>
                <li>You can access the request details, but modification of the request is restricted from this point forward. </li>
                <li>You can watch your research come alive as our analysts and AI, design your research. </li>
                <li>
                  You could also make edits, share and interact with our analysts & other members of your network at this stage.
                </li>
              </ul>
            </FaqAnsLine>
            <image src="Screenshot of In Progress  "></image>
            <FaqAnsLine>
              When your ‘Design is Ready’
            </FaqAnsLine>
            <FaqAnsLine>
              <ul>
                <li>When our Analysts have completed working on a Design, the design will move to ‘Design is Ready’ status. </li>
                <li>You could also share and interact with our analysts & other members of your network at this stage. </li>
                <li>
                  You can make edits to a design in this status, by creating a private and duplicate copy of the design. (More on this is Creating and Editing a design)
                </li>
              </ul>
            </FaqAnsLine>
            <image src=""></image>
            <FaqAnsLine>
              Once the Design is Ready, you can request for an update to the design at any point of time. Simply click ‘Request Update’
            </FaqAnsLine>
            <FaqAnsLine>
              The design status will change to ‘Processing Request’ again and the design delivery process repeats.
            </FaqAnsLine>
            <FaqAnsLine>
              When your Design is ‘Pending’
            </FaqAnsLine>
            <FaqAnsLine>
              After your request is submitted, if our analysts are unable to take your request any further, the Design request will move to ‘Pending’.
            </FaqAnsLine>
            <image src=""></image>

          </ContentWrap>}
        </QBox>

        <QBox>
          <TopWrap>
            <div>
              <QTxt>How can I interact with an Ideapoke Analyst while Ideapoke works on my request? </QTxt>
            </div>
            <div>
            { showText == 10 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add}  onClick={() => setShowText(10)}/> }
            </div>
          </TopWrap>
          {showText == 10 && <ContentWrap>
            <FaqAns>
              Work with our research analysts and your colleagues, through the research design process. Collaborate and course correct (if needed) so that the research output yields in maximum results.
            </FaqAns>
            <FaqAnsLine>
              Add Comments
            </FaqAnsLine>
            <FaqAnsLine>
              To add a comment, click <image src="icon"></image> Comment on the header toolbar.
            </FaqAnsLine>
            <FaqAnsLine>
              Drag and drop the comment anywhere on the canvas, @mention Ideapoke or another colleague, type in your comment, and press Enter.
            </FaqAnsLine>
            <FaqAnsLine>
              The tag to use to interact with an Ideapoke Analyst is @IdeapokeAnalyst. This is the first tag that will come up in the comment dropdown when you type ‘@’.
            </FaqAnsLine>
            <image src="Screenshot of Adding Comment with Ideapoke Analyst tag"></image>
            <FaqAnsLine>
              You can also add comments from the object’s context menu, clicking the three dots and selecting Add a comment.
            </FaqAnsLine>
            <image src="Screenshot of Adding Comment using the object’s context menu "></image>
            <FaqAnsLine>
              Or right-click the object and Add a comment.
            </FaqAnsLine>
            <FaqAnsLine>
              You can also reply to a comment and a thread would be created.
            </FaqAnsLine>
            <image src="Screenshot of Comment thread.  "></image>
            <FaqAnsLine>
              You can also edit and delete any comment or thread that you have added on the canvas. Deleting another user’s comment or thread is not possible.
            </FaqAnsLine>
            <image src="Screenshot of Editing and Deleting dropdown  "></image>
            <FaqAnsLine>
              When you click <image src="icon"></image> Comment on the header toolbar.
            </FaqAnsLine>
            <FaqAnsLine>
              Design History – Comment panel opens up on the left of the canvas. Here you can see the history of comments on the panel. Clicking on any comment on the panel navigates you to the point on the canvas where the comment is dropped.
            </FaqAnsLine>
            <FaqAnsLine>
              You also have options to filter comments that are unread and filter by @mentions.
            </FaqAnsLine>
            <image src="Screenshot of Comment History Panel  "></image>
            <FaqAnsLine>
              To close the Design History – Comment panel, simply click the cross icon in the top right corner of the panel.
            </FaqAnsLine>
            <FaqAnsLine>
              <b>Ask an Analyst</b>
            </FaqAnsLine>
            <FaqAnsLine>
              Switch to the Ask an Analyst tab on the Comment Panel Tab.
            </FaqAnsLine>
            <FaqAnsLine>
              Here you can also engage in a public chat with an analyst. The Analyst could also reach out to you from this tab.
            </FaqAnsLine>
            <FaqAnsLine>
              All your comment threads with @Ideapoke Analyst mentions will also appear here.
            </FaqAnsLine>
            <image src="Screenshot of Ask an Analyst tab on Comment History Panel with chat "></image>
            <FaqAnsLine>
              To close the Design History – Comment panel, simply click the cross icon in the top right corner of the panel.
            </FaqAnsLine>

          </ContentWrap>
          }
        </QBox>

        <QBox>
          <TopWrap>
            <div>
              <QTxt>How can I download a design?  </QTxt>
            </div>
            <div>
            { showText == 11 ? <CrossImg src={Add} onClick={()=>setShowText(0)}/> : <AddImg src={Add}  onClick={() => setShowText(11)}/> }
            </div>
          </TopWrap>
          {showText == 11 && <ContentWrap>
            <FaqAns>
              <b>Download Design:</b>  You can download the complete Design as a PDF or Image file using the [Icon] Download Design option in the header toolbar.
            </FaqAns>
            <image src="Screenshot of Download icon highlighted on Canvas "></image>
            <FaqAnsLine>
              Select your preferred file format for download (PDF or Image – PNG, JPG). Click Download.
            </FaqAnsLine>
            <image src="Screenshot of Download popup highlighted on Canvas "></image>
            <FaqAnsLine>
              Each frame will become a separate page in the saved PDF document. Objects outside a frame will not appear in the PDF document
            </FaqAnsLine>
            <FaqAnsLine>
              <b>Download Frame(s):</b> You can also select one or more frames that you want to download. Click Download.
            </FaqAnsLine>
            <image src="Screenshot of Download popup highlighted on Canvas "></image>
            <FaqAnsLine>
              Download options are also available on the frame’s context menu.
            </FaqAnsLine>
            <FaqAnsLine>
              Select frames. Click the three dots<image src=""></image>> on the frame’s context menu and click Download as PNG or Download as JPG
            </FaqAnsLine>
            <image src="Screenshot of frame context menu"></image>

          </ContentWrap>}
        </QBox>
      </QuesBoxWraped>
    </div>
  );
}
