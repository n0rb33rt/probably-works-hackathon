/* eslint-disable react-refresh/only-export-components */
import {json, useLoaderData} from "react-router-dom";
import AdvertisementCard from "../components/AdvertisementCard";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification";

export default function HomePage() {
    const {requests} = useLoaderData().requests.items;
    const {userInfo} = useLoaderData().userInfo;

    return (
        <>
            <header className="flex justify-between">
                <div>
                    <img src={userInfo.imageBase64} alt="user_icon" className="w-16 h-16 rounded-full "/>
                    <p className="text-[#D6D6D6] text-[18px] pt-3">Привіт, {userInfo.name}</p>
                    <p className="text-white text-[22px]">
                        Допомога - це вияв <br/>
                        людяності і відповідальності.
                    </p>
                </div>
                <Notification/>
            </header>
            <main className="mt-[24px] flex flex-col gap-5">
                {requests.map((request) => (
                    <AdvertisementCard
                        key={request.id}
                        category={request.category}
                        requestName={request.title}
                        requestId={request.id}
                        eventDate={request.eventDate}
                        eventTime={request.eventTime}
                        price={request.price}
                    />
                ))}
                <NavBar/>
            </main>
        </>
    );
}

export async function loader() {
    const userInfo = await fetch(
        "https://testtmpss.azurewebsites.net/api/v1/user/info",
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
        }
    );
    if (!userInfo.ok) {
        throw new Response("Error fetching user data", {status: 400});
    }

    const requests = await fetch(
        "https://testtmpss.azurewebsites.net/api/v1/support/requests",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },

            body: JSON.stringify({
                page: 1,
                amountOnPage: 10,
            }),
        }
    );
    if (!requests.ok) {
        throw json({message: "Couldn't send request"});
    }

    return {requests: requests,userInfo: userInfo};
}
