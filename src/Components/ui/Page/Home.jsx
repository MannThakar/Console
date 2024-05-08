/* eslint-disable no-unused-vars */

import { BackgroundBeams } from "../background-beams";
import Card from "./Card";
import { Data } from "../../../utils/Data";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { ReactLenis, useLenis } from 'lenis/react'

const Home = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  const [Datas, setData] = useState(Data);
  const [visible, setVisible] = useState(false);
  const [dataDublicate, setDataDublicate] = useState(Data.slice(0, limit));

  useEffect(() => {
    allData();
  }, []);

  function toolsData() {
    const tools = Data.filter((item) => {
      return item.Category === "Tools";
    });

    setData(tools);
    console.log(Datas);
  }
  function typographyData() {
    const tools = Data.filter((item) => {
      return item.Category === "Typography";
    });
    setData(tools);
    console.log(Datas);
  }

  function UpskillingData() {
    const tools = Data.filter((item) => {
      return item.Category === "Upskilling";
    });
    setData(tools);
    console.log(Datas);
  }

  function inspirationData() {
    const tools = Data.filter((item) => {
      return item.Category === "Inspiration";
    });
    setData(tools);
    console.log(Datas);
  }

  function youtubeData() {
    const tools = Data.filter((item) => {
      return item.Category === "YT Channels";
    });
    setData(tools);
    console.log(Datas);
  }

  function technologiesData() {
    const tools = Data.filter((item) => {
      return item.Category === "Technologies";
    });
    setData(tools);
    console.log(Datas);
  }
  function allData() {
    // console.log(Datas);
    setData(Data);
  }
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })




  return (
    <div className="bg-neutral-950">
      <ReactLenis root>
      
        <div className="container">
          <div className="flex flex-col items-center">
            <h1 className="mt-16 text-4xl font-bold text-center text-white md:w-3/5 md:text-7xl font-author text-bold">
              Your One-Stop Shop for Front-End{" "}
              <span className="text-primary-500">Awesomeness.</span>
            </h1>
            <h4 className="mt-6 text-sm text-center text-white md:w-1/2 md:text-xl">
              Elevate your developer and designer journey with curated tools and
              resources. Unlock creativity and efficiency.
            </h4>
          </div>

          <div className="flex mt-24 overflow-auto md:justify-center font-satoshi">
            <div className="flex justify-center h-full gap-8 p-2 px-8 font-medium text-white bg-gray-400 rounded-md cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={allData}
              >
                All
              </div>
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={toolsData}
              >
                Tools
              </div>
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={typographyData}
              >
                Typography
              </div>
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={UpskillingData}
              >
                Upskilling
              </div>
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={inspirationData}
              >
                Inspiration
              </div>
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={youtubeData}
              >
                Youtube
              </div>
              <div
                className="text-2xl hover:bg-primary-500 hover:rounded-sm hover:w-1/4"
                onClick={technologiesData}
              >
                Technologies
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center">
        <nav >
          <div className="font-satoshi">
            <div className="cursor-pointer ">
              <a>
                <div className="pt-2 text-xl" onClick={allData}>
                  All
                </div>
              </a>
              <a>
                <div className="text-xl" onClick={toolsData}>
                  Tools
                </div>
              </a>
              <a>
                <div className="text-xl" onClick={typographyData}>
                  Typography
                </div>
              </a>
              <a>
                <div className="text-xl" onClick={UpskillingData}>
                  Upskilling
                </div>
              </a>
              <a>
                <div className="text-xl" onClick={inspirationData}>
                  Inspiration
                </div>
              </a>
              <a>
                <div className="text-xl" onClick={youtubeData}>
                  Youtube
                </div>
              </a>
              <a>
                <div className="text-xl" onClick={technologiesData}>
                  Technologies
                </div>
              </a>
              <div className="animation start-home"></div>
            </div>
          </div>
        </nav>
        </div> */}

          <section className="grid md:grid-cols-4 grid-cols-2">
            {Datas?.map((item) => {
              return (
                <>
                  <div
                    className="mt-5 "
                    key={item.id}
                    onClick={() => {
                      const data = {
                        name: item.title,
                        description: item.description,
                        link: item.link,
                        img: item.img,
                        Category: item.Category,
                        id: item.id,
                      };
                      navigate("/details", { state: data });
                    }}
                  >
                    <Card {...item} />
                  </div>
                </>
              );
            })}

          </section>

          {/* <div className="flex justify-center">
            <button
              onClick={() => {
                setLimit(limit + 10);
                setDataDublicate(Datas.slice(0, limit + 10));
              }}
              className="p-4 text-black bg-white rounded-full font-xs"
            >
              Show More
            </button>
          </div> */}


          {/* <BackgroundBeams /> */}
        </div>
      </ReactLenis>
    </div>
  );
};

export default Home;
