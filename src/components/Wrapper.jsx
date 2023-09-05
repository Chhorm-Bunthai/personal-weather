import React from 'react'
import Time from './Time'
import SearchBar from './SearchBar';
import Location from './Location';

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

                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>TUE</p>
                            <div className="small-box">

                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>TUE</p>
                            <div className="small-box">

                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>TUE</p>
                            <div className="small-box">

                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>TUE</p>
                            <div className="small-box">

                            </div>
                            <p>12 <sup>o</sup></p>
                        </div>
                        <div className="idividual">
                            <p>TUE</p>
                            <div className="small-box">

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