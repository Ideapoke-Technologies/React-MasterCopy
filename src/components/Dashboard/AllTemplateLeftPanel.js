import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeftPanel = styled.div`
  box-shadow: 0px 2px 6px 0px rgba(69, 69, 69, 0.12);
  background: #fff;
  padding: 15px 0;
  width: 260px;
  position: fixed;
  padding-bottom: 8px;
  z-index: 2;
  /* height: 494px; */
  overflow-y: auto;
  border-radius: 12px 0 0 12px;
  height: 584px;
`;
const SubMenu = styled.p`
  font-family: "Poppins";
  color: #454545;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.22px;
  padding: 6px 30px;
  margin: 0;
  &:hover {
    color: #15436d;
    background-color: #e3f2ff;
    cursor: pointer;
  }
`;
const PanelHeader = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 6px 30px;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  color: #454545;
`;

export default function AllTemplateLeftPanel(props) {
  const [allGroupingByTeam, setAllGroupingByTeam] = useState([]);
  const [allGroupingByResearchGoal, setAllGroupingByResearchGoal] = useState(
    []
  );
  const [allCategory, setAllCategory] = useState([]);

  const fetchCategory = async () => {
    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/template/getsolution";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      setAllCategory(data);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchGroupingDetails = async () => {
    const url =
      process.env.APP_RDT_SERVICE_URL + "/rdt/template/getgroupingbytype";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "applcation/json" },
    });
    const data = await response.json();
    if (response.ok) {
      setAllGroupingByTeam(data["By Team"]);
      setAllGroupingByResearchGoal(data["By Research Goal"]);
    }
  };
  useEffect(() => {
    fetchGroupingDetails();
  }, []);

  const callRmdTemplateAPI = (id, param) => {
    if(id && param){
      if(id > 50 && id<75){
        props.callRmdTemplateAPI(id-50,param);
      }else if(id >75){
        props.callRmdTemplateAPI(id-75,param);
      }else if(param=='recent' || param=='popular'){
        props.callRmdTemplateAPI("",param);
      }
    }else if(id < 50 ){
      props.callRmdTemplateAPI(id,"");
  }

    for (let index = 0; index < 100; index++) {
      const element = document.getElementById("templatetab" + index);
      if (element) {
        element.style.color = "#898989";
        element.style.backgroundColor = "";
      }
    }

    const selectedElement = document.getElementById("templatetab" + id);
    if (selectedElement) {
      selectedElement.style.color = "#15436D";
      selectedElement.style.backgroundColor = "#e3f2ff";
    }
  };

  return (
    <div>
      <LeftPanel>
        <div>
          <SubMenu
            onClick={() => callRmdTemplateAPI(0, "")}
            style={{
              color: "#15436d",
              backgroundColor: "#e3f2ff", 
              cursor: "pointer",
            }}
            id="templatetab0"
          >
            All Templates
          </SubMenu>
          <SubMenu
            onClick={() => callRmdTemplateAPI(11, "recent")}
            id="templatetab11"
          >
            Recent
          </SubMenu>
          <SubMenu
            onClick={() => callRmdTemplateAPI(21, "popular")}
            id="templatetab21"
          >
            Popular
          </SubMenu>
        </div>
        <div>
          <PanelHeader>By Solution</PanelHeader>
          {allCategory &&
            allCategory.length > 0 &&
            allCategory.map((item, index) => {
              return (
                <SubMenu
                  onClick={() => callRmdTemplateAPI(item.categoryId, "")}
                  id={`templatetab${item.categoryId}`}
                >
                  {item.categoryName}
                </SubMenu>
              );
            })}
        </div>
        <div>
          <PanelHeader>By Team</PanelHeader>
          {allGroupingByTeam &&
            allGroupingByTeam.length > 0 &&
            allGroupingByTeam.map((item, index) => {
              return (
                <SubMenu
                  onClick={() => callRmdTemplateAPI(item.id + 50, item.name)}
                  id={`templatetab${item.id + 50}`}
                >
                  {item.name}
                </SubMenu>
              );
            })}
        </div>
        <div>
          <PanelHeader>By Research Goal</PanelHeader>
          {allGroupingByResearchGoal &&
            allGroupingByResearchGoal.length > 0 &&
            allGroupingByResearchGoal.map((item, index) => {
              return (
                <SubMenu
                  onClick={() => callRmdTemplateAPI(item.id + 75, item.name)}
                  id={`templatetab${item.id + 75}`}
                >
                  {item.name}
                </SubMenu>
              );
            })}
        </div>
      </LeftPanel>
    </div>
  );
}
