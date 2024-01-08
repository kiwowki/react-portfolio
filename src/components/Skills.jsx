import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

import { PersonalityText } from "../constants/index";
// import { skillText } from "../constants/index";

const Skills = () => {
  useEffect(() => {
    // personality_main GSAP 애니메이션
    const pertl = gsap.timeline({
      scrollTrigger: {
        trigger: ".personality_main",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    pertl
      .fromTo(
        ".personality_main .t1",
        {
          opacity: 0,
          x: "10vw",
        },
        {
          opacity: 1,
          x: "0",
        }
      )
      .fromTo(
        ".personality_main .t2",
        {
          opacity: 0,
          x: "10vw",
        },
        {
          opacity: 1,
          x: "0",
        }
      )
      .fromTo(
        ".personality_main .t3",
        {
          opacity: 0,
          x: "10vw",
        },
        {
          opacity: 1,
          x: "0",
        }
      )
      .fromTo(
        ".personality_main .t4",
        {
          opacity: 0,
          x: "10vw",
        },
        {
          opacity: 1,
          x: "0",
        }
      )
      .fromTo(
        ".personality_main .t5",
        {
          opacity: 0,
          x: "10vw",
        },
        {
          opacity: 1,
          x: "0",
        }
      );
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".personality_wrap",
      start: "top center",
      end: "bottom center",
      animation: pertl,
      scrub: true,
    });
    return () => {
      ScrollTrigger.getAll().forEach((ST) => ST.kill());
    };
  });

  return (
    <section id="skills">
      <h2 class="blind">skills</h2>
      <div class="skills_wrap">
        <div class="personality_wrap">
          <div class="personality_top">
            SOME ASPECTS OF
            <br /> MY PERSONALITY
          </div>
          <div class="personality_main">
            {PersonalityText.map((personality, index) => (
              <div key={`t${index + 1}`} className={`t${index + 1}`}>
                {personality.eng}
                <span>{personality.kor}</span>
              </div>
            ))}
          </div>
        </div>
        <div class="skillSet_wrap">
          <div class="skillSet_top">
            MORE ABOUT MY SKILL SET
            <br />
            AND THINGS I LIKE
            <br />
          </div>
          <div class="skillSet_main">
            <div class="top">
              <div class="left">
                <div class="h3">key</div>
              </div>
              <div class="mid">
                <div class="h3">html/css</div>
                <div class="h3">javascript</div>
                <div class="h3">react</div>
                <div class="h3">php</div>
                <div class="h3">node.js</div>
                <div class="h3">vue.js</div>
                <div class="h3">branding</div>
              </div>
              <div class="right">
                <div class="h3">skills</div>
              </div>
            </div>
            <div class="middle">
              <div class="left">
                <div class="h4">special</div>
              </div>
              <div class="mid">
                <div class="h4">graphic design</div>
                <div class="h4">workshops</div>
                <div class="h4">webflow</div>
                <div class="h4">pm</div>
                <div class="h4">3d</div>
                <div class="h4">architectural degree</div>
              </div>
              <div class="right">
                <div class="h4">expertise</div>
              </div>
            </div>
            <div class="bot">
              <div class="left">
                <div class="h3_bold">crush</div>
              </div>
              <div class="mid">
                <div class="h3_bold">fashion</div>
                <div class="h3_bold">digital fashion</div>
                <div class="h3_bold">nft art</div>
                <div class="h3_bold">metaverse</div>
                <div class="h3_bold">chrome design</div>
                <div class="h3_bold">workouts</div>
                <div class="h3_bold">seals</div>
              </div>
              <div class="right">
                <div class="h3_bold">things</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
