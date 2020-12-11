import react from 'react'
import './Projects.css'
import ScrollAnimation from 'react-animate-on-scroll';
import crowd from './Images/1.PNG';
import band from './Images/2.PNG';
import blackjack from './Images/3.PNG';






















const Projects = () =>
{


return (


<>




  


<div className="projects">

<ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  
        <h1><b className='about-text-b'>Portfolio</b></h1>
</ScrollAnimation>

<ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}>  
        <div className="temp" ></div>
</ScrollAnimation> 







{/* Images */}

<ScrollAnimation animateIn="slideInUp" duration='2s' animateOnce={true}>  
<section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

      

      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
         <a href='http://127.0.0.1:8000/projects/crowd'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={crowd} alt="blog" />
          </a>
          <div class="p-6">
            
           
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">CrowdFunding</h1>
            <p class="leading-relaxed mb-3">Website for an organization that accumulates funds; made with HTMl, CSS, JavaScript and Bootsrap</p>
            {/* <div class="flex items-center flex-wrap ">
               <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><Link to='/band'> View </Link>
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a> 
               
            </div> */}
          </div>
        </div>
      </div>

    



      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <a href='http://127.0.0.1:8000/projects/band'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={band} alt="blog" />
          </a>
          <div class="p-6">
           
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Band</h1>
            <p class="leading-relaxed mb-3">Website for fans to buy tickets; made with HTMl, CSS, JavaScript and Bootsrap</p>
            <div class="flex items-center flex-wrap">
              {/* <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><a >View</a>
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
               */}
            
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <a href='http://127.0.0.1:8000/projects/blackjack'>
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={blackjack} alt="blog" />
          </a>
          <div class="p-6">
           
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">BlackJack</h1>
            <p class="leading-relaxed mb-3">BlackJack game between two player; made with HTML,CSS and JavaScript</p>
            <div class="flex items-center flex-wrap ">
              {/* <a class="text-indigo-500 inline-flex items-center md:mb-2  lg:mb-0"><a href='/blackjack/index.html'>View</a>
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</ScrollAnimation> 







{/* Images end */}



</div>



<hr/>



</>



);



}


export default Projects;