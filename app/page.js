"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestNotificationPermission } from "./Helper/getDeviceToken.js";
import Home from "./home/page.js";

export default function Page() {
    const dispatch = useDispatch();

    const [token, setToken] = useState("xx");

    useEffect(() => {
        // navigator.serviceWorker?.register("/firebase-messaging-sw.js", { scope: "/" });
        getDeviceToken();

        // eslint-disable-next-line
    }, []);

    const getDeviceToken = async () => {
        try {
            await requestNotificationPermission(dispatch, setToken);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Home />
        </>
    );
}
