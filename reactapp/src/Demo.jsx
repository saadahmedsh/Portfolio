import {react, useState} from 'react';
import VideoPop from 'react-video-pop';
import './Demo.css';
import ReactPlayer from 'react-player';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <ReactPlayer
                    //className='header_video'
                    url={props.url}
                    width='100%'
                    height='100%'
                    controls={false}
                    loop={true}
                    playing={true}
                />
         
        </Modal.Body>
      </Modal>
      
    );
  }





const Demo= (props)=>
{

    const [modalShow, setModalShow] = useState(false);


return (
<>


<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        url={props.url}
      />


<div className="demo__video">



<div className="_portfolio__container"  onClick={()=> setModalShow(true)}>
  <img src={props.imgurl} alt="amazon" className="image" />
  <div className="overlay">
    <div className="text">{props.text}</div>
  </div>
</div>

        




</div>
    

</>


)



}


export default Demo;