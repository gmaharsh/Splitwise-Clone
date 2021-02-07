import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
      </Router>
    </div>
  );
}

export default App;
