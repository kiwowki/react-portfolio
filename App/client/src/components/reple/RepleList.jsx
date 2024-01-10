import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import RepleContent from "./RepleContent";
import RepleWrite from "./RepleWrite";

const RepleList = ({ repleListRef }) => {
    const [repleList, setRepleList] = useState([]);

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

    return (
        <>
            <div ref={repleListRef} className="reple_list">
                {repleList.map((reple, idx) => {
                    return <RepleContent reple={reple} key={idx} />;
                })}
            </div>
            <RepleWrite onUpdateRepleList={onUpdateRepleList} />
        </>
    );
};

export default RepleList;
