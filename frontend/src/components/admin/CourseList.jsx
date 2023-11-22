import { useEffect, useState } from "react"
import CourseService from "../../services/admin/CourseService"
import {Link} from "react-router-dom"
import Header from "./Header"


const CourseList = () => {

    const[courses,setCourses] = useState([])

    useEffect(() => {
        getList()
    },[])

    const getList = () =>{
        CourseService.getAllCourses().then((response) => {
            setCourses(response.data)
           
        })

    }

  const deleteCourse = (id)  => {
      CourseService.deleteCourse(id).then((response) => {
          console.log(response.data)
          getList()
      }).catch(error => {
          console.log(error)
      })
  }

    

    return (
        <div>
        <Header/>
        <div className="container">
            
            <div>
                <h1 className="text-center">ALL Courses</h1>
            </div>
            <hr/>
            <div className="btn">
                <Link to="/addcourse" className="btn btn-primary">ADD New Course</Link>
            </div>
            <hr/>
           
            <div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Course Id</th>
                            <th>Course Name</th>
                            <th>Course Duration</th>
                            <th>Course Fee(Rs.)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(
                                courses => 
                                <tr key={courses.id}>
                                    <td>{courses.id}</td>
                                    <td>{courses.courseName}</td>
                                    <td>{courses.duration}</td>
                                    <td>{courses.fee}</td>
                                    <td>
                                        <Link to ={`/updatecourse/${courses.id}`} className="btn btn-success" >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteCourse(courses.id)} style ={{marginLeft:"10px"}} >Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
        </div>
    )
}

export default CourseList