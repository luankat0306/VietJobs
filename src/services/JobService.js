import Axios from "axios";
const API_URL = "http://localhost:8080/api/jobs"
class JobService {
    countJob() {
        return Axios.get(API_URL + "/count");
    }

    countMonthlys(year) {
        return Axios.get(API_URL + "/list-count-monthly/" + year);
    }

    topFiveJobs() {
        return Axios.get(API_URL + "/chart/top-five-jobs");
    }

    getYears() {
        return Axios.get(API_URL + "/list-year");
    }
}

export default new JobService();