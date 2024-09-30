import './App.css';
import Body from './Components/Body';
import Join from './Pages/Join';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/Join' element={<Join/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/mainpage' element={<Body/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
