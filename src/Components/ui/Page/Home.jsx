/* eslint-disable no-unused-vars */

import { BackgroundBeams } from '../background-beams'


const Home = () => {
  return (
    <div className='container'>

      <div className='flex flex-col items-center'>
        <h1 className='w-4/6 mt-16 font-bold text-center text-7xl font-author text-bold'>Your One-Stop Shop for Front-End <span className='text-primary-500'>Awesomeness.</span></h1>
        <h4 className='w-1/2 mt-6 text-xl text-center'>Explore curated and handpicked goodies that enhance your workflow and cultivate your growth as a developer and designer.</h4>
      </div>

      <div className='flex justify-center mt-14 font-satoshi'>
        <div className='flex justify-center gap-8 p-2 px-8 font-medium text-white bg-black rounded-md '>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>All</div>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>Tools</div>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>Typography</div>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>Libraries</div>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>Inspiration</div>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>Youtube</div>
          <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm'>Technologies</div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  )
}

export default Home