import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import moment from "moment";
import "moment/locale/ko";

const RepleContent = (props) => {
    const [deleteModalFlag, setDeleteModalFlag] = useState(false);
    const [authorPassword, setAuthorPassword] = useState(""); // 비밀번호 추가

    const ref = useRef();
    useOnClickOutside(ref, () => {
        setDeleteModalFlag(false);
        setAuthorPassword(""); // 모달이 닫힐 때 비밀번호 초기화
    });

    const openDeleteModal = () => {
        setDeleteModalFlag(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalFlag(false);
        setAuthorPassword(""); // 모달이 닫힐 때 비밀번호 초기화
    };

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("MMMM Do, hh:mm") + "(수정됨)";
        } else {
            return moment(a).format("MMMM Do hh:mm");
        }
    };

    const deleteHandler = (e) => {
        e.preventDefault();
        // 비밀번호 확인 추가
        if (authorPassword.trim() === "") {
            alert("비밀번호를 입력하세요.");
            return;
        }

        if (window.confirm("정말로 삭제하시겠습니까?")) {
            // 여기에서 서버로 비밀번호 전송 로직 추가
            sendDeleteRequest();
        }
    };

    const sendDeleteRequest = () => {
        const body = {
            repleId: props.reple._id,
            authorPassword: authorPassword,
        };

        axios
            .post("/api/reple/delete", body)
            .then((response) => {
                if (response.data.success) {
                    alert(response.data.message);
                    // window.location.reload();
                    props.onDeleteSuccess(props.reple._id);
                } else {
                    console.log(response.data);
                    const errorMessage =
                        response.data.message ||
                        "댓글 삭제에 실패하였습니다. 비밀번호를 다시 한번 확인해주세요.";
                    throw new Error(errorMessage);
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    // 서버에서 401 에러 발생 시
                    console.log("Unauthorized error:", err.response);
                    alert(
                        "비밀번호가 일치하지 않습니다. 비밀번호를 다시 한번 확인해주세요."
                    );
                } else {
                    // 다른 에러 처리
                    console.error(err);
                    alert(
                        "댓글 삭제에 실패하였습니다. 관리자에게 문의해주세요."
                    );
                }
            });
    };

    return (
        <div className="reple">
            <div className="reple_top">
                <div className="author">{props.reple.authorName}</div>
                <div className="date">
                    {SetTime(props.reple.createdAt, props.reple.updatedAt)}
                </div>
            </div>
            <div className="reple_bot">
                <div className="content">{props.reple.reple}</div>
                <button onClick={openDeleteModal}>삭제</button>
            </div>
            {deleteModalFlag && (
                <div className="modal" ref={ref}>
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        value={authorPassword}
                        onChange={(e) => setAuthorPassword(e.target.value)}
                    />
                    <button onClick={deleteHandler}>삭제</button>
                    <button onClick={closeDeleteModal}>취소</button>
                </div>
            )}
        </div>
    );
};

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default RepleContent;
