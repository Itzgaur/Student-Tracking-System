import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CourseService from "../../services/admin/CourseService"


const UpdateCourse = () =>{

    const[courseName,setCourseName] =useState("")
    const[duration,setDuration] = useState("")
    const[fee,setFee] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()


     const updateCourse = (e) => {
        e.preventDefault()

        const course = {courseName,duration,fee}
        
        CourseService.updateCourse(id,course).then((response) =>  {
            
            navigate("/courselist")
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        CourseService.getCourseById(id).then((response) => {
            setCourseName(response.data.courseName)
            setDuration(response.data.duration)
            setFee(response.data.fee)
        })

    },[])

    return(
        <div className="container">
            <h1 className="text-center">Update Course</h1>
            <hr/>
            <div  className="card">
            <div className="card-body">
                    <form>
                      <div>
                          <label>Course Name : </label>
                          <input id="CourseName" type="text" required className="form-control"
                          value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
                         
                          
                      </div>
                      <div>
                          <label>Course Duration : </label>
                          <input id="Duration" type="text" required className="form-control"
                          value={duration} onChange={(e) => setDuration(e.target.value)}/>
                          
                      </div>
                      <div>
                          <label >Course Fee : </label>
                          <input id="fee" type="number" required className="form-control"
                          value={fee} onChange={(e) => setFee(e.target.value)} />
                          
                      </div>
                      <div>
                          <button type="Submit" className="btn btn-primary" onClick={(e) => updateCourse(e) }>Update</button>
                      </div>
                    </form>

                </div>

                
            </div>
           
        </div>
    )
    
}
export default UpdateCourse
