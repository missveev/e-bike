
import './App.css';
import Header from "./header/header";
import { BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
        </div>
        </BrowserRouter>
    );
}

export default App;
