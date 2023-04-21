import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PetsListAll from "./components/PetsListAll"
import PetsListOne from "./components/PetsListOne"
import PetsAdd from "./components/PetsAdd"
import PetsUpdate from "./components/PetsUpdate"


function App() {

  const [allPets, setAllPets] = useState([]);

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route element={<PetsListAll allPets={allPets} setAllPets={setAllPets}/>} exact path="/adopt" />
    <Route element={<PetsUpdate />} exact path="/pets/edit/:id" />
    <Route element={<PetsListOne />} exact path="/pets/:id" />
    <Route element={<PetsAdd />} exact path="/pets/add" />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
