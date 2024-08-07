// app/layout.js
import "./globals.css";
import BottomNavbar from "@/components/BottomNavbar/BottomNavbar";
import ClientProvider from "@/components/ClientProvider/ClientProvider";
import { ImageDataProvider } from "@/context/ImageDataContext";

export const metadata = {
    title: "Artera Pixel",
    description: "Artera Pixel",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
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
