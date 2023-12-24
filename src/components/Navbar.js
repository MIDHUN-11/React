// import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
const Navbar =()=>{
    const navigate= useNavigate();
    return(
    <ul class="nav">
    <li class="nav-item">
        <Link to={'/'} >Homepage</Link>
       {/* <Button onClick={()=>{navigate('/')}}>Homepage</Button> */}
      {/* <a class="nav-link active" aria-current="page" >Homepage</a> */}
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  );
}
export default  Navbar;