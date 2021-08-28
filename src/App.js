import './App.css';
import Person from './components/Person';
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom"
import BioPage from './components/BioPage';


function App() {
  return (
    <Router>
        <div className="App">
            <header className="App-header">
                <div className="header">
                    <h1>Familia Morales</h1>
                </div>
                <Route exact path="/" component={Home}/>
                <Route path="/person/:id" component={Person}/>
                <Route path="/biopage/:id" component={BioPage}/>
            </header>
        </div>
    </Router>

  );
}

export default App;
