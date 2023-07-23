import React, { useState, useEffect } from "react";
import styled from "styled-components";
import New from "./images/new-tag.svg";
import RequestUpdate from "./RequestUpdate";
import Follow from "./Follow";
import Following from "./Following";
import UnfollowPopup from "../Popup/UnfollowPopup";
import RequestThanksPopup from "../Popup/RequestThanksPopup";
import FollowingTag from "../Status/FollowingTag";
import FollowTag from "../Status/FollowTag";
import ReqUpdate from "../Status/ReqUpdate";
import UpdateReq from "../Status/UpdateReq";

const TagWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr 0.9fr;
`;
const Img = styled.img``;

export default function NewDesignCard(props) {
  const [booked, setBooked] = useState(props.followed);
  const [showFollowPopup, setShowFollowPopup] = useState(false);
  const [showRequestPopup, setShowRequestPopup] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);

  useEffect(() => {
    console.log("props.designId  ", props.designId);
    if (props.designId) {
      getFollowedDesign();
    }
  }, []);

  const getFollowedDesign = async () => {
    var dataObj = {
      dataDesignIds: [props.designId],
      userId: props.sesUserId,
    };
    console.log("getFollowedDesign dataObj", dataObj);
    const url = process.env.APP_RDT_SERVICE_URL + "/rdt/getfolloweddesign";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    const data = await response.json();
    if (data.length > 0) {
      setBooked(true);
    }
    console.log("getFollowedDesign data", data);
  };

  const appendBookmark = (param) => {
    if (param == "REMOVE") {
      setShowFollowPopup(true);
    } else if (param == "ADD") {
      props.setAddCard(props.designId);
      setBooked(true);
    } else if (param == "UPDATE") {
      setShowRequestPopup(true);
    }
    props.setCardName(props.projTitle);
  };

  return (
    <>
      {props.solutionId == "2" ? (
        booked ? (
          <FollowingTag
            onClick={() => {
              appendBookmark("REMOVE");
            }}
            hoverStatus={props.hoverStatus}
          ></FollowingTag>
        ) : (
          <FollowTag
            onClick={() => {
              appendBookmark("ADD");
            }}
            hoverStatus={props.hoverStatus}
          ></FollowTag>
        )
      ) : props.type == "followeddesign" ? (
        booked ? (
          <FollowingTag
            onClick={() => {
              appendBookmark("REMOVE");
            }}
            hoverStatus={props.hoverStatus}
          ></FollowingTag>
        ) : (
          <FollowTag
            onClick={() => {
              appendBookmark("ADD");
            }}
            hoverStatus={props.hoverStatus}
          ></FollowTag>
        )
      ) : (
        <ReqUpdate
          onClick={() => {
            appendBookmark("UPDATE");
          }}
          hoverStatus={props.hoverStatus}
        ></ReqUpdate>
      )}
      
      {showFollowPopup && <UnfollowPopup setHoverStatus={props.setHoverStatus} designId={props.designId} setBooked={setBooked} closePopup={setShowFollowPopup} setRemoveCard={props.setRemoveCard} message={"You are about to unfollow this design. "} buttonmessage="Unfollow" type="follow"></UnfollowPopup>}
      {showRequestPopup && (
        <UnfollowPopup
          designId={props.designId}
          setBooked={setBooked}
          closePopup={setShowRequestPopup}
          setUpdatePopup={setUpdatePopup}
          setRemoveCard={props.setRemoveCard}
          message={"Would you like Ideapoke to update the sample design you are currently viewing? "}
          buttonmessage="Yes, Request Update"
          type="update"
        ></UnfollowPopup>
      )}
      {updatePopup && <RequestThanksPopup closePopup={setUpdatePopup}></RequestThanksPopup>}
    </>
  );
}
