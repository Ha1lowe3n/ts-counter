import React, { useState } from "react";

import "./App.css";

import { Btn, Count } from "./components";

function App() {
    const [count, setCount] = useState<number>(0);

    const upCount = () => setCount(count + 1);
    const resetCount = () => setCount(0);

    return (
        <div className="App">
            <div className={"Count_wrapper"}>
                <Count count={count} />
            </div>

            <div className={"Buttons"}>
                <Btn title={"Inc"} callback={upCount} disabled={count === 5} />
                <Btn
                    title={"Reset"}
                    callback={resetCount}
                    disabled={count === 0}
                />
            </div>
        </div>
    );
}

export default App;
