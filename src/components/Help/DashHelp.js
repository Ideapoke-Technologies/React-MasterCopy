import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Help.css";
import styled from "styled-components";
import { P } from "../CommonStyle";
import OdyssysView from "./images/login-view-odyssey-lite.png";
import SigninPage from "./images/signin-page.png";
import IdeapokePlatform from "./images/ideapoke-platform-dashboard.png";
import AllTemplete from "./images/view-all-templates.png";
import TempleteView from "./images/template-view-offerings.png";
import Templete from "./images/template-view.png";
import TempleteFormat from "./images/template-format.png";
import Design from "./images/design.png";
import TempleteForDesign from "./images/template-format-design.png";
import TempleteContent from "./images/template-format-content-filled.png";
import TemplateTrend from "./images/template_trend.png";
import Designprocess from "./images/design-process.png";
import MyDesign from "./images/my_design.png";
import Requestdesign from "./images/request-design-button.png";
import Submitdesign from "./images/submit-design-requirement.png";
import ProcessingRequest from "./images/processing_request.png";
import SelectTemplate from "./images/select_template.png";

import Designready from "./images/design-is-ready.png";
import Contentdesign from "./images/view-content-within-design.png";
import Contentsecond from "./images/view-content-within-design-second.png";
import Prrtfoliobefore from "./images/portfolio-upgrade-before.png";
import Prrtfolionow from "./images/portfolio-upgrade-now.png";
import Prrtfoliodone from "./images/portfolio-upgrade-done.png";
import Signalnavigation from "./images/signalz-navigation-button.png";
import Signalzhome from "./images/signalz-homepage.png";
import Customisereport from "./images/customize-report-tool.png";
import Projectdetailsscreen from "./images/project-design-to-view.png";
import Projectresearch from "./images/deep-research-all-projects.png";
import Projectdetails from "./images/project-detail-screen.png";
import NewDeepResearch from "./images/new_deep_research.png";
import NewDeepResearchSecond from "./images/new_deep_research-second.png";

import Analysysconversation from "./images/analyst-conversation-icon.png";
import Chatbox from "./images/chat-box.png";
import Designdownload from "./images/download-design.png";
import Designpopup from "./images/download-design-popup.png";
import Membersection from "./images/member-section-link.png";
import Memberdetails from "./images/member-detail-page.png";
import Templetedesign from "./images/template-design-image.png";
import Templetecomunity from "./images/template-design-community.png";
import Templetetwodesign from "./images/template-design-design.png";
import TempleteBydesign from "./images/templete_by_design.png";

