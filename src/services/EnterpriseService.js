import Axios from "axios"

var API_URL = "http://localhost:8080/api/enterprises"

class EnterpriseService {
    countEnterprise() {
        return Axios.get(API_URL + "/count");
    }
    topFiveEnterprises() {
        return Axios.get(API_URL + "/chart/top-five-enterprises");
    }
}

export default new EnterpriseService()
