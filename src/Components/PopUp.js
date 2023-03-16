import React from 'react'
import { BsXCircleFill } from "react-icons/bs";
import './PopUp.css';
function PopUp(props) {
    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                    <i className='btn'> 
                        <BsXCircleFill  onClick={() =>props.setTrigger(false)} />
                    </i>
                {props.children}
            </div>
        </div>
      ) : "";   
    }

export default PopUp