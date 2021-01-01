import Axios from "axios"

const API_URL = "http://localhost:8080/api/provinces"
class ProvinceService {

    listProvince(){
        return Axios.get(API_URL);
    }
}

export default new  ProvinceService()