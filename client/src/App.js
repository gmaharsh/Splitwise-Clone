import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/SignUp/Signup';
import { AuthContext, AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';
import Body from './Components/Body/Body';
import { useContext } from 'react';

// import AuthRoute from './utils/AuthRoute';


function App() {

  const { user, logout } = useContext(AuthContext)
  console.log(user)

  return (
    <AuthProvider>
      <div className="App">
        <Router>
        <Header /> 
          <Route exact path="/" component={Body} />
          <AuthRoute exact path="/Signup" component={Signup} />
          <AuthRoute exact path="/login" component={Login} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
