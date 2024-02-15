import { useContext, useState } from "react";
import StartIsVisibleContext from "./StartIsVisibleContext";
import QuestionIsVisibleContext from "./QuestionIsVisibleContext";
import QuestionIndexContext from "./QuestionIndexContext";
import ChosenAnswersContext from "./ChosenAnswersContext";
import ScoreContext from "./ScoreContext";
import ResultIsVisibleContext from "./ResultIsVisibleContext";

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

    const [score, setScore] = useState(0);

    const scoreState = {
        score,
        setScore,
    };

    const [resultIsVisible, setResultIsVisible] = useContext(
        ResultIsVisibleContext
    );

    const resultIsVisibleState = {
        resultIsVisible,
        setResultIsVisible,
    };

    return (
        <StartIsVisibleContext.Provider value={startIsVisibleState}>
            <QuestionIsVisibleContext.Provider value={questionIsVisibleState}>
                <QuestionIndexContext.Provider value={questionIndexState}>
                    <ChosenAnswersContext.Provider value={chosenAnswersState}>
                        <ScoreContext.Provider value={scoreState}>
                            <ResultIsVisibleContext.Provider value={resultIsVisibleState}>
                                {children}
                            </ResultIsVisibleContext.Provider>
                        </ScoreContext.Provider>
                    </ChosenAnswersContext.Provider>
                </QuestionIndexContext.Provider>
            </QuestionIsVisibleContext.Provider>
        </StartIsVisibleContext.Provider>
    );
}

export default MainContextProvider;
