import Axios from "axios";
const API_URL = "http://localhost:8080/api/applicants";
class ApplicantService {
    getApplicants() {
        return Axios.get(API_URL);
    }

    createApplicant(applicant) {
        return Axios.post(API_URL, applicant);
    }

    getApplicant(id) {
        return Axios.get(API_URL + "/" + id);
    }

    updateApplicant(id, applicant) {
        return Axios.put(API_URL + "/" + id, applicant);
    }

    deleteApplicant(id) {
        return Axios.delete(API_URL + "/" + id);
    }

    countApplicant() {
        return Axios.get(API_URL + "/count");
    }
}

export default new ApplicantService();
