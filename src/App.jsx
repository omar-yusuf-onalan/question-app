import "./App.css";
import Question from "./Component/Question/Question";
import Start from "./Component/Start/Start";
import MainContextProvider from "./Context/MainContextProvider";

function App() {
    return (
        <>
            <MainContextProvider>
                <Start></Start>
                <Question></Question>
            </MainContextProvider>
        </>
    );
}

export default App;
