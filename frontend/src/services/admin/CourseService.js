import axios from "axios";

const base_url = "http://localhost:8080/course"

class CourseService {

    getAllCourses(){
        return axios.get(base_url);
    }

    getCourseById(id){
        return axios.get(base_url + "/" +id)
    }

    saveNewCourse(course) {
        return axios.post(base_url,course)
    }

    updateCourse(id,course){
        return axios.put(base_url+"/"+id,course)
    }

    deleteCourse(id){
        return axios.delete(base_url+"/"+id)
    }

}

export default new CourseService()