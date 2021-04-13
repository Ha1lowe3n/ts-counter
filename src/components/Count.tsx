import React from "react";

type CountPropsType = {
    count: number;
    maxCount: number;
};

function Count({ count, maxCount }: CountPropsType) {
    return <div className={count === maxCount ? "stop" : ""}>{count}</div>;
}

export default Count;
