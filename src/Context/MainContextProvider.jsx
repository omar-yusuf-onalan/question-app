import { useState } from "react";
import StartIsVisibleContext from "./StartIsVisibleContext";
import QuestionIsVisibleContext from "./QuestionIsVisibleContext";
import QuestionIndexContext from "./QuestionIndexContext";

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

    const [questionIndex, setQuestionIndex] = useState(-1);

    const questionIndexState = {
        questionIndex,
        setQuestionIndex,
    };

    return (
        <StartIsVisibleContext.Provider value={startIsVisibleState}>
            <QuestionIsVisibleContext.Provider value={questionIsVisibleState}>
                <QuestionIndexContext.Provider value={questionIndexState}>
                    {children}
                </QuestionIndexContext.Provider>
            </QuestionIsVisibleContext.Provider>
        </StartIsVisibleContext.Provider>
    );
}

export default MainContextProvider;
