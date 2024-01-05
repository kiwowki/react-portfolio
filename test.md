<div id="section3">
                    <div className="intro-wrap">
                        <div className="intro i1">
                            {[
                                "first Challenge",
                                "hidden Challenge",
                                "last Challenge",
                            ].map((challenge, index) => (
                                <div key={index} className={`p${index + 1}`}>
                                    <div className="about_photos_img">
                                        <p className={`t${index + 1} mbm-diff`}>
                                            {challenge}
                                        </p>
                                        {photoRows.map((row, rowIndex) => (
                                            <div
                                                key={rowIndex}
                                                className="photo_wrap"
                                            >
                                                {photosPerRow.map(
                                                    (photo, photoIndex) => (
                                                        <div
                                                            key={photoIndex}
                                                            className="photo"
                                                        ></div>
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




split2,3 이질감효과 수정?
