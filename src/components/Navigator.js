import {Routes,Route} from 'react-router-dom';
import HomePage from './Homepage';

const Navigator=()=>{
   return(
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
   );
   
}
export default Navigator;