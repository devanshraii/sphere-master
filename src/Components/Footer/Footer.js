import React from "react";
import "./Footer.css";
import ButtonBackground from "../../Assets/Rectangle 1.svg";
import Profile from "../../Assets/iconamoon_profile-fill.svg";
import Mail from "../../Assets/material-symbols-light_mail.svg";
import Call from "../../Assets/material-symbols_call.svg";
import Write from "../../Assets/system-uicons_write.svg";
import Location from "../../Assets/fluent_location-24-filled.svg";
import Facebook from "../../Assets/Social Media Icon.svg";
import Instgram from "../../Assets/Social Media Icon Square.svg";
import Twitter from "../../Assets/Group 73.svg";
import LinkedIn from "../../Assets/Social Media Icon Square (1).svg";
import Logo from "../../asset/logo.png";
import FacebookDark from "../../Assets/FacebookDark.svg";
import InstaDark from "../../Assets/InstaDark.svg";
import YouTubeDark from "../../Assets/YoutubeDark.svg";
import TwitterDark from "../../Assets/TwitterDark.svg";
import LinkedInDark from "../../Assets/LinkedInDark.svg";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="ContactUs">
        <div className="Form flex flex-column flex-center">
          <div className="input-style-form InputDiv">
            <img className="Icon" src={Profile} />
            <input className="text-input" placeholder="Full Name" />
          </div>
          <div className="input-style-form InputDiv">
            <img className="Icon" src={Mail} />
            <input className="text-input" placeholder="Email-ID" />
          </div>
          <div className="input-style-form InputDiv">
            <img className="Icon" src={Call} />
            <input className="text-input" placeholder="Mobile no." />
          </div>
          <div className="input-style-form TextDiv">
            <img className="Icon" src={Write} />
            <textarea
              className="text-input"
              placeholder="Drop your message"
            ></textarea>
          </div>
          <div className="Submit flex flex-center text">Submit</div>
        </div>
        <div className="Detail">
          <div className="heading text-white">Get in touch today</div>
          {/* <div className="text text-white subText">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
            adipiscing tincidunt interdum tellus du.
          </div> */}
          <div className="text text-white subDetail">
            <img className="Icon DarkIcon" src={Call} />
            Phone: +91 99880908009
          </div>
          <div className="text text-white subDetail">
            <img className="Icon DarkIcon" src={Mail} />
            Email: info@spheretechlab.in
          </div>
          <div className="text text-white subDetail flex">
            <div>
              <img className="Icon DarkIcon" src={Location} />
            </div>
            Bhopal Address: ABC, Ram Road, Bhopal, Madhya
            <br /> Pradesh, India - 765687
          </div>
          <div className="SocialLinks flex">
            <div>
              <img className="Icon DarkIcon" src={Facebook} />
            </div>
            <div>
              <img className="Icon DarkIcon" src={Twitter} />
            </div>
            <div>
              <img className="Icon DarkIcon" src={Instgram} />
            </div>
            <div>
              <img className="Icon DarkIcon" src={LinkedIn} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Links flex flex-center flex-wrap">
          <div className="LogoDiv text-center">
            <div className="">
              <img className="Icon FooterIcon" src={Logo} />
            </div>
            <div className="text-white text">
              Sphere Tech Labs, where Innovation meets Transformation!
            </div>
            <div className="flex linkDiv flex-center">
              <div className="linkContainer">
                <div>
                  <img className="DarkIcon" src={FacebookDark} />
                </div>
                <div>
                  <img className="DarkIcon" src={InstaDark} />
                </div>
                <div>
                  <img className="DarkIcon" src={YouTubeDark} />
                </div>
                <div>
                  <img className="DarkIcon" src={LinkedInDark} />
                </div>
                <div>
                  <img className="DarkIcon" src={TwitterDark} />
                </div>
              </div>
            </div>
          </div>
          <div className="footerResponsive">
            {/* <div className="text-white block-main">
              <div className="linkHeading button-text"> Company</div>
              <div>
                <a className="anchor">About</a>
              </div>
              <div>
                <a className="anchor"> Contact us</a>
              </div>
              <div>
                <a className="anchor"> Careers</a>
              </div>
              <div>
                <a className="anchor"> Blog</a>
              </div>
            </div> */}
            <div className="text-white block-main">
              <div className="linkHeading button-text">Service</div>
              <div>
                <a className="anchor">AI & ML Service</a>
              </div>
              <div>
                <a className="anchor">Cloud Transformation</a>
              </div>
              <div>
                <a className="anchor">Data Engineering</a>
              </div>
              <div>
                <a className="anchor">Application services</a>
              </div>
              <div>
                {" "}
                <a className="anchor">QA & Testing</a>
              </div>
            </div>
            <div className="text-white block-main">
              <div className="linkHeading button-text">Technology</div>
              <div>
                <a className="anchor">Blockchain</a>
              </div>
              <div>
                <a className="anchor">Mobility</a>
              </div>
              <div>
                <a className="anchor">Cloud</a>
              </div>
              <div>
                <a className="anchor">Data Analytics</a>
              </div>
              <div>
                <a className="anchor">Open Source</a>
              </div>
            </div>
            <div className="text-white block-main">
              <div className="linkHeading button-text">Industries</div>
              <div>
                <a className="anchor"> Web3</a>
              </div>
              <div>
                <a className="anchor">Hi - Tech</a>
              </div>
              <div>
                <a className="anchor">Financial services</a>
              </div>
              <div>
                <a className="anchor">Insurance</a>
              </div>
              <div>
                <a className="anchor">Healthcare</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Links-copyright">
          <hr />
          <div className="text-white flex flex-center text CopyRight">
            Copyright Sphere Tech Labs | All Rights Reserved 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
