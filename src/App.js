import Navbar from './component/Navbar';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>

  );
}

export default App;
