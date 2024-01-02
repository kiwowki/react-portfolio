import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import worksImage1 from "../assets/img/works1_1.jpg";
import worksImage2 from "../assets/img/works1_2.jpg";
import worksImage3 from "../assets/img/works1_3.jpg";
import worksImage4 from "../assets/img/works1_4.jpg";

const Works = () => {
    useEffect(() => {});
    return (
        <section id="works">
            <h2 className="blind">works</h2>
            <div className="works_start"></div>
            <div id="work1" className="work w1">
                <div className="work_wrap">
                    <div className="top">
                        <h2 className="title">YOUTUBE API</h2>
                        <span>
                            SITE DEVELOP,
                            <br />
                            DESIGN
                        </span>
                    </div>
                    <div className="desc">
                        react.js와 유튜브 API를 사용하여 유명 락밴드의 노래들을
                        들을 수 있는 사이트를 만들었습니다.
                        <br />
                        오늘의 추천픽 페이지에서 10가지의 노래들을 추천받을 수
                        있으며,
                        <br />
                        검색과 동영상 재생은 물론,
                        <br />
                        해당 유튜브 채널의 정보와 최신 영상 목록 또한 볼 수
                        있습니다.
                    </div>
                    <div className="img">
                        <img src={worksImage1} alt="img" />
                    </div>
                    <nav className="works_nav" role="navigation">
                        <Link to="#">code view</Link>
                        <Link to="#">site view</Link>
                    </nav>
                </div>
            </div>
            <div id="work2" className="work w2">
                <div className="work_wrap">
                    <div className="top">
                        <h2 className="title">MOVIE API</h2>
                        <span>
                            SITE DEVELOP,
                            <br />
                            DESIGN
                        </span>
                    </div>
                    <div className="desc">
                        VUE.js와 TMDB를 사용하여 최신 영화와 영화의 세부정보를
                        보여주는 사이트를 만들었습니다.
                        <br />
                        오늘의 추천픽 페이지에서 10가지의 노래들을 추천받을 수
                        있으며,
                        <br />
                        검색과 동영상 재생은 물론,
                        <br />
                        해당 유튜브 채널의 정보와 최신 영상 목록 또한 볼 수
                        있습니다.
                    </div>
                    <div className="img">
                        <img src={worksImage2} alt="img" />
                    </div>
                    <nav className="works_nav" role="navigation">
                        <Link to="#">code view</Link>
                        <Link to="#">site view</Link>
                    </nav>
                </div>
            </div>
            <div id="work3" className="work w3">
                <div className="work_wrap">
                    <div className="top">
                        <h2 className="title">node.js BLOG</h2>
                        <span>
                            SITE DEVELOP,
                            <br />
                            DESIGN
                        </span>
                    </div>
                    <div className="desc">
                        node.js를 사용하여 이미지를 포함한 글을 작성할 수 있는
                        사이트를 만들었습니다.
                        <br />
                        오늘의 추천픽 페이지에서 10가지의 노래들을 추천받을 수
                        있으며,
                        <br />
                        검색과 동영상 재생은 물론,
                        <br />
                        해당 유튜브 채널의 정보와 최신 영상 목록 또한 볼 수
                        있습니다.
                    </div>
                    <div className="img">
                        <img src={worksImage3} alt="img" />
                    </div>
                    <nav className="works_nav" role="navigation">
                        <Link to="#">code view</Link>
                        <Link to="#">site view</Link>
                    </nav>
                </div>
            </div>
            <div id="work4" className="work w4">
                <div className="work_wrap">
                    <div className="top">
                        <h2 className="title">MY HOME</h2>
                        <span>
                            SITE DEVELOP,
                            <br />
                            DESIGN
                        </span>
                    </div>
                    <div className="desc">
                        코딩의 기본개념과 여러가지 자바스크립트 효과등을
                        보여주는 개인 홈페이지입니다.
                        <br />
                        오늘의 추천픽 페이지에서 10가지의 노래들을 추천받을 수
                        있으며,
                        <br />
                        검색과 동영상 재생은 물론,
                        <br />
                        해당 유튜브 채널의 정보와 최신 영상 목록 또한 볼 수
                        있습니다.
                    </div>
                    <div className="img">
                        <img src={worksImage4} alt="img" />
                    </div>
                    <nav className="works_nav" role="navigation">
                        <Link to="#">code view</Link>
                        <Link to="#">site view</Link>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Works;
