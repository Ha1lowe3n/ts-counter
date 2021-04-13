import React from "react";

import { Btn, Count } from "./index";

type CounterPropsType = {
    count: number;
    upCount: () => void;
    resetCount: () => void;
    maxCount: number;
    startCount: number;
    editMode: boolean;
    errorMode: boolean;
};

function Counter({
    count,
    upCount,
    resetCount,
    maxCount,
    startCount,
    editMode,
    errorMode,
}: CounterPropsType) {
    return (
        <div className={"counter"}>
            <div className={"counter_wrapper"}>
                <div className={"counter_count"}>
                    {editMode ? (
                        !errorMode ? (
                            <span className={"counter_count_text"}>
                                Enter values and press 'SET'
                            </span>
                        ) : (
                            <span className={"counter_count_text_error"}>
                                Incorrect value!
                            </span>
                        )
                    ) : (
                        <Count count={count} maxCount={maxCount} />
                    )}
                </div>
            </div>

            <div className={"counter_wrapper"}>
                <div className={"counter_buttons"}>
                    <Btn
                        title={"INC"}
                        callback={upCount}
                        disabled={editMode || count === maxCount}
                    />
                    <Btn
                        title={"RESET"}
                        callback={resetCount}
                        disabled={editMode || count === startCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default Counter;
