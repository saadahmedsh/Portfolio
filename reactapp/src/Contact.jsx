import react from 'react'
import './Contact.css'
import ScrollAnimation from 'react-animate-on-scroll';






const Contact= () =>
{


  function submitForm(event)
  {


    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const message=document.getElementById('message').value;


     let data={
      name:name,
      email:email,
      message:message,
    }


    data=JSON.stringify(data);


  


    

    
 
  const xhr = new XMLHttpRequest();

 



  xhr.open('POST', 'http://localhost:8000/projects/contact/', true);
  xhr.getResponseHeader('Content-type', 'application/json');
 


  

 

  
  xhr.onload = function () {
      if(this.status === 200){

        alert(this.responseText);
  
      }
      else{
          console.log("Some error occured");
      }
  }

  
  xhr.send(data);


}


    


    
    

  






    return(


        <>


        <div className="contact">

    <ScrollAnimation animateIn="slideInRight" duration='2s' animateOnce={true}>  
        <h1><b className='about-text-b'>Contact</b></h1>
</ScrollAnimation>

<ScrollAnimation animateIn="slideInLeft" duration='2s' animateOnce={true}>  
        <div className="temp" ></div>
</ScrollAnimation> 

        {/* form starts here */}


        <ScrollAnimation animateIn="fadeIn" duration='2s' animateOnce={true}> 


        <form method='post' onSubmit={submitForm} action='/message'>
          


        <section class="text-gray-700 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">

    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100  border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100  border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  text-lg">Submit</button>
        </div>
        
      </div>
    </div>
  </div>
</section>



</form> 


</ScrollAnimation> 





        {/* form ends here */}




</div>









    </>

    );



}


export default Contact;