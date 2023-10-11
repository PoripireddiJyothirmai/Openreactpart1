import { Routes } from 'react-router-dom';
import './App.css';
import CoursePage from './Components/CoursePage';
import { Route } from 'react-router-dom';
import ClassworkPage from './ClassworkPage';

function App() {
  return (
    <div >
     <Navbar/>
     <Routes>
      <Route path="CoursePage" element={<CoursePage/>} />
      <Route path="/ClassworkPage" element={<ClassworkPage/>} />
     </Routes>
     <Navbar/>
    </div>
  );
}

export default App;