import { useContext } from "react";
import "./Start.style.css";
import StartIsVisibleContext from "../../Context/StartIsVisibleContext";
import QuestionIsVisibleContext from "../../Context/QuestionIsVisibleContext";
import QuestionIndexContext from "../../Context/QuestionIndexContext";

function Start() {
    const { startIsVisible, setStartIsVisible } = useContext(
        StartIsVisibleContext
    );
    const { setQuestionIsVisible } = useContext(QuestionIsVisibleContext);
    const { setQuestionIndex } = useContext(QuestionIndexContext);

    function handleClick() {
        setStartIsVisible(false);
        setQuestionIsVisible(true);
        setQuestionIndex(0);
    }

    return (
        <>
            {startIsVisible ? (
                <div className="start-component">
                    <h1>QUESTION APP</h1>
                    <p>Her soru ekranda en fazla 30sn kalacaktir.</p>
                    <p>İlk 10sn cevap şıkları görünmeyecektir.</p>
                    <p>
                        Cevap şıklarından biri tıklandıktan ya da 30sn
                        tamamlandıktan sonra yeni soruya geçilecektir.
                    </p>
                    <p>Geçmiş sorulara dönülemeyecektir.</p>
                    <p>
                        Test bitiminde her soruya verilen yanıt ile doğru ve
                        yanlış sayıları kullanıcı ile paylaşılacaktır.
                    </p>

                    <button id="start" onClick={handleClick}>
                        Teste Başla
                    </button>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default Start;
