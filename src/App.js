
import './App.css';
import Query from './Components/query/Query';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Projects from './Components/projects/Projects';
import Contact from './Components/Contact/Contact';
import BuildingService from './Components/services/BuildingService';
import Firesystem from './Components/services/Firesystem';
import Services from './Components/services/Services';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Query/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}>
          <Route path='buildingservice' element={<BuildingService/>}/>
          <Route path='firesystem' element={<Firesystem/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
