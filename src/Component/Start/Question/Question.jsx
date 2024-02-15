import "./Question.style.css"
import { useContext, useState } from "react";
import QuestionIsVisibleContext from "../../../Context/QuestionIsVisibleContext";
import questions from "../../../questions";
import QuestionIndexContext from "../../../Context/QuestionIndexContext";

function Question() {
    const { questionIsVisible, setQuestionIsVisible } = useContext(
        QuestionIsVisibleContext
    );

    const { questionIndex, setQuestionIndex } =
        useContext(QuestionIndexContext);

    const handleAnswer = (selectedAnswer) => {};

    const [answerIsVisible, setAnswerIsVisible] = useState(false);

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
