// import something from 'somewhere'
import React from "react";
import './Footer.css';

// Function Define Area
export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div>
                    <h2>Links</h2>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit. dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                </div>
                <div>
                    <h2>Follow our updates</h2>
                    <ul>
                        <li>Subscribe to RSS Feed</li>
                        <li>What is Css?</li>
                        <li>Email Updates</li>
                    </ul>
                </div>
                <div style={{ textAlign: 'right'}}>
                    <h2>Copyright @ 2009 <br /> All Rights Reserved.</h2>
                </div>
            </div>
        </>
    );
}

// Exporting Area
// export default Footer;
