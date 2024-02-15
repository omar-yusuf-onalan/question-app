import { useState } from "react";
import StartIsVisibleContext from "./StartIsVisibleContext";
import QuestionIsVisibleContext from "./QuestionIsVisibleContext";
import QuestionIndexContext from "./QuestionIndexContext";
import ChosenAnswersContext from "./ChosenAnswersContext";

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

    const [chosenAnswers, setChosenAnswers] = useState([]);

    const chosenAnswersState = {
        chosenAnswers,
        setChosenAnswers,
    };

    return (
        <StartIsVisibleContext.Provider value={startIsVisibleState}>
            <QuestionIsVisibleContext.Provider value={questionIsVisibleState}>
                <QuestionIndexContext.Provider value={questionIndexState}>
                    <ChosenAnswersContext.Provider value={chosenAnswersState}>
                        {children}
                    </ChosenAnswersContext.Provider>
                </QuestionIndexContext.Provider>
            </QuestionIsVisibleContext.Provider>
        </StartIsVisibleContext.Provider>
    );
}

export default MainContextProvider;
