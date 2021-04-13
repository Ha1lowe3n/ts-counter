import React, { ChangeEvent } from "react";

type ValuePropsType = {
    title: string;
    callback: (newValue: number) => void;
    value: number;
    comparison: boolean;
};

function Value({ title, callback, value, comparison }: ValuePropsType) {
    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        callback(+e.currentTarget.value);
    };

    return (
        <div className={"value"}>
            {`${title} value:`}
            <input
                className={value === -1 || comparison ? "error" : ""}
                type="number"
                min="-1"
                step="1"
                value={value}
                onChange={changeInput}
            />
        </div>
    );
}

export default Value;
