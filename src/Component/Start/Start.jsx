import { useContext } from "react";
import "./Start.style.css";
import StartIsVisibleContext from "../../Context/StartIsVisibleContext";

function Start() {
    const { startIsVisible, setStartIsVisible } = useContext(StartIsVisibleContext);

    function handleClick() {
        setStartIsVisible(false);
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
