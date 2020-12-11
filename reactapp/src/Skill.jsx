import react from 'react'
import './Skill.css'

import {ProgressBar} from 'react-bootstrap'




const Skill = (props) =>
{


    return (

        <div className="skill">

            <div className="skill-1">
             <h6> <b>{props.title}</b></h6>

            </div>


            <div className="skill-2">

                <ProgressBar animated now={props.percentage} label={`${props.percentage}%`} />


            </div>




        </div>




    )




}



export default Skill;