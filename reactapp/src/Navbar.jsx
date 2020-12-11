import react from 'react'
import './Navbar.css'





const Navbar = ()=>

{


    return (
        <> 




<nav class="navbar navbar-icon-top navbar-expand-md navbar-dark bg-dark">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active ">
        <a class="nav-link" href="#">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">
        <i class="fa fa-info-circle" aria-hidden="true">
            
          </i>
          About
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">
        <i class="fa fa-tasks" aria-hidden="true">
            
          </i>
          Portfolio
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">
        <i class="fa fa-address-book-o" aria-hidden="true">
            
          </i>
          Contact
          
        </a>
      </li>
  
  
  
    </ul>
    
    
  </div>
</nav>




        </>


    );




}


export default Navbar;