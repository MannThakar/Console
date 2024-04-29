/* eslint-disable no-unused-vars */

import { BackgroundBeams } from '../background-beams'
import Card from './Card'
import { Data } from '../../../utils/Data'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'





const Home = () => {


  const [Datas, setData] = useState(Data);
  const navigate = useNavigate()

  useEffect(() => {
    allData();
  }, [])


  function toolsData() {
    const tools = Data.filter((item) => {
      return item.Category === 'Tools'
    })

    setData(tools);
    console.log(Datas);
  }
  function typographyData() {
    const tools = Data.filter((item) => {
      return item.Category === 'Typography'
    })
    setData(tools);
    console.log(Datas);
  }

  function librariesData() {
    const tools = Data.filter((item) => {
      return item.Category === 'Libraries'
    })
    setData(tools);
    console.log(Datas);
  }


  function inspirationData() {
    const tools = Data.filter((item) => {
      return item.Category === 'Inspiration'
    })
    setData(tools);
    console.log(Datas);
  }


  function youtubeData() {
    const tools = Data.filter((item) => {
      return item.Category === 'Youtube'
    })
    setData(tools);
    console.log(Datas);
  }

  function technologiesData() {
    const tools = Data.filter((item) => {
      return item.Category === 'Technologies'
    })
    setData(tools);
    console.log(Datas);
  }
  function allData() {
    setData(Data);
    console.log(Datas);
  }
  return (

    <div className='bg-neutral-950'>
      
      <div className='container '>
        <div className='flex flex-col items-center'>
          <h1 className='w-4/6 mt-16 font-bold text-center text-white text-7xl font-author text-bold '>Your One-Stop Shop for Front-End <span className='text-primary-500'>Awesomeness.</span></h1>
          <h4 className='w-1/2 mt-6 text-xl text-center text-white'>Explore curated and handpicked goodies that enhance your workflow and cultivate your growth as a developer and designer.</h4>
        </div>

        <div className='flex justify-center mt-14 font-satoshi'>
          <div className='flex justify-center gap-8 p-2 px-8 font-medium text-white bg-black rounded-md '>

            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={allData}>All</div>
            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={toolsData}>Tools</div>
            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={typographyData}>Typography</div>
            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={librariesData}>Libraries</div>
            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={inspirationData}>Inspiration</div>
            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={youtubeData}>Youtube</div>
            <div className='text-2xl hover:bg-primary-500 hover:px-1 hover:rounded-sm' onClick={technologiesData}>Technologies</div>
          </div>
        </div>

        <section className='flex flex-wrap justify-center gap-5'>

          {
            Datas?.map((item) => {
              return (
                <>
                  <div className='mt-5 ' key={item.id} onClick={() => {
                    const data = {
                      name: item.title,
                      description: item.description,
                      link: item.link,
                      img: item.img,
                      Category: item.Category,
                      id: item.id
                    }
                    navigate("/details", { state: data })
                  }
                  }>
                    <Card {...item} />
                  </div>

                </>
              )
            })
          }
        </section>
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  )
}

export default Home