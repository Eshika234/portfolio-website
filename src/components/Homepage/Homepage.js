import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span> my name is</p>
                <p className="homepage_left_h2">Eshika singha</p>
                <p className="homepage_left_h3">Undergrad student at <span className="red_color">Lovely professional university</span></p>
                <p className="homepage_left_description"> Knack of building web application using both frontend and backend operations.</p>
                <div>
                    <a href="https://github.com/Eshika234" target="_blank">
                        <img src={githubIcon} alt="githubimage" />
                    </a>
                    <a href="https://www.linkedin.com/in/eshikaisingha" target="_blank">
                        <img src={linkedinIcon} alt="linkedinimage" />
                    </a>
                </div>
                <a href="mailto:eshikasingha55@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>
        </div>
    )
}

export default Homepage
