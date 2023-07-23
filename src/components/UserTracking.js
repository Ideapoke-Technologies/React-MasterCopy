import { getUserGeolocationInfo } from "./Common";

//Save user activity
export async function saveRdtUserActions(
    userid,
    type,
    action,
    subaction
) {
    var usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var usrlocationdetails = await getUserGeolocationInfo();
    var usraccessid = localStorage.getItem("usraccessid");
    if (!usraccessid) {
        usraccessid = "";
    }

    var accessurl = window.location.href;
    var useractionstrack = {
        "userid": userid,
        "type": type,
        "action": action,
        "subaction": subaction,
        "device": usrlocationdetails.usergeoportal,
        "useragent": usrlocationdetails.usragentinfo,
        "geolocation": usrlocationdetails.usrgeolocationinfo
    };
    console.log('useractionstrack', useractionstrack);
    const saveUserActivity = async () => {
        const url = process.env.APP_RDT_SERVICE_URL + "/rdt/design/addactivity";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(useractionstrack),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
    };
    saveUserActivity();
}

