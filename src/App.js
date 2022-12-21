import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Detail from './Component/Detail';
import AddStudent from './Component/AddStudent';
import Update from './Component/Update';
import Student from './Component/Student';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './Component/ContactUs';

function App() {
 return (

  <Detail>
  
    <div className="App">

<BrowserRouter>

<Navbar />

<Routes>

<Route path='/home' element={<Home />} />
<Route path='/ContactUs' element={<ContactUs/>} />
<Route  path='/add-student' element={<AddStudent />}/>
<Route path='/Update' element={<Update />}/>
<Route path='/Student' element={<Student/>}/>


</Routes>

</BrowserRouter>


     
    </div>
    </Detail>
  );
 
}

export default App;