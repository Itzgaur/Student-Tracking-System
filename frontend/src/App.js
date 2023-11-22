import logo from './logo.svg';
import './App.css';
import CourseList from './components/admin/CourseList';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import AddCourse from './components/admin/AddCourse';
import UpdateCourse from './components/admin/UpdateCourse';
import Home from './components/admin/Home';
import StudentList from './components/admin/StudentList';
import AddStudent from './components/admin/AddStudent';
import LoginPage from './components/admin/demo/LoginPage';
import UpdateStudent from './components/admin/UpdateStudent';




function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route  path="/courselist" element={<CourseList/>}></Route>
          <Route exact path="/addcourse" element={<AddCourse/>}></Route>
          <Route path="/updatecourse/:id" element={<UpdateCourse/>}></Route>
          <Route path="/studentlist" element={<StudentList/>}></Route>
          <Route path="/addstudent" element={<AddStudent/>}></Route>
          <Route path="/updateStudent/:id" element={<UpdateStudent/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
