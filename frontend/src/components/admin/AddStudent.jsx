import { useState } from "react"
import { useNavigate } from "react-router-dom"
import StudentService from "../../services/admin/StudentService"

const AddStudent = () => {

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState("")
    const[course_assigned,setCourse_assigned] = useState('')
    const navigate = useNavigate()

    const enrollStudent = (e) =>{
        e.preventDefault()

        const student = {firstName,lastName,email,course_assigned}

        console.log(student)

        StudentService.saveNewStudent(student).then((res) => {
            console.log(res.data)
            navigate("/studentlist")
        }).catch(error => {
            console.log(error)
        })
    }



    return(
        <div className="container">
            <h1 className="text-center"> Enroll New Student</h1>
            <hr/>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div>
                            <label>First Name : </label>
                            <input type="text" className="form-control" 
                                value={firstName} onChange= {(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <label>Last Name : </label>
                            <input type="text" className="form-control" 
                               value={lastName} onChange ={ (e) => setLastName(e.target.value)}  />
                        </div>
                        
                        <div>
                            <label>Course : </label>
                            <input type="text" className="form-control" 
                             value={course_assigned} onChange ={(e) => setCourse_assigned(e.target.value)} />
                        </div>
                        <button  className="btn btn-success" onClick={ (e) => enrollStudent(e)}>Enroll </button>
                        <a href="/studentlist" className="btn btn-danger" style={{marginLeft:"20px"}}>Cancel</a>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default AddStudent