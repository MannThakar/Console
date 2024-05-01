/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css'

const Card = ({ title, description, link, Category, img }) => {


    return (
        <>
            {/* <div className="containers">
                <div className="box">
                    <img src={img} alt="" className='cardImg' />

                    <div className='cardBody'>
                        <p className="heading">{title}</p>
                        
                        <button className='Category'>{Category}</button>
                    </div>
                </div>
            </div> */}
            {
                <div className='bg-red-400 w-80 min-h-[500px] hover:border hover:border-white flex flex-col gap-6 rounded-md'>
                    <div className='flex items-center justify-center p-4 bg-blue-400 rounded-md h-80'>
                        <img src={img} alt="" className='w-11/12 rounded-xl max-h-60' />
                    </div>

                    <div className='h-24 p-2 pl-5'>
                        <h2 className='text-xl'>{title}</h2>
                        <p>Powered By</p>
                        <button className='px-4 bg-white rounded-md p'>{Category}</button>
                    </div>

                </div>}



        </>
    )
}

export default Card