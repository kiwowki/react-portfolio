import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    // const aboutTextRef = useRef();

    useEffect(() => {}, []);

    return (
        <section id="about">
            <h2 className="blind">about</h2>
            <div className="about_wrap">
                <div className="about_text_top">
                    <div className="text t1 split">hey,</div>
                    <div className="text t2 split">Creative</div>
                    <div className="text t3 split">Developer</div>
                </div>
                <div className="about_img">
                    <div className="background-container">
                        <div className="background-copy"></div>
                        <div className="background-copy"></div>
                        <div className="background-copy"></div>
                        <div className="background-copy"></div>
                        <div className="background-copy"></div>
                    </div>
                </div>
                <div className="about_text_midle">
                    <div className="text t4 split">enhance skills</div>
                    <div className="text t5 split">passionate</div>
                </div>
                <div className="about_text_bottom">
                    <div className="text t6">
                        <h3 className="split2">fullstack developer</h3>
                        <p className="split3">
                            {/* <MaskText />
                            <MaskText />
                            <MaskText />
                            <MaskText />
                            <MaskText /> */}
                            경찰법학을 전공으로 공부하였고, 다양한 분야의 업무를
                            하며 나의
                            <br />
                            적성에 맞는 일을 찾고자 노력을 했습니다.
                            <br />
                            수 년간 공무원 준비와 생계유지를 병행하다가
                            국비지원학원에서 약 6개월간의 여정을 시작했습니다.
                            <br />
                            아직은 서툴고 부족하다는 점을 알고 있습니다.
                        </p>
                    </div>
                    <div className="text t7">
                        <h3 className="split2">enhance skills</h3>
                        <p className="split3">
                            개발자의 세계에서의 새로운 시작은 제게 있어서 큰
                            도전이자 기회입니다.
                            <br />
                            과거의 경험을 통해 진정으로 하고 싶은 일이
                            무엇인지를 고민하던 중,
                            <br />
                            생각을 현실로 구현하고 문제를 해결하는 과정이 얼마나
                            재미있고 짜릿한 일인지를 깨달았습니다.
                            <br />
                            본래 저의 성격과도 잘 맞다는 생각이 들어
                            프론트엔드와 백엔드를 공부를 하면서 그동안 아무것도
                            하지 못했다는 좌절과 어려움을 극복하였고,
                            <br />
                            웹개발을 통해 새로운 미래를 꿈꾸고 있습니다.
                        </p>
                        <p className="split3">
                            이제는 개발에 관한 자신의 생각을 공유하고 다른 동료
                            개발자 꿈나무들과 함께 성장할 수 있도록 서로
                            도와주는 것을 좋아하게되었습니다.
                            <br />
                            여가 시간에는 개발과 관련된 영상을 시청하고, 새롭게
                            알게 된 것을 직접 구현해보는 것을 즐기곤 합니다.
                            <br />이 도전은 제게 진정한 꿈을 추구하고 끈질기게
                            나아가기 위한 중요한 여정이며, 새로운 비전을 현실로
                            만들기 위한 시작점입니다.
                        </p>
                    </div>
                </div>
                <div id="section3">
                    <div className="intro-wrap">
                        <div className="intro i1">
                            <div className="p1">
                                <div className="about_photos_img">
                                    <p className="t1  mbm-diff">
                                        first Challenge
                                    </p>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p2">
                                <div className="about_photos_img">
                                    <p className="t2 mbm-diff">
                                        hidden Challenge
                                    </p>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p3">
                                <div className="about_photos_img">
                                    <p className="t3 mbm-diff">
                                        last Challenge
                                    </p>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                    <div className="photo_wrap">
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                        <div className="photo"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
