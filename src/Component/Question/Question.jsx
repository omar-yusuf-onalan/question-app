import "./Question.style.css";
import { useContext, useEffect, useState } from "react";
import QuestionIsVisibleContext from "../../Context/QuestionIsVisibleContext";
import questions from "../../questions";
import QuestionIndexContext from "../../Context/QuestionIndexContext";
import ChosenAnswersContext from "../../Context/ChosenAnswersContext";
import ScoreContext from "../../Context/ScoreContext";

function Question() {
    const { questionIsVisible, setQuestionIsVisible } = useContext(
        QuestionIsVisibleContext
    );
    const { questionIndex, setQuestionIndex } =
        useContext(QuestionIndexContext);
    const { setScore } = useContext(ScoreContext);
    const { setChosenAnswers } = useContext(ChosenAnswersContext);

    const [answerIsVisible, setAnswerIsVisible] = useState(false);

    useEffect(() => {
        if (questionIndex === -1) {
            return () => {};
        }

        if (questionIndex === questions.length) {
            setQuestionIsVisible(false);
            return () => {};
        }

        const timer = setTimeout(() => {
            setAnswerIsVisible(true);
        }, 10000);

        const timeUpTimer = setTimeout(() => {
            setQuestionIndex((previousIndex) => previousIndex + 1);
        }, 30000);

        return () => {
            clearTimeout(timer);
            clearTimeout(timeUpTimer);
        };
    }, [questionIndex, setQuestionIndex, setQuestionIsVisible]);

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[questionIndex].answer) {
            setScore((previousScore) => previousScore + 1);
        }

        setChosenAnswers((previousArray) => [...previousArray, selectedAnswer]);
        setAnswerIsVisible(false);
        setQuestionIndex((previousIndex) => previousIndex + 1);
    };

    return (
        <>
            {questionIsVisible && questionIndex < questions.length ? (
                <div className="question-component">
                    <img src={questions[questionIndex].media} alt="" />
                    <p>{questions[questionIndex].question}</p>
                    {answerIsVisible ? (
                        <div>
                            <button
                                onClick={() =>
                                    handleAnswer(
                                        questions[questionIndex].options[0]
                                    )
                                }
                            >
                                A. {questions[questionIndex].options[0]}
                            </button>
                            <button
                                onClick={() =>
                                    handleAnswer(
                                        questions[questionIndex].options[1]
                                    )
                                }
                            >
                                B. {questions[questionIndex].options[1]}
                            </button>
                            <button
                                onClick={() =>
                                    handleAnswer(
                                        questions[questionIndex].options[2]
                                    )
                                }
                            >
                                C. {questions[questionIndex].options[2]}
                            </button>
                            <button
                                onClick={() =>
                                    handleAnswer(
                                        questions[questionIndex].options[3]
                                    )
                                }
                            >
                                D. {questions[questionIndex].options[3]}
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default Question;
