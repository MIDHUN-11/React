import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Navigator from './components/Navigator';
import HomePage from './components/Homepage';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>

        <Route path='/' element={<HomePage />}></Route>


      </Routes> */}
      <Navigator/>
    </div>
  );
}

export default App;
