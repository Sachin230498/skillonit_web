import React from "react";
import { useLocation } from "react-router-dom";
import btelegram from "../../assets/images/Socialmedia/telegram.svg";
import bcall from "../../assets/images/Socialmedia/phonecall.png";
import bwhatsapp from "../../assets/images/Socialmedia/whatsapp.svg";

const SocialMedia = ({ routes }) => {

  const location = useLocation();
  return (
    <div
      className={`tooltip-container  ${!routes.includes(location.pathname) ? "d-none" : " "
        }`}
    >
      <img src={bwhatsapp} alt="container" className="tt-container-img" />

      <a
        href="https://t.me/skillonit_ceo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="tooltip1">
          <div className="link-bgg">
            <img src={btelegram} className=" tele-img-1" alt="whatsapp" />
          </div>
        </span>
      </a>

      <a href="tel:+917741007941" target="_blank" rel="noopener noreferrer">
        <span className="tooltip3">
          <div className="link-bgg">
            <img src={bcall} className=" tele-img-1" alt="call" />
          </div>
        </span>
      </a>

      <a
        href="https://wa.me/7741007941"
        target="blank"
        rel="noopener noreferrer"
      >
        <span className="tooltip7">
          <div className="link-bgg">
            <img src={bwhatsapp} className=" tele-img-1" alt="whatsapp" />
          </div>
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;
