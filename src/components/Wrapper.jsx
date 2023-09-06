import React from 'react'
import Time from './Time'
import SearchBar from './SearchBar';
import Location from './Location';
import Pic1 from '../assets/1.svg'
import Pic2 from '../assets/2.svg'
import Pic3 from '../assets/3.svg'
import Pic4 from '../assets/4.svg'
import Pic5 from '../assets/sun.svg'
import Pic6 from '../assets/rain with light.svg'

function Wrapper() {
  return (
    <>
        <section className='top'>
            <Time />
            <Location />
        </section>
        <section className='search'>
            <SearchBar />
        </section>
        <footer>
                <div className='container-footer'>
                    <div className="today">
                        <div className="middle">
                            <div className="circle"></div>
                            <div className="description">
                                <p className='today-text'>TODAY</p>
                                <h2>12 <sup>o</sup> </h2>
                            </div>
                        </div>
                    </div>
                    <div className="days-week">
                        <div className="idividual">
                            <p>TUE</p>
                            <div className="small-box">
                                    <img src={Pic1} alt='tue'/>
                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>WED</p>
                            <div className="small-box">
                                    <img src={Pic2} alt='tue'/>
                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>THUR</p>
                            <div className="small-box">
                                    <img src={Pic3} alt='tue'/>
                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>FRI</p>
                            <div className="small-box">
                                    <img src={Pic4} alt='tue'/>
                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>SAT</p>
                            <div className="small-box">
                                    <img src={Pic5} alt='tue'/>
                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>SUN</p>
                            <div className="small-box">
                                    <img src={Pic6} alt='tue'/>
                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        
                    </div>
                    

                </div>
        </footer>
        </>
  )
}

export default Wrapper;