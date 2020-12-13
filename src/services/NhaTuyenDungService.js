import Axios from "axios"

var API_URL = "http://localhost:8080/api/nha-tuyen-dung"

class NhaTuyenDungService {
    countNhaTuyenDung() {
        return Axios.get(API_URL + "/count");
    }
}

export default new NhaTuyenDungService()
