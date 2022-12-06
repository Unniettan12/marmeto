import Page from "./components/Page";
import "./App.css"
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"

const App = () => {
 
  return(
    <Router>
      <Routes>
        <Route path="/:id" element = {<Page/>} />
        <Route path="/" element = {<Page/>}/>
      </Routes>
    </Router>


  )
}

export default App;
