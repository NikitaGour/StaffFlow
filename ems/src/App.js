
import Login from './login';
import Register from './register';
import UserDetails from './user_details';
import All from './all_users.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.js';


function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/user-details' element={<UserDetails/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/all_users' element={<All/>}></Route>
     </Routes>
     </BrowserRouter>

    
  );
}

export default App;
