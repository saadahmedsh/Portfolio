import react from 'react'
import './Offer.css'
import Skill from './Skill.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import responsive from './Images/responsive.svg';
import ux from './Images/ux.png';
import profile from './Images/profile.png';






const Offer = () =>
{

return (
    <>

    <div className="services">

    <ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  
        <h1><b className='about-text-b'>What I Offer?</b></h1>
    </ScrollAnimation>

    <ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}>  
        <div className="temp" ></div>
    </ScrollAnimation>   


  <ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  


        <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <img src={profile} alt="dynamic"/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Dynamic Website</h2>
          <p class="leading-relaxed text-base">I code the server-side of my webistes in Django to dynamically display the content on the client-side</p>
         
        </div>
      </div>
      
      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
         <img src={responsive} alt="reponsive"/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Responsive Design</h2>
          <p class="leading-relaxed text-base">I tend to create my websites responsive, so that my desgins can automatically adapt to the available space to ensure content cosistency across devices</p>
          
        </div>
      </div>
     

      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <img src={ux} alt="Ux"/>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">UI/UX Design</h2>
          <p class="leading-relaxed text-base">I design my websites according to the user requirements in order to provide best user experience possible</p>
          
        </div>
      </div>


    </div>
  
  </div>
</section>
</ScrollAnimation>  

    </div>

  <ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}> 

    <Skill

    title='CSS'
    percentage='80'

     />

  

    <Skill

    title='HTML'
    percentage='80'

    />

  <Skill

  title='JS'
  percentage='70'

  />



  <Skill

  title='BS'
  percentage='60'

 />



  <Skill

  title='JQuery'
  percentage='60'

  />



  <Skill

  title='Django'
  percentage='70'

 />


  <Skill

  title='SQL'
  percentage='90'

 />

</ScrollAnimation>  




<hr/>



</>



);



}


export default Offer;