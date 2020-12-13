import Axios from "axios"

var API_URL = "http://localhost:8080/api/trang-thai-ho-so"

class TrangThaiHoSoService {
    countTrangThaiHoSo() {
        return Axios.get(API_URL + "/count");
    }

    countDangCho() {
        return Axios.get(API_URL + "/count-dang-cho");
    }

    countChapThuan() {
        return Axios.get(API_URL + "/count-chap-thuan");
    }

    countTuChoi() {
        return Axios.get(API_URL + "/count-tu-choi");
    }
}

export default new TrangThaiHoSoService()
