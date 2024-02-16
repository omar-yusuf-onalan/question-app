import "./App.css";
import Question from "./Component/Question/Question";
import Result from "./Component/Result/Result";
import Start from "./Component/Start/Start";
import MainContextProvider from "./Context/MainContextProvider";

function App() {
    return (
        <>
            <div className="app-component">
            <MainContextProvider>
                <Start></Start>
                <Question></Question>
                <Result></Result>
            </MainContextProvider>
            </div>
        </>
    );
}

export default App;
