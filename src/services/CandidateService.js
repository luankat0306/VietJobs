import Axios from "axios";
import authHeader from "./authHeader";

var API_URL = "http://localhost:8080/api/candidates";

class CandidateService {
    countCandidate() {
        return Axios.get(API_URL + "/count", authHeader());
    }

    countDangCho() {
        return Axios.get(API_URL + "/count-dang-cho", authHeader());
    }

    countChapThuan() {
        return Axios.get(API_URL + "/count-chap-thuan", authHeader());
    }

    countTuChoi() {
        return Axios.get(API_URL + "/count-tu-choi", authHeader());
    }
}

export default new CandidateService();
