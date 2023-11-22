import { Link } from "react-router-dom"
import "./header.css"

const Header = () =>{
    return(
        
        <div>
            


  <header>
<nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="toggle-navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbar-content">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/home" style={{color:"white"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/courselist" style={{color:"white"}}>Courses</a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/studentlist" style={{color:"white"}}>Students</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{color:"white"}}>Log Out</a>
        </li>
       
  
      </ul>
    </div>
  </nav>
      
  </header>
  



        </div>
    )
}

export default Header