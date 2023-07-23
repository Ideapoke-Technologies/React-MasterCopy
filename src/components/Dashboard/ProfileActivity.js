import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { P } from "../CommonStyle";
import Arrow from "./images/filter 1.svg";
// import ProfileActivityFilter from './ProfileActivityFilter'
import CollectionActivity from "./CollectionActivity";
import { useTranslation } from "react-i18next";
import { saveRdtUserActions } from "../UserTracking";
const TableContainer = styled.table`
width: 100%;
/* border: 1px solid rgb(217, 217, 217); */
max-width: 1035px;
margin-left: 25px;
border-collapse: collapse;
margin-top: 32px;
@media screen and (min-width: 1517px){
  max-width: 1150px;
}
`

const Tableth = styled.th`
    background: #E3F2FF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    padding: 10px;  
    text-align: left;
    border: 1px solid rgb(217, 217, 217);
    width: 22.85%;
    display:inline-block;
    position: relative;
     `

const Tabletr = styled.tr`
    // border-bottom: 1px solid #d9d9d9;
    display: block;
    width:100%;
`
const Tabletrth = styled.tr`

    // border-bottom: 1px solid #d9d9d9;
    display: block;
    width:100%;
    /* background: #E3F2FF; */

`
const Tabletd = styled.td`
    background: #fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #505050;
    padding: 10px;  
    text-align: center;  
    text-align: left;
    display:inline-block;
    vertical-align: top;
    border: 1px solid rgb(217, 217, 217);
    width: 22.85%;
    display:inline-block;
    min-height:60px;
`
const TableText = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #454545;
    text-align:left;
    padding: 5px 0px;
    max-height: 30px;
`
const TableTextlink = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #1A5C97;
    text-align:left;
   padding: 10px 0px;
`
const Img = styled.img`
    width: 22px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`
const Headingwraper = styled.div`
font-family: Poppins;
 margin: -46px 0px 10px 25px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 18px;
    color: #454545;
   
     `


const Clearwraper = styled.div`
    font-family: Poppins;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #CE5710 ;
    float: right;
    margin-right: 22px;
    margin-top: 16px;
    margin-bottom: 5px;
    &:hover {
    text-decoration: underline;
  }
  @media screen and (min-width: 1517px){
    margin-right: 48px;
  }
`

