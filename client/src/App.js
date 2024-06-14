import "./App.css";
import Registation from "./component/Registation";
import Fetchdata from "./component/fetchdata";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Registation />} />
          <Route path="/user/all" element={<Fetchdata />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
