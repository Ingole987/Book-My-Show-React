import './App.css';
import axios from 'axios';
//Router
import {Routes, Route} from "react-router-dom";
//React slick 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//Pages
import Homepage from './pages/Home.page';
import Playpage from './pages/Play.page';
import Moviepage from './pages/Movie.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/movie/:id' element={<Moviepage/>}/>
      <Route path='/plays' element={<Playpage/>}/>
    </Routes>
  );
    
  
}

export default App;
