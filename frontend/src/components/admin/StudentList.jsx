import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import StudentService from "../../services/admin/StudentService"
import Header from "./Header"


const StudentList = () => {

    const[studentlist,setStudentlist] = useState([])

    useEffect(() => {
        getAll()
    },[])

   const getAll = () => {
       StudentService.getAllStudents().then((response) => {
           setStudentlist(response.data)
       })
   }

   const deleteStudent = (id) => {
       console.log(id)
       StudentService.removeStudent(id).then((response) => {
           console.log(response.data)
           getAll()
       }).catch(error => {
           console.log(error)
       })
   } 



    return(
        <div>
        <Header/>
        <div className="container">
            
            <div>
                <h1 className="text-center">ALL Students</h1>
            </div>
            <hr/>
            <div>
                <Link to ="/addstudent" className="btn btn-primary">Enroll New Student</Link>
            </div>
            <hr/>
            <div>
                <table className="table table-striped table-bordered">
                <thead>
                        <tr>
                            <th>Student Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentlist.map(
                                students => 
                                <tr key={students.id}>
                                    <td>{students.id}</td>
                                    <td>{students.firstName}</td>
                                    <td>{students.lastName}</td>
                                    <td>{students.course_assigned}</td>
                                    <td>    
                                        <Link to={`/updateStudent/${students.id}`} className="btn btn-success" >Update</Link>
                                        <button className="btn btn-danger" onClick={ () => deleteStudent(students.id)} style={{marginLeft:"10px"}}>Delete</button>
                                        
                                        
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

export default StudentList