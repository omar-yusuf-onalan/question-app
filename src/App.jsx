import "./App.css";
import Start from "./Component/Start/Start";
import MainContextProvider from "./Context/MainContextProvider";

function App() {
    return (
        <>
            <MainContextProvider>
                <Start></Start>
            </MainContextProvider>
        </>
    );
}

export default App;
