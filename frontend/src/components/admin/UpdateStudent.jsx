import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import StudentService from "../../services/admin/StudentService"

const UpdateStudent = () => {

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[course_assigned,setCourse_assigned] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const updateStudent = (e) =>{
        e.preventDefault()

        const student = {firstName,lastName,course_assigned}

        console.log(student)

        StudentService.updateStudent(id,student).then((response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
        navigate("/studentlist")

       
    }
    useEffect(() => {
        StudentService.getById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setCourse_assigned(response.data.course_assigned)
        })
    },[])



    return(
        <div className="container">
            <h1 className="text-center"> Update Student</h1>
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
                        <div>
                            <button  className="btn btn-success" onClick={ (e) => updateStudent(e)}>Update </button>
                            <a href="/studentlist" className="btn btn-danger" style={{marginLeft:"20px"}}>Cancel</a>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>
    )
}
export default UpdateStudent