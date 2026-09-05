import React from "react";
import profileDetails from "../assets/profileDetails";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div id="footer-div">
            <div id="footer-inner-div">
                <div id="footer-container" className="d-flex pt-5 text-light">
                    <a
                        href={profileDetails.projectSourceURL}
                        className="footer-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project Source Code
                    </a>
                    <p>
                        Attribution:{" "}
                        <a
                            href={profileDetails.attribution.fa}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            FontAwesome
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
