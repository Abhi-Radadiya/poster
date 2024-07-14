const { firebaseConfig } = require("@/firebase");

importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener("message", (event) => {
    if (event.data === "get-firebase-token") {
        const generateAndPostToken = async () => {
            try {
                const firebaseToken = await messaging.getToken();

                const firebaseTokenTransferChannel = new BroadcastChannel("firebaseTokenTransferChannel");

                firebaseTokenTransferChannel.postMessage({ firebaseToken: firebaseToken });
            } catch (error) {
                console.error("Error obtaining token:", error);
            }
        };

        generateAndPostToken();
    }
});

messaging.onBackgroundMessage(function (payload) {
    const channel = new BroadcastChannel("notification_channel_name");

    console.log("payload from background ==>", payload);

    channel.postMessage(payload);

    const notificationTitle = payload?.notification?.title ?? "ttile";

    const notificationOptions = {
        body: payload?.notification?.body ?? "kdkd",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);

    // Post the notification payload to the React Native WebView
    self.clients.matchAll({ includeUncontrolled: true, type: "window" }).then((clients) => {
        clients.forEach((client) => {
            client.postMessage({
                type: "NOTIFICATION",
                payload: payload,
            });
        });
    });

    self.registration.showNotification(notificationTitle, notificationOptions);
});
