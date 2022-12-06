import Page from "./components/Page";
import "./App.css"
import {BrowserRouter as Router,Routes,Route,useNavigate} from "react-router-dom"

const App = () => {
  const navigate= useNavigate()
  navigate('/1')
  return(
    <Router>
      <Routes>
        <Route path="/:id" element = {<Page/>} />
      </Routes>
    </Router>


  )
}

export default App;
