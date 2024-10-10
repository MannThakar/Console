/* eslint-disable no-unused-vars */

import Card from "../components/common/Card";
import { CARD_DATA, COLUMN_DATA } from "../utils/constant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(CARD_DATA);
  const [active, setActive] = useState("All");
  const [limit, setLimit] = useState(10);
  const [records, setRecords] = useState(CARD_DATA);

  const filteredData = (filterItem) => {
    switch (filterItem) {
      case "Tools":
        setData(CARD_DATA.filter((item) => item.Category === "Tools"));
        setActive(filterItem);
        break;

      case "Typography":
        setData(CARD_DATA.filter((item) => item.Category === "Typography"));
        setActive(filterItem);
        break;

      case "Upskilling":
        setData(CARD_DATA.filter((item) => item.Category === "Upskilling"));
        setActive(filterItem);
        break;

      case "Inspiration":
        setData(CARD_DATA.filter((item) => item.Category === "Inspiration"));
        setActive(filterItem);
        break;

      case "Youtube":
        setData(CARD_DATA.filter((item) => item.Category === "YT Channels"));
        setActive(filterItem);
        break;

      case "Technologies":
        setData(CARD_DATA.filter((item) => item.Category === "Technologies"));
        setActive(filterItem);
        break;

      case "All":
        setRecords(CARD_DATA.slice(0, limit));
        setData(CARD_DATA);
        setActive(filterItem);
        break;
    }
  };

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const handleLimit = () => {
    setLimit(limit + 10);
    setRecords(data.slice(0, limit + 10));
  };
  console.log(limit);
  console.log(data.length);

  useEffect(() => {
    setRecords(data.slice(0, limit));
  }, [data, limit]);

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
          <div
            role="tablist"
            className=" mt-24 font-satoshi tabs tabs-boxed bg-gray-400 rounded-md cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sm:tabs-sm lg:tabs-lg xs:tabs-xs overflow-auto md:w-10/12 mx-auto"
          >
            {COLUMN_DATA.map((item) => (
              <a
                role="tab"
                className={`tab text-white md:text-2xl lg:text-2xl text-xl ${
                  active === item.title ? "tab-active" : ""
                }`}
                key={item.id}
                onClick={() => filteredData(item.title)}
                style={
                  active === item.title
                    ? { backgroundColor: "#FF5403", color: "white" }
                    : {}
                }
              >
                {item.title}
              </a>
            ))}
          </div>
          <section className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 lg:gap-2 md:mt-10 xl:grid-cols-5">
            {records?.map((item) => {
              return (
                <div
                  className="mt-5 "
                  key={item.id}
                  onClick={() => {
                    const navigationData = {
                      name: item.title,
                      description: item.description,
                      link: item.link,
                      img: item.img,
                      Category: item.Category,
                      id: item.id,
                      isFromHome: true,
                    };
                    navigate("/details", { state: navigationData });
                  }}
                >
                  <Card {...item} />
                </div>
              );
            })}
          </section>

          {records.length < data.length && (
            <div className="flex justify-center mt-5 pb-10 ">
              <button
                onClick={handleLimit}
                className="bg-white mx-auto p-5 text-black rounded-full"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </ReactLenis>
    </div>
  );
};

export default Home;
