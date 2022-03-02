import React from "react";

export const Footer = ({ label }) => {

    return (
        <div className="footer-container">
            <div className="footer-sources">
                <div>{label.footer.source}</div>
                <div>{label.footer.produced}</div>
                <div>{label.footer.designer}</div>
                <div>{label.footer.developer}</div>
            </div>
            <div className="footer-bar" dangerouslySetInnerHTML={{ __html: label.footer.copyright }} />
        </div>

    );

};
