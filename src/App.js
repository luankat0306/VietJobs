import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Applicant from "./components/Applicant/Applicant";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import history from "./history";
import PrivateRoute from "./components/PrivateRoute";
import Enterprise from "./components/Enterprise/Enterprise";
import Career from "./components/Career/Career";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>

                <PrivateRoute
                    exact
                    path={["/", "/thong-ke"]}
                    component={Dashboard}></PrivateRoute>
                <PrivateRoute
                    exact
                    path="/thong-tin"
                    component={Profile}></PrivateRoute>
                <PrivateRoute
                    exact
                    path="/ung-vien"
                    component={Applicant}></PrivateRoute>
                <PrivateRoute
                    exact
                    path="/doanh-nghiep"
                    component={Enterprise}></PrivateRoute>
                <PrivateRoute
                    exact
                    path="/nganh-nghe"
                    component={Career}></PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
