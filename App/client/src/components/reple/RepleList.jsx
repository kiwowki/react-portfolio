import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import RepleContent from "./RepleContent";
import RepleWrite from "./RepleWrite";

const RepleList = () => {
    const [repleList, setRepleList] = useState([]);
    const repleListRef = useRef(null);

    const fetchRepleList = useCallback(() => {
        axios.post("/api/reple/getReple").then((response) => {
            if (response.data.success) {
                setRepleList([...response.data.repleList]);
            }
        });
    }, []);

    const onUpdateRepleList = useCallback(() => {
        fetchRepleList();
    }, [fetchRepleList]);

    useEffect(() => {
        onUpdateRepleList(); // 초기 로딩 시에도 업데이트 수행
    }, [onUpdateRepleList]);

    useEffect(() => {
        // RepleContent가 업데이트 될 때마다 스크롤을 맨 아래로 내림
        const repleListElement = repleListRef.current;
        if (repleListElement) {
            repleListElement.scrollTop = repleListElement.scrollHeight;
        }
    }, [repleList]);

    return (
        <>
            <div data-lenis-prevent-wheel ref={repleListRef} className="reple_list">
                {repleList.map((reple, idx) => {
                    return <RepleContent reple={reple} key={idx} />;
                })}
            </div>
            <RepleWrite onUpdateRepleList={onUpdateRepleList} />
        </>
    );
};

export default RepleList;
