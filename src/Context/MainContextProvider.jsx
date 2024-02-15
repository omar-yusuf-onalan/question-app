import { useState } from "react";
import StartIsVisibleContext from "./StartIsVisibleContext";

// eslint-disable-next-line react/prop-types
function MainContextProvider({ children }) {
    const [startIsVisible, setStartIsVisible] = useState(true);

    const startIsVisibleState = {
        startIsVisible,
        setStartIsVisible,
    };

    return (
        <StartIsVisibleContext.Provider value={startIsVisibleState}>
            {children}
        </StartIsVisibleContext.Provider>
    );
}

export default MainContextProvider;
