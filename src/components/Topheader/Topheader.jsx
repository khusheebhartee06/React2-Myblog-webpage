// import something from 'somewhere'
import React from "react";
import './Topheader.css';

// Function Define Area
export default function Topheader() {
    return (
        <>
         <div className="topheader">
            <div className="left">Welcome , Guest <a href="javascript:void()"> Login</a><a href="javascript:void()">Sign Up</a></div>

            <div className="right">Stay Updated
            <a href="javascript:void()"> Subscribe via RSS Email Updates </a>
            </div>
        </div>

        </>
    );
}

// Exporting Area
// export default top;
