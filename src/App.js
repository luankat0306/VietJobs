import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Applicant from "./components/Applicant/Applicant";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <Router>
            <div className="admin-wrapper">
                <LeftSidebar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route path="/thong-ke">
                            <Dashboard />
                        </Route>
                        <Route path="/thong-tin">
                            <Profile />
                        </Route>
                        <Route exact path="/ung-vien">
                            <Applicant />
                        </Route>
                        <Route path="/ung-vien/ :id">
                            <Profile />
                        </Route>
                    </Switch>
                    <footer
                        style={{
                            display: "block",
                            marginTop: "30px",
                            width: "100%",
                            color: "gray",
                            textAlign: "center",
                        }}>
                        <h5>Copyright © VietJobs, Vietnam</h5>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default App;
