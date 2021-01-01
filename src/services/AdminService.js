import Axios from "axios";

const API_URL = "http://localhost:8080/api/admin";
class AdminService {
    getAdmin(id) {
        return Axios.get(API_URL + "/" + id);
    }

    updateAdmin(id, admin) {
        return Axios.put(API_URL + "/" + id, admin);
    }
}

export default new AdminService();
