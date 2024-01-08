import React, { useEffect } from "react";

import ContactImg from "../assets/img/profile.jpg";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    //contact// GSAP ScrollTrigger 플러그인을 사용하여 스크롤 트리거를 초기화합니다.
    function adjustContactSize() {
      gsap.to(".contact_wrap .mid .img_wrap", {
        width: "53%",
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    window.addEventListener("load", adjustContactSize);
  }, []);

  return (
    <section id="contact">
      <h2 className="blind">contact</h2>
      <div className="contact_wrap">
        <div className="top">
          <h2>
            <p>LET’S</p>
            <p>DEVELOP</p>
          </h2>
          <h2>EXCEPTIONAL</h2>
        </div>
        <div className="mid">
          <div className="img_wrap">
            <img src={ContactImg} alt="KangSeohyeon_photo" />
          </div>
          <div className="one">
            <div className="two">
              <h2>
                <p>SOLUTIONS</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="bot">
          <Link to="#" id="goTop" className="top_button">
            GO TOP
          </Link>
          <div className="text">SEND ME A MESSAGE:</div>
          <Link to="mailto:wolves941110@gmail.com" className="mail">
            wolves941110@gmail.com
          </Link>
        </div>
        <div className="sns">
          <span>
            <Link to="#">WORDPRESS</Link>MY WORKS 2023
          </span>
          <span>
            <Link to="#">NOTION</Link>WORKS DESCRIPTION
          </span>
          <span>
            <Link to="#">GITHUB</Link>MARKDOWN, CODE
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
