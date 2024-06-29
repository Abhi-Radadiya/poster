"use client";
import { fetchFrameDetail } from "@/store/detailsSlice";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ImageDataContext = createContext();

export function ImageDataProvider({ children }) {
    const [imageData, setImageData] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFrameDetail());
    }, []);

    return <ImageDataContext.Provider value={{ imageData, setImageData }}>{children}</ImageDataContext.Provider>;
}

export function useImageData() {
    return useContext(ImageDataContext);
}
