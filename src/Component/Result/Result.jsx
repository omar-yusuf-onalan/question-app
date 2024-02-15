import { useContext } from "react";
import ChosenAnswersContext from "../../Context/ChosenAnswersContext";
import ResultIsVisibleContext from "../../Context/ResultIsVisibleContext";
import ScoreContext from "../../Context/ScoreContext";
import "./Result.style.css";

function Result() {
    const { resultIsVisible } = useContext(ResultIsVisibleContext);
    const { score } = useContext(ScoreContext);
    const { chosenAnswers } = useContext(ChosenAnswersContext);

    return (
        <>
            {resultIsVisible ? (
                <div className="result-component">
                    {chosenAnswers.map((answer) => {
                        return <div key={answer}>{answer}</div>;
                    })}
                    {chosenAnswers.length} sorudan {score} soruyu doğru yaptınız
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default Result;
