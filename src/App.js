import logo from './logo.svg';
import './App.css';
import Productos from './components/Productos/Productos';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
    <Navbar />
    {/* <Routes>

    <Route path="/" element={<Home />}></Route>

    </Routes> */}
    <Productos/>
    </>
  );
}

export default App;
