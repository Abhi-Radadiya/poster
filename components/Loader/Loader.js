import React from "react";
import ContentLoader from "react-content-loader";
import "./styles.css";

export function SingleLoader(props) {
    const { width, height, className } = props;

    return (
        <>
            <ContentLoader speed={1} width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} backgroundColor="#DDDDDF" foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="8" ry="8" width={width} height={height} />
            </ContentLoader>
        </>
    );
}

export function CircularLoader() {
    return (
        <div className="loader">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="bar7"></div>
            <div className="bar8"></div>
            <div className="bar9"></div>
            <div className="bar10"></div>
            <div className="bar11"></div>
            <div className="bar12"></div>
        </div>
    );
}
