import react from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import './About.css'
import displayImg from './Images/display.jpg'





const About= ()=>
{

return (
    <>

    <div className="about">

    <ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  
    <h1 className="my-4"><b className="about-text-b">About Me</b></h1>
    </ScrollAnimation>

    <ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}>  
      <div className="temp" ></div>
      </ScrollAnimation>
      


    <section class="text-gray-700 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

  <ScrollAnimation animateIn="fadeIn" duration='2s' animateOnce={true}>  
  
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded about-img"  alt="hero" src={displayImg} />
    
  </ScrollAnimation>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center about-text">
  <ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Full-Stack Web developer</h1>
  </ScrollAnimation>

  <ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}> 

      <p class="mb-8 leading-relaxed">Hey! I am Saad, a Computer Science Professional and Web Developer. I have valuable experience in creating customized web pages with cutting-edge technologies like HTML5,CSS,JS(ECMA6),Bootstrap and Django. I am very passionate to provide my clients with best possible services and do my job with utmost dedication.</p>

  </ScrollAnimation>  
      
    </div>
  </div>
</section>

</div>


<hr/> 

</>


);


}


export default About;