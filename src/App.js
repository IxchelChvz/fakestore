import logo from './logo.svg';
import './App.css';

import Productos from './components/Productos/Productos';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes } from "react-router-dom";
import Carrito from './components/Carrito';



function App() {
  return (
    <>
    <Navbar />
    {/* <Routes>

    <Route path="/" element={<Home />}></Route>

    </Routes> */}
    <Productos/>
      {/* <Navbar /> */}

      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/productos" element={<Productos />}></Route> */}
        {/* ruta dinámica añadiendo un parámetro
        /coches/100
        /coches/2
        /coches/ford
        */}
        {/* <Route path="/coche/:id" element={<Coche />}></Route>
        <Route path="/usuarios" element={<Usuarios />}></Route>
        <Route path="/usuario/:id" element={<Usuario />}></Route> */}

      {/* </Routes> */}

      <Carrito />
    </>
  );
}

export default App;
