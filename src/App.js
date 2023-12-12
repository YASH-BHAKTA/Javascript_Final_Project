import './App.css';
import Nav from "./Components/Nav"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import AddStudent from './Components/AddStudent';
import ViewStudentList from './Components/ViewStudentList';
import Home from './Components/home'
function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Add_Student" element={<AddStudent />} />
            <Route path="/View_Student_List" element={<ViewStudentList />} />

          </Routes>

        </BrowserRouter>
        <Footer />
      </div>

    </div>
  );
}

export default App;