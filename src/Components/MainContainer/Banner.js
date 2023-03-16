import React from 'react'
import '../../Style/MainContainer.css'
import Artist from '../../img/artist.jpg';
import Check from '../../img/check.png';
import {FaEllipsisH , FaHeadphones, FaCheck} from 'react-icons/fa'
function Banner() {
  return (
    <div className='banner'>
        <img className='bannerImg' src={Artist} />
        <div className='content'>
            <div className='breadCrump'>
                <p>Home <span>/Popular Artist</span></p>
                <i>
                    <FaEllipsisH />
                </i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>A-Ha</h2>
                        <img src={Check} />
                    </div>
                    <p>
                        <i>
                            <FaHeadphones />
                        </i>
                        11,184,1821<span>Monthly Listeners</span>
                    </p>
                </div>
                <div className='right'>
                    <a href='#'>Play</a>
                    <a href='#'><i><FaCheck />Following</i></a>
                </div>
            </div>
        </div>
        <div className='bottomLayer'></div>
    </div>
  )
}

export default Banner