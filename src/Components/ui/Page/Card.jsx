/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css'

const Card = ({ title, description, link, Category, img }) => {


    return (
        <>
            <div className="containers">
                <div className="box">
                <img src={img} alt="" className='cardImg' />
                
                <div className='cardBody'>
                    <p className="heading">{title}</p>
                    <p>Powered By</p>
                    <button className='Category'>{Category}</button>
                </div>
                </div>
            </div>

            {/* <div classNameName="card">
                <div classNameName='imgContainer'>
                    <img src={img} alt="" classNameName='cardImg' />
                </div>
                <div classNameName='cardBody'>
                    <p classNameName="heading">{}</p>
                    <p>Powered By</p>
                    <button classNameName='Category'>{Category}</button>
                </div>
            </div> */}

        </>
    )
}

export default Card