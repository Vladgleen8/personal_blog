import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <About />
                <Home />
            </div>
        </div>
    );
}

export default App;
