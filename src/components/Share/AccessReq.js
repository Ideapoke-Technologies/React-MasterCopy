import React, { useEffect, useState } from 'react'
import ReqImg from "./images/access-req.png"
import styled from 'styled-components'
import ErrorMassage from '../Banner/Error.js'
import Clogo from '../IpLogo/images/Logo.svg';

const AccessWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 756px;
    text-align: center;
    position: absolute;
    margin-left: 20%;
`
const Header = styled.div`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 26px;
    line-height: 44px;
    letter-spacing: -1.25px;
    color: #FF7624;
`
const Desc = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #454545;
    margin-top: 16px;
`
const Img = styled.img``

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 30px;
`
export const Dashboard = styled.button`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FF7624;
    border: 1px solid #FF7624;
    background: #FFF;
    border-radius: 4px;
    padding: 8px;
    &:hover{
        color: #cd5900;
        border: 1px solid #cd5900;
        cursor: pointer;
    }
`
export const ReqAccess = styled.button`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    background: #FF7624;
    border: 1px solid #FF7624;
    border-radius: 4px;
    padding: 8px;
    &:hover{
        background: #cd5900;
        cursor: pointer;
        border: 1px solid #cd5900;
    }
`;
const LogoWrp = styled.div`
    position: absolute;
    margin-top: -62px;
    margin-left: 18px;
   `;


const AccessReq = (props) => {
    const [error, setError] = useState(null);
    const [canvasRoomId, setCanvasRoomId] = useState(null);
    const [canvasDesignId, setCanvasDesignId] = useState(null);

    useEffect(() => {
        // const encodedValue = window.location.href;

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const restrict = urlParams.get('temp');
        const decodedUrl = atob(restrict);

        console.log('data decodedUrl-->', decodedUrl);
        const [designId, roomId] = decodedUrl.split('/&&/');

        console.log('data decodedUrl designId-->', designId);
        console.log('data decodedUrl roomId-->', roomId);

        // canvasDesignId = designId;
        // canvasRoomId = roomId;
        setCanvasRoomId(roomId);
        setCanvasDesignId(designId);

        // const url = decodeURIComponent(encodedValue);

        // const roomId = localStorage.getItem('designId');
        // const designId = localStorage.getItem('roomId');

        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // urlParams.get('roomid').then((roomId) => {
        //     roomId = roomId;
        //     urlParams.get('designid').then((designId) => {
        //         designId = designId;
        //         window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
        //     })
        // })
        // console.log('id for lite url-->', url);
        // const url = "http://localhost:3800/design/noaccess?designid=196&roomid=19dbc6cddb121bbc125e%2CUv17lo2aOPADVIvMnLxlag";

        // Extract designid and roomid using regular expressions
        // const designidRegex = /designid=([^&]+)/;
        // const roomidRegex = /roomid=([^&]+)/;

        // const designidMatch = url.match(designidRegex);
        // const roomidMatch = url.match(roomidRegex);

        // if (designidMatch && roomidMatch) {
        //     designId = designidMatch[1];
        //     roomId = roomidMatch[1];

        // } else {
        //     console.error("Design ID or Room ID not found.");
        // }

        // console.log('id for lite roomId get-->', roomId);
        // console.log('id for lite designId get-->', designId);

        // window.history.pushState(null, "", '/design/noaccess');
        // window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);

        // setIds({
        //     designId: designId,
        //     roomId: roomId
        // });

        // localStorage.removeItem('roomId');
        // localStorage.removeItem('designId');
    }, [])

    const handleDashboardNavigation = () => {
        window.location.href = '/design/dashboard.html';
    }

    const handleRequestToOwner = async () => {

        const url = process.env.APP_RDT_SERVICE_URL + '/rdt/design/request/permission';

        console.log('data decodedUrl canvasDesignId-->', canvasDesignId);
        console.log('data decodedUrl canvasRoomId-->', canvasRoomId);

        const inputObj = {
            userId: props.userId,
            roomid: canvasRoomId,
            designId: canvasDesignId,
            permissionType: "R",
            sharedBy: 0
        }

        console.log('call function-->', url);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputObj)
        })

        const data = await response.json();
        console.log('data-->', data);

        if (data.status == 'true') {
            window.location.href = '/design/requestaccess'
            // setAppState({ alertMessage: { type: "success", message: t('share.requestSent') } });
        } else if (data.status == 'Already exist') {
            setError('Already requested')
            setTimeout(() => {
                setError(null);
            }, 2500);

        } else {
            setError('Unable to request')
            setTimeout(() => {
                setError(null);
            }, 2500);
        }
    }

    // function readURLParameters() {
    //     // Get the URL query parameters
    //     const queryParams = new URLSearchParams(window.location.search);

    //     // Retrieve the desired parameters
    //     const designId = queryParams.get('designid');
    //     const roomId = queryParams.get('roomid');

    //     // Use the retrieved parameters as needed
    //     console.log('hidden url queryParams lite-->', queryParams);
    //     console.log('hidden url designId lite-->', designId);
    //     console.log('hidden url roomId lite-->', roomId);
    // }

    // useEffect(() => {
    //     readURLParameters()
    // }, []);
    return (
        <div>
            <LogoWrp>
                <Img src={Clogo}></Img>
            </LogoWrp>
            <div>
                {error && <ErrorMassage message={error} />}
                <AccessWrap>
                    <div>
                        <Img src={ReqImg} />
                    </div>
                    <div>
                        <Header>Access Required</Header>
                    </div>
                    <div>
                        <Desc>Sorry, you don’t have access to this design because it is not shared with you. Please request access or go to your Dashboard to start designing your research.</Desc>
                    </div>
                    <div>
                        <BtnWrap>
                            <Dashboard onClick={handleDashboardNavigation}>Go to Dashboard</Dashboard>
                            <ReqAccess onClick={handleRequestToOwner}>Request Access</ReqAccess>
                        </BtnWrap>
                    </div>
                </AccessWrap>
            </div>
        </div>
    )
}

export default AccessReq;