import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LeftSidebar from './components/LeftSidebar';
import ThongKe from './components/ThongKe';

function App() {
  return (
        <Router>
            <div className = "admin-wrapper">
              <LeftSidebar />
              <div className = "content">
                <Switch>
                    <Route exact path="/">
                      <ThongKe />
                    </Route>
                    <Route  path="/thong-ke">
                      <ThongKe />
                    </Route>
                </Switch>
              </div>
            </div>
        </Router>
        
  );
}

export default App;