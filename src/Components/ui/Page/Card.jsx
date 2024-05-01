/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css'

const Card = ({ title, description, link, Category, img }) => {


    return (
        <>
            {
                <div className=' w-80 min-h-[500px] hover:border hover:border-white flex flex-col gap-6 rounded-md border border-white'>
                    <div className='flex items-center justify-center w-full p-4 bg-gray-400 rounded-md bg-indigo-900h-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 h-80'>
                        <img src={img} alt="" className='w-11/12 rounded-xl max-h-60' />
                    </div>

                    <div className='h-24 p-2 pl-5'>
                        <h2 className='text-xl text-white text-bold'>{title}</h2>
                        <button className='px-3 mt-4 text-lg text-black bg-white rounded-full font-basesemibold'>{Category}</button>
                    </div>

                </div>}



        </>
    )
}

export default Card