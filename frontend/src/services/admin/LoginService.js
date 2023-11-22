import axios from "axios";

const base_url ="http://localhost:8080/user"

class LoginService {

    getAuthentication(email,password){
        return axios.post(base_url,email,password)
    }

}
export default new LoginService()