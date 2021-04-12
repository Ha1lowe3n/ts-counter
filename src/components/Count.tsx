import React from "react";

type CountPropsType = {
    count: number;
};

function Count({ count }: CountPropsType) {
    return <div className={count === 5 ? "Count_red" : ""}>{count}</div>;
}

export default Count;
