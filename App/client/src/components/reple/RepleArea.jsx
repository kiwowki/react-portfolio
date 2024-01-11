

import React, { useEffect, useState, useRef } from "react";
import RepleList from "./RepleList";
// import RepleWrite from "./RepleWrite";

const RepleArea = () => {
  const [repleListUpdated, setRepleListUpdated] = useState(false);
  const repleWrapRef = useRef();

  const handleUpdateRepleList = () => {
    setRepleListUpdated(!repleListUpdated);
  };

  useEffect(() => {
    // 스크롤이 있는 경우에만 실행
    if (repleWrapRef.current) {
      repleWrapRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [repleListUpdated]);

  return (
    <div className="reple_wrap" ref={repleWrapRef}>
      <RepleList repleListUpdated={repleListUpdated} />
      {/* <RepleWrite onUpdateRepleList={handleUpdateRepleList} /> */}
    </div>
  );
};

export default RepleArea;