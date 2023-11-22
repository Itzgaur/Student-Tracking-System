import axios from "axios";

const base_url = "http://localhost:8080/student"

class StudentService{

    getAllStudents(){
        return axios.get(base_url)
    }

    saveNewStudent(student){
        return axios.post(base_url,student)
    }

    getById(id){
        return axios.get(base_url+"/"+id)
    }

    updateStudent(id,student){
        return axios.put(base_url+'/'+id,student)
    }
    
    removeStudent(id){
        return axios.delete(base_url+"/"+id)
    }
}
export default new StudentService()