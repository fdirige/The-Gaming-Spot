import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopGames from "./TopGames";
import Search from "./Search";
import Nav from "./Nav";
import GameDetail from "./GameDetail";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                   <Route path='/' element={<div>Test</div>} />
                    <Route path='/topgames' element={<TopGames/>} />
                    <Route path='/search' element={<Search/>} />
                    <Route path='/game/:name' element={<GameDetail/>} />
                </Routes>
                </div>
        </Router>
    );
}

export default App;
