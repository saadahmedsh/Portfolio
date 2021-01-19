import react from 'react'
import './Projects.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Demo from './Demo.jsx'
import amazon from './Videos/amazon.mp4'
import amazonbg from './Images/amazon-bg.PNG' 
import band from './Images/band.png' 
import crowd from './Images/crowd.png'
import commerce from './Images/e-commerce.png' 
import blackjack from './Images/blackjack.PNG' 
import bandvid from './Videos/band.mp4'
import crowdvid from './Videos/crowd.mp4'
import blackjackvid from './Videos/blackjack.mp4'




const Projects = () =>
{


return (


<>



<div className="projects" id='projects'>

<ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  
        <h1><b className='about-text-b'>Portfolio</b></h1>
</ScrollAnimation>

<ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}>  
        <div className="temp" ></div>
</ScrollAnimation> 







{/* Images */}

<ScrollAnimation animateIn="slideInUp" duration='2s' animateOnce={true}>  

<div className="d-flex flex-row justify-content-center my-2">

<div className="portfolio__container">

<Demo url={amazon} imgurl={amazonbg} text='Amazon-Clone'/>
<Demo url={bandvid} imgurl={band} text='Band'/>
<Demo url={crowdvid} imgurl={crowd} text='Crowd-Funding'/>
<Demo url={amazon} imgurl={commerce} text='E-commerce'/>
<Demo url={blackjackvid} imgurl={blackjack} text='Blackjack'/>
      
</div>



</div>



</ScrollAnimation> 







{/* Images end */}



</div>



<hr/>



</>



);



}


export default Projects;