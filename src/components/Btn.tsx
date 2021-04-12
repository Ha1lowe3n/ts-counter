import React from "react";

type IncBtnPropsType = {
    disabled: boolean;
    title: "Inc" | "Reset";
    callback: () => void;
};

function IncBtn({ disabled, title, callback }: IncBtnPropsType) {
    return (
        <button disabled={disabled} onClick={callback}>
            {title}
        </button>
    );
}

export default IncBtn;
