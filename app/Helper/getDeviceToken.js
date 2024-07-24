import { axiosInstance } from "@/APIHelper/axios";
import { firebaseConfig } from "@/firebase";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";

export const requestNotificationPermission = async (dispatch, setToken) => {
    try {
        setToken("asked persmiisoin");
        const permission = await Notification.requestPermission();
        setToken("res ccx   ");

        if (permission === "granted") {
            return generateDeviceToken(dispatch, setToken);
        } else {
            setToken("no permission");
        }
    } catch (error) {
        console.log("An error occurred during the permission request: ", error);
    }
};

export const generateDeviceToken = (dispatch, setToken) => {
    // navigator.serviceWorker?.ready?.then((registration) => {
    //     let serviceWorker;
    //     if (registration.installing) {
    //         serviceWorker = registration.installing;
    //     } else if (registration.waiting) {
    //         serviceWorker = registration.waiting;
    //     } else if (registration.active) {
    //         serviceWorker = registration.active;
    //     }
    //     if (serviceWorker?.state === "activated") {
    //         setFirebaseToken(dispatch, serviceWorker, setToken);
    //     } else {
    //         serviceWorker.addEventListener("statechange", () => {
    //             if (serviceWorker?.state === "activated") {
    //                 setFirebaseToken(dispatch, serviceWorker, setToken);
    //             }
    //         });
    //     }
    //     const webFirebaseInstant = initializeApp(firebaseConfig);
    //     const messagingInstance = getMessaging(webFirebaseInstant);
    //     onMessage(messagingInstance, function (payload) {
    //         console.log("payload message ==>", payload, registration);
    //         const notificationTitle = payload?.notification.title;
    //         const notificationOptions = {
    //             body: payload?.notification?.body,
    //             actions: [
    //                 {
    //                     action: "coffee-action",
    //                     title: "Coffee",
    //                     type: "button",
    //                 },
    //             ],
    //         };
    //         registration.showNotification(notificationTitle, notificationOptions);
    //     });
    // });
};

const setFirebaseToken = (dispatch, serviceWorker, setToken) => {
    serviceWorker.postMessage("get-firebase-token");

    const firebaseTokenGeneration = new BroadcastChannel("firebaseTokenTransferChannel");

    firebaseTokenGeneration.onmessage = async (event) => {
        const token = event.data.firebaseToken;
        const response = await axiosInstance.post("/sendToken", { token });

        setToken(token);

        console.log("response ==>", response);

        console.log("token ==>", token);
    };
};
