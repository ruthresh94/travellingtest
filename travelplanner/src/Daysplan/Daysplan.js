import React  from 'react';
import './Daysplan.css'
import planimg1 from './icons8-back-button-50.png';
import planimg2 from './icons8-share-50.png'
function Daysplan()
{
    return(
        <>

        {/* Main half div */}
        <div className='half-plan'>

            {/* Photo div */}
            <div className='photo-plan'>
                <div className='icons-plan'>
                    <img src={planimg1}></img>
                    <h3>Travel Planner</h3>
                    <img src={planimg2}></img>
                </div>

                {/* Photo Desc Div */}
                <div className='loc-plan'><p>Kodaikanal</p><p className='days-plan'>3 Days</p></div>
            </div>

            {/* Day Indicator Div */}
            <div className='alldays-plan'>
                <p>Day 1</p><p><span>Explore Your Route</span></p>
            </div>

            {/* Hotels Div */}
            <div className='hotel-plan'>

                {/* Hotel Cards */}
                <div className='card1-plan'>
                    <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'></div>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'></div>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                    <div className='card1-rating'></div>
                    <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
            </div>


            {/* Days location Div */}
            <div className='loc1-plan'>
                <div className='loc1desc-plan'><div className='loc1time-plan'></div></div>
                <div className='loc1img-plan'></div>
            </div>
            <div className='vertical-plan'></div>
            <div className='dire-plan'><p>5-9 min</p><p>Directions</p></div>

            {/* Day Indicator Div */}
            <div className='alldays-plan'>
                <p>Day 2</p><p><span>Explore Your Route</span></p>
            </div>

            {/* Hotels Div */}
            <div className='hotel-plan'>

                {/* Hotel Cards */}
                <div className='card1-plan'>
                    <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'></div>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'></div>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                    <div className='card1-rating'></div>
                    <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
            </div>


            {/* Days location Div */}
            <div className='loc1-plan'>
                <div className='loc1desc-plan'><div className='loc1time-plan'></div></div>
                <div className='loc1img-plan'></div>
            </div>
            <div className='vertical-plan'></div>
            <div className='dire-plan'><p>5-9 min</p><p>Directions</p></div>

            {/* Day Indicator Div */}
            <div className='alldays-plan'>
                <p>Day 3</p><p><span>Explore Your Route</span></p>
            </div>

            {/* Hotels Div */}
            <div className='hotel-plan'>

                {/* Hotel Cards */}
                <div className='card1-plan'>
                    <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'></div>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                        <div className='card1-rating'></div>
                        <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
                <div className='card1-plan'>
                <div className='card1-imgplan'></div>
                    <div className='card1-desplan'>
                    <div className='card1-rating'></div>
                    <div className='card1-amntplan'><p>Rs. 1000/night</p><button>Select</button></div>
                    </div>
                </div>
            </div>


            {/* Days location Div */}
            <div className='loc1-plan'>
                <div className='loc1desc-plan'><div className='loc1time-plan'></div></div>
                <div className='loc1img-plan'></div>
            </div>
            <div className='vertical-plan'></div>
            <div className='dire-plan'><p>5-9 min</p><p>Directions</p></div>
        </div>

        

        </>
    )
}
export default Daysplan;