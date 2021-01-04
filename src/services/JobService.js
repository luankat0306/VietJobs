import Axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/jobs";
class JobService {
    countJob() {
        return Axios.get(API_URL + "/count", authHeader());
    }

    countMonthlys(year) {
        return Axios.get(
            API_URL + "/list-count-monthly/" + year,

            authHeader()
        );
    }

    topFiveJobs() {
        return Axios.get(API_URL + "/chart/top-five-jobs", authHeader());
    }

    getYears() {
        return Axios.get(API_URL + "/list-year", authHeader());
    }
}

export default new JobService();
