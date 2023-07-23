import { getUserGeolocationInfo } from "./Common";

//Save user activity
export async function UserActivity(userActivityDto) {
    // var usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var usrlocationdetails = await getUserGeolocationInfo();

    userActivityDto.geolocation = usrlocationdetails.usrgeolocation;
    userActivityDto.geouseragent = usrlocationdetails.usergeouseragent;
    userActivityDto.geoportal = usrlocationdetails.usergeoportal;

    var accessurl = window.location.href;

    const saveUserActivity = async () => {
        const url = process.env.API_URL + "/populateuseractivity";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(userActivityDto),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        // console.log("saveUserActivity : ", data)
    };
    saveUserActivity();
}

