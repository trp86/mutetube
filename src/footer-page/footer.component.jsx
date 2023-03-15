import React from "react";
import "./footer.styles.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Imagebg from "../images/entraintain.jpg"

const Footer=()=>{
    return(
        <Fragment>
            <div className="footer-container">
                <img className="footer-image-container" src={Imagebg} alt="footer"/>
                <h1>ENTRAINTAIN OR LEARN BY WATCHING VIDEO - AUDIO. STREAM IT ANYWHERE ANYTIME. JOIN THE MUTECLUB BY MUTING YOURSELF</h1>
            </div>
        </Fragment>
    )
}

export default Footer;