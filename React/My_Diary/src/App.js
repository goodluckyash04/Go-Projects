import './App.css';
import Header from './Components/Header';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Notes from './Components/Notes';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import CreateNotes from './Components/CreateNotes';

function App() 
{
  return (
  
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="notes" element={<Notes />}/>
      <Route path="login" element={<Login />}/>
      <Route path="signup" element={<SignUp />}/>
      {/* <Route path="createnote" element={<CreateNotes />}/> */}
      <Route path="editnote/:id" element={<CreateNotes />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
