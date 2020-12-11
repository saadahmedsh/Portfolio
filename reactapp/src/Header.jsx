import react from 'react'
import './Header.css'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ReactPlayer from 'react-player'
import videoPath from './Videos/background2.mp4'




const Header = () => {

    return (
        <div className="header">

            <div className="video-wrapper">



                <ReactPlayer
                    className='header_video'
                    url={videoPath}
                    width='100%'
                    height='100%'
                    controls={false}
                    loop={true}
                    playing={true}
                />





            </div>

            <div className="header_container">



                <h1  className='header_heading'>
                    Hello, I am <span className='headerSpan'><b>Saad Ahmad.</b></span> <br />
                    I'm a full-stack web developer.
                </h1>

                <button className="header_button">
                    View My Work <ArrowRightAltIcon />
                </button>


            </div>

        </div>

    );




}


export default Header;