import Axios from "axios";
const API_URL = "http://localhost:8080/api/cong-viec"
class CongViecService {
    countCongViec() {
        return Axios.get(API_URL + "/count");
    }

    countMonthlys(year) {
        return Axios.get(API_URL + "/list-count-monthly/" + year);
    }

    top5CongTy() {
        return Axios.get(API_URL + "/chart/top-five-cong-ty");
    }
    top5CongViec() {
        return Axios.get(API_URL + "/chart/top-five-cong-viec");
    }
}

export default new CongViecService();