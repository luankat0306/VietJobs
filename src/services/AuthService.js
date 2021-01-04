import Axios from "axios";
import history from "../history";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {
    login(username, password) {
        Axios.post(API_URL + "/signin", {
            username,
            password,
        }).then((res) => {
            if (res.data.accessToken)
                localStorage.setItem("user", JSON.stringify(res.data));
            history.push("/thong-ke");
            window.location.reload();
            return res.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return Axios.post(API_URL + "signup", {
            username,
            email,
            password,
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
