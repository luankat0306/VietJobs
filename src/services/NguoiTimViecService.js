import Axios from "axios";
const API_URL = "http://localhost:8080/api/nguoi-tim-viec"
class NguoiTimViecService {
    countNguoiTimViec() {
        return Axios.get(API_URL + "/count");
    }
}

export default new NguoiTimViecService();