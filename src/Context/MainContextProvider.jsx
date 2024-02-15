import { useState } from "react";
import StartIsVisibleContext from "./StartIsVisibleContext";
import QuestionIsVisibleContext from "./QuestionIsVisibleContext";

// eslint-disable-next-line react/prop-types
function MainContextProvider({ children }) {
    const [startIsVisible, setStartIsVisible] = useState(true);

    const startIsVisibleState = {
        startIsVisible,
        setStartIsVisible,
    };

    const [questionIsVisible, setQuestionIsVisible] = useState(false);

    const questionIsVisibleState = {
        questionIsVisible,
        setQuestionIsVisible,
    };

    return (
        <StartIsVisibleContext.Provider value={startIsVisibleState}>
            <QuestionIsVisibleContext.Provider value={questionIsVisibleState}>
                {children}
            </QuestionIsVisibleContext.Provider>
        </StartIsVisibleContext.Provider>
    );
}

export default MainContextProvider;
