import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './Components/Body/Sidebar/Sidebar';
import Dashboard from './Components/Body/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Dashboard />
        </div>
      </Router>
    </div>
  );
}

export default App;
