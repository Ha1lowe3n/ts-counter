import React from "react";

type IncBtnPropsType = {
    disabled?: boolean;
    title: string;
    callback: () => void;
};

function Btn({ disabled, title, callback }: IncBtnPropsType) {
    return (
        <button disabled={disabled} onClick={callback}>
            {title}
        </button>
    );
}

export default Btn;
