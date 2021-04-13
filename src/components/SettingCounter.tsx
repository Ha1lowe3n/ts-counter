import React from "react";

import { Btn, Value } from "./index";

type SettingCounterPropsType = {
    changeMaxCount: (newMax: number) => void;
    changeStartCount: (newStart: number) => void;
    setNewValues: () => void;
    maxCount: number;
    startCount: number;
    editMode: boolean;
    errorMode: boolean;
};

function SettingCounter({
    setNewValues,
    changeMaxCount,
    changeStartCount,
    maxCount,
    startCount,
    editMode,
    errorMode,
}: SettingCounterPropsType) {
    const comparison: boolean = maxCount === startCount;

    return (
        <div className={"counter"}>
            <div className={"counter_wrapper"}>
                <div className={"settings"}>
                    <Value
                        title={"max"}
                        callback={changeMaxCount}
                        value={maxCount}
                        comparison={comparison}
                    />
                    <Value
                        title={"start"}
                        callback={changeStartCount}
                        value={startCount}
                        comparison={comparison}
                    />
                </div>
            </div>

            <div className={"counter_wrapper"}>
                <div className={"counter_buttons"}>
                    <Btn
                        title={"SET"}
                        callback={setNewValues}
                        disabled={!editMode || errorMode}
                    />
                </div>
            </div>
        </div>
    );
}

export default SettingCounter;
