import Axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/api/applicants";
class ApplicantService {
    getApplicants() {
        return Axios.get(API_URL, authHeader());
    }

    createApplicant(applicant) {
        return Axios.post(API_URL + "/signup", applicant, authHeader());
    }

    getApplicant(id) {
        return Axios.get(API_URL + "/" + id, authHeader());
    }

    updateApplicant(id, applicant) {
        return Axios.put(API_URL + "/" + id, applicant, authHeader());
    }

    deleteApplicant(id) {
        return Axios.delete(API_URL + "/" + id, authHeader());
    }

    countApplicant() {
        return Axios.get(API_URL + "/count", authHeader());
    }

    searchApplicant(keyword) {
        return Axios.get(API_URL + "/search/" + keyword, authHeader());
    }
}

export default new ApplicantService();
