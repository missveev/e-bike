
import './App.css';
import Header from "./header/header";
import { BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";

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
