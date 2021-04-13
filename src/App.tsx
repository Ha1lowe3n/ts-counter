import React, { useEffect, useState } from "react";

import "./App.scss";

import { Counter, SettingCounter } from "./components";

function App() {
    const [startCount, setStartCount] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [maxCount, setMaxCount] = useState<number>(5);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [errorMode, setErrorMode] = useState<boolean>(false);

    useEffect(() => {
        const countStorage = localStorage.getItem("counterValue");
        const maxCountStorage = localStorage.getItem("maxCounterValue");
        const startCountStorage = localStorage.getItem("startCounterValue");
        if (countStorage && maxCountStorage && startCountStorage) {
            setCount(JSON.parse(countStorage));
            setMaxCount(JSON.parse(maxCountStorage));
            setStartCount(JSON.parse(startCountStorage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count));
        localStorage.setItem("maxCounterValue", JSON.stringify(maxCount));
        localStorage.setItem("startCounterValue", JSON.stringify(startCount));
    }, [count, maxCount, startCount]);

    if (
        !errorMode &&
        (maxCount === startCount || maxCount === -1 || startCount === -1)
    ) {
        setErrorMode(true);
    }

    const upCount = () => setCount(count + 1);
    const resetCount = () => setCount(startCount);
    const setEditErrorMode = () => {
        if (!editMode) setEditMode(true);
        if (errorMode) setErrorMode(false);
    };
    const changeMaxCount = (newMax: number) => {
        setEditErrorMode();
        setMaxCount(newMax);
    };
    const changeStartCount = (newStart: number) => {
        setEditErrorMode();
        setStartCount(newStart);
    };
    const setNewValues = () => {
        setCount(startCount);
        setEditMode(false);
    };

    return (
        <div className="App">
            <SettingCounter
                changeMaxCount={changeMaxCount}
                changeStartCount={changeStartCount}
                setNewValues={setNewValues}
                startCount={startCount}
                maxCount={maxCount}
                editMode={editMode}
                errorMode={errorMode}
            />
            <Counter
                count={count}
                upCount={upCount}
                resetCount={resetCount}
                startCount={startCount}
                maxCount={maxCount}
                editMode={editMode}
                errorMode={errorMode}
            />
        </div>
    );
}

export default App;
