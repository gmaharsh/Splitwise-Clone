import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Dashboard from './Components/Body/Dashboard/Dashboard';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/SignUp/Signup';
import { AuthContext, AuthProvider } from './context/auth';

// import AuthRoute from './utils/AuthRoute';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <div className="app__body">
              <Route exact path="/">
                <Sidebar />
                <Dashboard />
              </Route>
            </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
