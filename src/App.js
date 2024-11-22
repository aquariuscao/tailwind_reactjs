import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Registration from "./components/Registration";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration /> }/>
          </Routes>
      </Router>
  );
}

export default App;