import Preminumtemplete from "./images/preminum-template-one.png";
import Preminumtempletesecond from "./images/preminum-template-second.png";
import Visions from "./images/version.png";
import Update from "./images/updates.png";
import InnovationMaps from "./images/innovation_maps.png";
import InnovationMapsSecond from "./images/innovation_maps_second.png";
const VideoWrap = styled.div`
  margin: 0 auto;
  width: 900px;
  /* 90% resolution */
  @media screen and (min-width: 1400px) {
    width: 900px;
  }
  /* 80% resolution */
  @media (min-width: 1524px) and (max-width: 1920px) {
    width: 909px;
  }
`;
const HelpHeader = styled.div`
  font-family: "Poppins";
  font-size: 26px;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-top: 27px;
  margin-bottom: 20px;
  margin-right: 47px;
  /* 90% resolution */
  @media screen and (min-width: 1400px) {
    margin-right: 95px;
  }
  /* 80% resolution */
  @media (min-width: 1524px) and (max-width: 1920px) {
    margin-right: 195px;
  }
`;
const Desc = styled.li`
  font-size: 13px;
  line-height: 2.7;
  color: #000;
  font-weight: Normal;
  letter-spacing: 1px;
  text-align: left;
  font-family: "Poppins";

  padding-top: 12px;
`;
const Wraperimage = styled.div``;
const Img = styled.img`
  width: 100%;
`;
const Img2 = styled.img`
  width: 80%;
`;
const Textwraper = styled.div`
  margin: 1px 0 20px 0;
  line-height: 38px;
`;
const Textwraper2 = styled.div`
  line-height: 30px;
`;
export default function DashHelp() {
  return (
    <div>
      <VideoWrap>
        <video width="808" height="454" controls>
          <source
            src="https://ideapoke.com/ipimages/enterprise/images/odyssy-lite/Platform_On-Boarding.mp4"
            type="video/mp4"
          />
        </video>
      </VideoWrap>

      <HelpHeader>Frequently Asked Questions</HelpHeader>

      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Ideapoke's Solutions Overview
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc>
              Many types of research are supported by Ideapoke. Ideapoke has
              created “Research Templates” to support our researchers to start
              research easily.
            </Desc>
            <Desc>
              <span style={{ fontWeight: "700" }}>Maps:</span> Ideapoke provides{" "}
              <span style={{ fontWeight: "700" }}>Maps</span> which are visual
              research outputs for constant monitoring of Market opportunities
              (via trends, usecases or companies). 
            </Desc>
            <Desc>
              <span style={{ fontWeight: "700" }}>Lite Research:</span> Ideapoke
              also provides{" "}
              <span style={{ fontWeight: "700" }}>Lite Research</span> solutions
              to help you find Business Opportunities for specific topics or
              products.
            </Desc>
            <Desc>
              Currently, we are offering 19 different Templates for your
              research topics.
            </Desc>
            <Desc>
              Templates and Designs are placed within the Ideapoke Platform
              dashboard.
            </Desc>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to Login to view Deep research and Designs?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link to Sign in:</span>{" "}
              <a href="#"> https://www.ideapoke.com/signin.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation Path:</span>Copy
              paste the link in browser >> Add registered work email ID >> Add
              password>> click on Login button. <br></br>Users who have access
              to the tool can login with their registered email IDs. If users do
              not have access to the tool, then do follow the signup follow
              instructions. In case, if user has forgotten the password, then do
              click on the "Forgot Password" button and enter your registered
              email ID. If user has forgotten the registered email address, then
              please contact us [Info@ideapoke.com] to retrieve the email ID.
            </Desc>

            <P
              text="Click on Sign in"
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>

            <Img src={OdyssysView}></Img>
            <P
              text="Enter Registered Email ID and Password and click on Login."
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>

            <Img src={SigninPage}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Dashboard – Templates, Sample Design, My Designs
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link:</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation Path:</span> Login
              to Ideapoke >> Dashboard >> Templates, Sample Design, My Designs.
              <br></br>
              Once the user’s login to the platform, then they will be navigated
              to dashboard. Dashboard is a centralized place where user can view
              templates and designs.
              <br></br>
              <span style={{ fontWeight: "700" }}>Dashboard:</span>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>a. All Designs:</span>This is
              a view where users can see Recommended templates, Sample designs,
              My designs, Other apps and network name in a single screen.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                b. Recommended Templates:
              </span>
              You can browse a List of top, recently added research templates
              here. These templates contain pre-defined format of slides with no
              content filled. Templates are categorized as Map and Lite
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>c. Community designs:</span>{" "}
              Ideapoke curated and published designs for all the templates will
              be added under sample designs.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>d. My Designs:</span> Consists
              of customized research work done for you. My designs have two
              segments - Designed by Ideapoke and Deep Research
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                e. Designed by Ideapoke:
              </span>{" "}
              This has all the requested maps and Lite research solutions. You
              can view these designs in a canvas view by clicking on each
              design.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>f. Deep Research: </span>{" "}
              These are special customized Deep research contents. On clicking
              the designs, you will be navigated to the details page.<br></br>
              Note: Not available for TRIAL users.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                g. Portfolio Management:{" "}
              </span>{" "}
              User will have to subscribe to this service to get access to
              premium features like Contract-wise project lists & charts with
              status & other details, Project Usage analytics, Premium support
              for raising requests to receive Invoices, contract documents,
              package-related queries, upgrades, etc{" "}
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>h. Other Apps: </span>This
              contains applications like Portfolio Management and Customize
              Report Tool. Currently, user requires to subscribe to these
              services to get access to Customize Report Tool and Portfolio
              Management. Contact us to get access (info@ideapoke.com){" "}
            </Desc>
            <P
              text="Ideapoke Platform Dashboard:"
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>
            <Img src={IdeapokePlatform}></Img>
            <P
              text="Click on View all to view all the Templates."
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>
            <Img src={AllTemplete}></Img>
            <P
              text="Click on the Template to view offerings on each slides."
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>
            <Img src={TempleteView}></Img>
            <P
              text="Template View"
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>
            <Img src={Templete}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to view Templates and Designs?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link:</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Navigation for Templates:
              </span>
              Login to Ideapoke >> Dashboard >> Under Recommended Templates >>
              Click on templates to view.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation for Designs:</span>
              Login to Ideapoke >> Dashboard >> Sample Designs and/or My Designs
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Designs and Templates</span>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Templates</span>
            </Desc>
            <P
              text="Templates contain a pre-defined format of slides with no content filled. They are categorized as Maps and Lite research solution. "
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <P
              text=""
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                Currently, Ideapoke is offering 15 different types of Lite
                research templates - Business Model Analysis, Competitive
                Analysis, Cross Pollination Technology Scouting, Market
                Analysis, M&A Analysis – Product, M&A Analysis – Business,
                Company Profiling, Regulations and Policies, Technology
                Landscape, Technology Scouting, Usecase Analysis, New Business
                Usecase, Value Chain Analysis, Vendor Evaluation Analysis,
                Supply Chain Analysis.
              </span>{" "}
            </Desc>
            <P
              text="Maps - Trend motion Map, Trend Ecosystem Map, Trend Timeline Map, Company Scouting Map. "
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                These templates are categorized as Early-Stage Research,
                Technology Research, Usecase Research, Company Research, Market
                Research
              </span>{" "}
            </Desc>

            <Desc>
              <span style={{ lineHeight: "3" }}>
                Early-Stage Research: Templates that give a quick summarized
                view of a research topic.
              </span>{" "}
            </Desc>
            <Desc>
              <span style={{ lineHeight: "3" }}>
                Technology Research: Templates that build an understanding of
                technologies, the companies developing them and how they can be
                applied to various industries.
              </span>{" "}
            </Desc>
            <Desc>
              <span style={{ lineHeight: "3" }}>
                Usecase Research: Templates that focus on use cases of
                technologies especially useful for new business development.
              </span>{" "}
            </Desc>
            <Desc>
              <span style={{ lineHeight: "3" }}>
                Company Research: Templates that focus on building company
                profiles, to get a closer look at their funding, products,
                financials and much more
              </span>{" "}
            </Desc>
            <Desc>
              <span style={{ lineHeight: "3" }}>
                Market Research: Templates that provide an understanding of a
                market, its trends, drivers and competitive landscape.
              </span>{" "}
            </Desc>
            <Img src={TempleteForDesign}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Template Format</span>
            </Desc>
            <Img src={TempleteFormat}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Designs</span>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                Templates with content for a topic form a design. Designs are
                segmented into Sample Designs and My Designs<br></br>
                Templates + Research data = Design. Designs are segmented into
                Sample Designs and My Designs.
              </span>{" "}
            </Desc>
            <Img src={Design}></Img>
            <P
              text="Design with Content filled."
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>
            <Img src={TempleteContent}></Img>
            <Img src={TemplateTrend}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to raise Request data?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link:</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation:</span> Login to
              Ideapoke >> Dashboard >> Under Recommended Templates >> Click on
              your desired template to view >> Click on Request for Data button
              >> Enter title and description >> Click on Submit
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation:</span> Login to
              Ideapoke >> Dashboard >> Under My design – Designed by Ideapoke,
              click on “Request design” >> Select template by clicking the on
              your desired template >> Click on Request for Data button >> Enter
              title and description >> Click on Submit.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                User can view the template format and raise a request for data.
                Ideapoke will initially contact the requester to analyse the
                requirement and deliver the requirement within the design. This
                design can be viewed under my designs. These raised requests
                will visible under My Designs - Designed by Ideapoke.
              </span>
            </Desc>
            <P
              text="Status you see on My Designs:"
              color="#000000"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="-2.7"
            ></P>
            <Desc style={{ listStyleType: "none" }}>
              <span>a. User submits the request: PROCESSING REQUEST </span>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                b. Ideapoke Research analyst accepts the request and starts to
                build designs and delivers the design: IN PROGRESS{" "}
              </span>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                c. . Ideapoke completes the requested design: DESIGN IS READY
              </span>
            </Desc>
            <Img2 src={Designprocess}></Img2>
            <Img2 src={MyDesign}></Img2>
            <P
              text="Note: At the time of design having the status as “processing request” user can edit the request and resend the request.  "
              processing
              request
              user
              can
              edit
              the
              request
              and
              resend
              the
              request
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation</span> Login to
              Ideapoke >> Dashboard >> Under “My design” select “Designed by
              Ideapoke” >> you can see the created request, click on it >> Click
              on Edit Request button >> Edit the title and description >> click
              on Submit.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on Request for Data Button
              </span>
            </Desc>
            <Img src={Requestdesign}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Enter the Topic Title and description as requirement for design.
              </span>
            </Desc>
            <Img src={Submitdesign}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on request with status as Processing Request for Data
              </span>
            </Desc>
            <Img src={ProcessingRequest}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                User can also request for design by clicking on Request design
                and select suitable template.
              </span>
            </Desc>
            <Img src={SelectTemplate}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How is customer’s request fulfilled?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link:</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation:</span> Login to
              Ideapoke >> Dashboard >> Under “My design” select “Designed by
              Ideapoke” >> You will see design with status “In Progress” and /
              Or “Design is ready” >> Click on the design to view the content As
              we know that the request is first analysed and then our analyst
              will start working on building the requirement as Design. The
              design’s requirement is fulfilled and then published to requester.
              User can consume the published design by viewing the content or
              download. The published design will have a status and with “Design
              is Ready” this indicates that the design delivered as per the
              requirement. The download of design can be done in English and
              Japanese languages.
            </Desc>
            <P
              text="Note: The time taken to fulfil the requirement is 2 weeks after the request is accepted by us.  "
              processing
              request
              user
              can
              edit
              the
              request
              and
              resend
              the
              request
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on the design which as status as “Design is Ready”.
              </span>
            </Desc>
            <Img src={Designready}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                View of the content within the design
              </span>
            </Desc>
            <div style={{ marginBottom: "20px" }}>
              <Img src={Contentdesign}></Img>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is Portfolio Management? and how to subscribe for Portfolio
              Management?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link:</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Navigation to request for access:
              </span>{" "}
              Login to Ideapoke >> Dashboard >> Click on Portfolio Management >>
              Click Upgrade Now button.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Navigation to view Portfolio Management:
              </span>{" "}
              Login to Ideapoke >> Dashboard >> Click on Portfolio Management
            </Desc>
            <Textwraper>
              <P
                text="This is a portfolio management for designs. The service offerings are:  "
                processing
                request
                user
                can
                edit
                the
                request
                and
                resend
                the
                request
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
              <Desc>
                <span>
                  Project Stages and Flow – Learn about the project milestones,
                  status, timelines, & flows in one place.
                </span>
              </Desc>
              <Desc>
                <span>
                  Project Usage Analysis – Know the usage analysis of your
                  project in short intervals.
                </span>
              </Desc>
              <Desc>
                <span>
                  Contract Overview – Evaluate the progress of all your projects
                  within a single contract.
                </span>
              </Desc>
              <Desc>
                <span>
                  Regular Status Updates – Stay updated with frequent updates
                  and notifications.
                </span>
              </Desc>
            </Textwraper>
            <Img src={Prrtfoliobefore}></Img>
            <div style={{ lineHeight: "34px" }}>
              <P
                text="Note: User will have to subscribe to this service to get access to Portfolio management features – Contact us for more information at info@ideapoke.com"
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
            </div>

            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on “Upgrade Now” to subscribe to Portfolio Management
                services.
              </span>{" "}
            </Desc>
            <Img src={Prrtfolionow}></Img>
            <Img src={Prrtfoliodone}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        {/* <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to navigate to "Signalz"?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc>
              <span style={{ fontWeight: "700" }}>
                Link to request for access
              </span>{" "}
              <a href="#"> https://www.ideapoke.com/signalz/signup.html</a>
            </Desc>
            <Desc>
              <span style={{ fontWeight: "700" }}>NLink to access:</span>{" "}
              <a href="#"> https://www.ideapoke.com/signalz/search.html</a>
            </Desc>
            <Desc>
              <span style={{ fontWeight: "700" }}>Navigation to access:</span>{" "}
              Login to Ideapoke >> Dashboard >> under Other Apps click on
              Signalz. A "Research Enablement Tool" that allows users to get
              quick insights on their topics of interest. Existing solutions in
              the market offers unorganized data, which makes it difficult for
              researchers to consume data. Signalz solves this problem by
              providing structured relationships between different types of data
              like Markets, Technologies, Organizations, and Usecases. The
              correlated data are represented on innovation maps. User can share
              market insights with their colleagues.
            </Desc>
            <Desc>
              <span style={{ lineHeight: "40px" }}>
                Note: Signalz will be accessible to users who have access to it.
                Contact us for more information and access at
              </span>
            </Desc>
            <P text="info@ideapoke.com" letterSpacing="-2.7"></P>

            <Desc>
              <span style={{ fontWeight: "700" }}>
                Click on Signalz navigation button
              </span>
            </Desc>

            <Img src={Signalnavigation}></Img>
            <Desc>
              <span style={{ fontWeight: "700" }}>
                This is the home page of Signalz.
              </span>
            </Desc>
            <Img src={Signalzhome}></Img>
          </AccordionItemPanel>
        </AccordionItem> */}

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to navigate to “Customize Report Tool”?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#">
                {" "}
                https://www.ideapoke.com/reportlisting.html?navigation=Workspace
              </a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation</span> Login to
              Ideapoke >> Dashboard >> Click on Customize Report Tool
            </Desc>

            <P
              text="User can view and convert language to Japanese for all delivered designs. User can also upload design and convert them Japanese language.  "
              letterSpacing="-2.7"
            ></P>
            <Textwraper2>
              <P
                text="Note:Customize Report Tool. will be accessible to users who have access to it. Contact us for more information and access at info@ideapoke.com "
                processing
                request
                user
                can
                edit
                the
                request
                and
                resend
                the
                request
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
            </Textwraper2>

            <Img src={Customisereport}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to navigate to Deep Research Projects?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation</span> Login to
              Ideapoke >> Dashboard >> My Design >> Click on Deep Research >>
              Click on project Users who have opted for deep research projects
              can view them from the new dashboard. Existing users can access
              their delivered projects in new dashboard. On click of the project
              user will be navigated to current workspace screens. Here users
              can access other features as well.
            </Desc>
            <P
              text="Retained Features: Project List, Collaboration, Documents, my meetings, Invite, Notes, Pending activities, Teams, Members."
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>

            <Desc>
              <span style={{ fontWeight: "700" }}>
                Click on Deep Research tab to view all your current and old
                projects.
              </span>
            </Desc>

            <Img src={Projectresearch}></Img>
            <Desc>
              <span style={{ fontWeight: "700" }}>
                Click on the design to view the details of the deep research
                content.
              </span>
            </Desc>
            <Img src={Projectdetailsscreen}></Img>
            <Desc>
              <span style={{ fontWeight: "700" }}>
                This is the project details screen. You can also access all your
                other features from the left panel.
              </span>
            </Desc>
            <Img src={Projectdetails}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to request for new Deep research?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation</span> Login to
              Ideapoke >> Dashboard >> My Design >> Click on Deep Research >>
              Click on Post requirement >> Add title and description >> Click on
              Submit User can request for deep research content by clicking on
              the Post requirement button. Input the title and description for
              the deep research content and click on submit. Once the request is
              sent, Ideapoke team will communicate for further due diligence.
            </Desc>

            <Img src={NewDeepResearch}></Img>

            <Img src={NewDeepResearchSecond}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to chat with Ideapoke analyst?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation 1: </span>: Login
              to Ideapoke >> Dashboard >> My Design >> Click on Design >> click
              on conversation button >> Start conversation.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation 2: </span>Login to
              Ideapoke >> Dashboard >> Sample Design >> Click on Design >> Click
              on conversation button >> Start conversation.
            </Desc>
            <P
              text="User can conversate with our analyst. Though this is a live conversation user can except delay in reply as it is not replied by the system. The pervious chat can be viewed within the chat window. The option to chat is available on all the requested for designs and delivered designs. "
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>

            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on Conversation icon to start a chat with our analyst.
              </span>
            </Desc>

            <Img src={Analysysconversation}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                To start a conversation, type your query and send it. You will
                see your comment appearing in the chat window. Our analyst’s
                reply is also seen in the same window.
              </span>
            </Desc>
            <Img src={Chatbox}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How to download designs?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#"> https://www.ideapoke.com/rdt/myspace.html</a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation 1: </span> Login to
              Ideapoke >> Dashboard >> My Design >> Click on Design with status
              “Design is ready” >> Click on download button >> Select PDF or PPT
              >> Select language either English or Japanese >> Click on Download
              button.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation 2: </span>Login to
              Ideapoke >> Dashboard >> Sample Design >> Click on Design with
              status “Design is ready” >> Click on download button >> Select PDF
              or PPT >> Select language either English or Japanese >> Click on
              Download button. User can download the design in PDF or PPT
              format. Designs can be converted to Japanese language and
              downloaded.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on Download button.
              </span>
            </Desc>

            <Img src={Designdownload}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on the suitable format for downloading file, select you
                preferred language and click on Download button.
              </span>
            </Desc>
            <Img src={Designpopup}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How to view Members?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#">
                {" "}
                https://www.ideapoke.com/workspace.html?type=members
              </a>
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>Navigation: </span> Login to
              Ideapoke >> Dashboard >> Below your network name click on Members
              >> Members details page
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Click on Members to view details.{" "}
              </span>
            </Desc>

            <Img src={Membersection}></Img>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700", lineHeight: "35px" }}>
                Members and details page
              </span>
            </Desc>
            <Img src={Memberdetails}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the different type for Templates and Designs?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div style={{ lineHeight: "35px" }}>
              <P
                text=" Maps, Lite research and All Templates/Desings are represented as tabs and filters under Recommended Templates and My Designs and as Sample designs. "
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
              <Desc>
                <span>
                  Maps: Templates that are useful for external environment
                  analysis. The maps available are:{" "}
                </span>
              </Desc>
              <P
                text="Trend motion Map, Trend Ecosystem Map, Trend Timeline Map, Company Scouting Map. "
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
              <Desc>
                <span>
                  Lite Research: Templates that are useful for internal analysis
                  of a company or organization. Templates available under the
                  Lite are:
                </span>
              </Desc>

              <P
                text="New Business Usecases, Business Model Analysis, Competitive Analysis, Cross Pollination Tech Scouting, Market Analysis, M&A Analysis – Product, M&A Analysis – Business, Regulations and Policies, Supply Chain Analysis, Technology Landscape, Technology Scouting, Usecase Analysis, Value Chain Analysis, Vendor Evaluation, Company Profiling."
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
              <Desc>
                <span>
                  All Templates: This is the default partition selected in
                  Recommended templates, Sample Designs (Filter), My Designs
                  (Designed by Ideapoke). This has all the Market and Business
                  Opportunities templates.
                </span>
              </Desc>
            </div>

            <div style={{ margin: "10px" }}>
              <P
                text="Representation of Types of Templates under Recommended Templates (View All)"
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>

              <Img src={Templetecomunity}></Img>
              <P
                text="Representation of Types of Templates under Sample Designs (View All)"
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
              <Img src={Templetetwodesign}></Img>
              <P
                text="Representation of Types of Templates under My Designs (Designed by Ideapoke) (View All)"
                color="#000000"
                fontSize="13px"
                fontWeight="normal"
                letterSpacing="-2.7"
              ></P>
              <Img src={TempleteBydesign}></Img>
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are Premium Templates?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <P
              text="All the Lite research templates are premium templates. The premium templates are denoted with a “Crown Symbol”."
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Img src={Preminumtemplete}></Img>
            <Img src={Preminumtempletesecond}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to view Versions and Updates for my designs?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {/* <Desc>
              <span style={{ fontWeight: "700" }}>Link</span>{" "}
              <a href="#">
                {" "}
                https://www.ideapoke.com/workspace.html?type=members
              </a>
            </Desc> */}
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Navigation to view Version:{" "}
              </span>{" "}
              Login to Ideapoke >> Dashboard >> Under My designs, click on
              design is ready design >> click on version and change the version.
            </Desc>
            <Desc style={{ listStyleType: "none" }}>
              <span style={{ fontWeight: "700" }}>
                Navigation to view Updates:
              </span>
              Login to Ideapoke >> Dashboard >> Under My designs, click on
              design is ready design >> Click on view update.<br></br>
              The version can be viewed for designs only if versions are
              uploaded for a requested topic. There can be multiple versions
              based on the requirement posted. The date displayed under each
              version is the published date of the design<br></br>
              “View Update” displays the updates of a design. Update is the
              difference between two design versions.
              <br></br>Version 2 – Version 1 = Update data<br></br>User can also
              view last updated date of the design and person who contributed
              for the design.
            </Desc>
            <P
              text="Click on versions to view more versions."
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Img src={Visions}></Img>
            <P
              text="Click on “View updates” to see the update. "
              color="#000000"
              fontSize="13px"
              fontWeight="normal"
              letterSpacing="-2.7"
            ></P>
            <Img src={Update}></Img>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>What are Innovation maps?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Desc style={{ listStyleType: "none" }}>
              <span>
                Innovation map is a network or mind map style view of a market
                that allows you to understand correlations between sub- markets,
                companies, technologies and use cases associated with a topic.
                This has competitive landscape for a topic of interest and get
                an overall know-how of technologies prevalent in a market with
                potential use cases.
              </span>
            </Desc>

            <Img src={InnovationMaps}></Img>

            <Img src={InnovationMapsSecond}></Img>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
