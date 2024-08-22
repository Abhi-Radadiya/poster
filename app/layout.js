import "./globals.css";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import ClientProvider from "@/components/ClientProvider/ClientProvider";
import { ImageDataProvider } from "@/context/ImageDataContext";
import Script from "next/script";

export const metadata = {
    title: "Artera Pixel",
    description: "Artera Pixel",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8529977313104602" crossorigin="anonymous" />
                {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QGCYX6BL4J" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-QGCYX6BL4J');
                    `}
                </Script> */}
            </head>
            <body className="bg-[#efefef73]">
                <ClientProvider>
                    <ImageDataProvider>
                        {children}
                        <BottomNavbar />
                    </ImageDataProvider>
                </ClientProvider>
            </body>
        </html>
    );
}
