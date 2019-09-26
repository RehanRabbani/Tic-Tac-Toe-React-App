import React from 'react';
import portfolio from '../assets/portfolio.png';
import link from '../assets/linkedin.png';
import git from '../assets/github.png';
const Header = ()=>{
    return(
       
<nav class="navbar navbar-light bg-light">

<a class="navbar-brand" href="https://rehanrabbani.github.io/portfolio/" target="_blank">
  
 <img src={portfolio} height="40px" width="40px"/>
</a>
<a class="navbar-brand" href="https://www.linkedin.com/in/rehan-rabbani-51a971167/" target="_blank">
  
 <img src={link} height="40px" width="40px" />
</a>
<a class="navbar-brand" href="https://github.com/RehanRabbani" target="_blank">
  
 <img src={git} height="40px" width="40px" />
</a>
</nav>
    )
}
export default Header;