export default function ProfileActivity(props) {
  const { t } = useTranslation();
  const [notifictiondata, setNotifictiondata] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const langRef = useRef(null);
  const langRef1 = useRef(null);
  const langRef2 = useRef(null);
  const [textmsg, setTextmsg] = useState("");


  const filterData = (selectedValues) => {
    if (selectedValues.includes("All")) {
      setFilteredData(notifictiondata);
    } else {
      const filtered = notifictiondata.filter((data) =>
        selectedValues.includes(data.fullname) || selectedValues.includes(data.collaborateddesign)
        || selectedValues.includes(data.roleType)
      );
      setFilteredData(filtered);
    }
  };

  const handleClick = (names) => {
    setSelectedName(names);
    // setShowComponent(true);
    setShowComponent(prev => !prev);
  };
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        process.env.APP_RDT_SERVICE_URL + "/rdt/user/activities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // networkId: "NET1000003",
            // userId: 9144,
            networkId: props.userData.sesnetworkid,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching account data");
      }
      const data = await response.json();
      console.log("data :>> ", data);
      setNotifictiondata(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };
  useEffect(() => {
    fetchUserData();
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target) && langRef1.current && !langRef1.current.contains(event.target)
        && langRef2.current && !langRef2.current.contains(event.target)) {
        setSelectedName(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };

  }, []);


  console.log("notifictiondata---->", notifictiondata);
  function formatDate(date) {
    const currentDate = new Date(date); // Ensure date is a valid Date object
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    let dayWithSuffix = day;
    if (day >= 11 && day <= 13) {
      dayWithSuffix += "th";
    } else {
      switch (day % 10) {
        case 1:
          dayWithSuffix += "st";
          break;
        case 2:
          dayWithSuffix += "nd";
          break;
        case 3:
          dayWithSuffix += "rd";
          break;
        default:
          dayWithSuffix += "th";
      }
    }
    return `${month} ${dayWithSuffix}  ${year}`;
  }
  console.log("filteredData--->", filteredData)

  const notshow = () => {
    setSelectedName(false);
  }
  const clearFilters = () => {
    setFilteredData(notifictiondata);
    saveRdtUserActions(
      props.userData.sesuserid,
      "Activiteis",
      "onClick of Clear Filters in Activities"
    );

  };
  return (
    <div>
      <Headingwraper>
        {t("activities")}
      </Headingwraper>
      <div style={{maxWidth:"1083px"}}>
        <Clearwraper onClick={clearFilters} >
          {t("clearFilters")}
        </Clearwraper>
        <TableContainer>
          <tablehead>
            <Tabletrth>

              <Tableth>
                <div>
                  {t("name")}
                </div>
                <div ref={langRef}>
                  <Img onClick={() => handleClick("Name")} src={Arrow}></Img>
                  {showComponent && selectedName === "Name" && (
                    <CollectionActivity
                      notifictiondata={notifictiondata.map((data) => ({
                        fullname: data.fullname,
                      }))}
                      applyFilter={filterData}
                      notshow={notshow}
                      userData={props.userData}
                    />
                  )}
                </div>
              </Tableth>
              <Tableth>
                {t("collaboratedDesign")}
                <div ref={langRef1}>
                  <Img
                    onClick={() => handleClick("Collaborated Design")}
                    style={{ marginLeft: "252px" }}
                    src={Arrow}
                  ></Img>
                  {showComponent && selectedName === "Collaborated Design" && (
                    <CollectionActivity
                      notifictiondata={notifictiondata.map((data) => ({
                        collaborateddesign: data.collaborateddesign == "null" ? '' : data.collaborateddesign,
                      }))}
                      applyFilter={filterData}
                      notshow={notshow}
                      userData={props.userData}
                    />
                  )}
                </div>
              </Tableth>
              <Tableth>
                {t("lastUpdated")}
              </Tableth>
              <Tableth>
                {t("role")}
                <div ref={langRef2}>
                  <Img
                    onClick={() => handleClick("Role")}
                    style={{ marginLeft: "775px" }}
                    src={Arrow}
                  ></Img>
                  {showComponent && selectedName === "Role" && (
                    <CollectionActivity ref={langRef2}
                      notifictiondata={notifictiondata.map((data) => ({
                        roleType: data.roleType,
                      }))}
                      applyFilter={filterData}
                      notshow={notshow}
                      userData={props.userData}
                    />
                  )}
                </div>
              </Tableth>
            </Tabletrth>
          </tablehead>
          <tablebody>
            {filteredData.map((data, i) => {
              console.log('data.fullname :>> ', data.fullname);
              return (
                <Tabletr key={i}>
                  <Tabletd>

                    <P
                      text={data.fullname}
                      color="#454545"
                      fontSize="14px"
                      fontWeight="400"
                      letterSpacing="-1px"
                    ></P>
                    <P
                      text={data.emailid}
                      color="#1A5C97"
                      fontSize="14px"
                      fontWeight="400"
                      letterSpacing="-1px"
                    ></P>
                  </Tabletd>
                  <Tabletd>
                    <TableText>
                      {data.collaborateddesign.charAt(0).toUpperCase() +
                        data.collaborateddesign.slice(1)}
                    </TableText>
                  </Tabletd>
                  <Tabletd>
                    <TableText>
                      {data.collaborateddate
                        ? formatDate(data.collaborateddate)
                        : ""}
                    </TableText>
                  </Tabletd>
                  <Tabletd>
                    <TableText>
                      {data.roleType == "null" ? "Member" : data.roleType}
                    </TableText>
                  </Tabletd>
                </Tabletr>

              )
            }
            )}
          </tablebody>
        </TableContainer>
      </div>
    </div>
  );
}
// <P text="Collaborated Design" width="200px" color="#454545">
//lastupdate
//  <Img style={{ marginLeft: "500px" }} src={Arrow}></Img>
