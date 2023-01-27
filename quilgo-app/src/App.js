import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom" ; 
import Home from './components/home';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/grid" element = {<Grid/>}/>
      </Routes>
    </div>
  );
}

export default App;
