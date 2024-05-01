import { useLocation } from "react-router-dom";
import Nav from "../Page/Nav";

const Details = () => {

    const location = useLocation();
    const { name, description, link, img, Category, id } = location.state;

    console.log("name:", name, "des", description, "link", link, "img:", img, "cateogry:", Category, "id", id);
    return (
        <>

            <div className="p-1 bg-neutral-950">
                <Nav />
                <div className="container">
                    <div className="grid h-screen grid-cols-2 mt-16">
                        <div className="h-5/6">
                            <div className="flex items-center justify-center h-full bg-gray-200 border border-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                <img src={img} alt="" className="w-5/6 rounded-md h-1/2" />
                            </div>
                        </div>
                        <div className="text-white font-author ">
                            <div className="flex flex-col justify-center gap-4 pl-6 rounded-lg h-5/6 ">
                                <h2 className="text-4xl font-bold ">{name}</h2>
                                <p className="text-xl ">{description}</p>
                                <a href={link} >
                                    <button className="shadow__btn">
                                        View Source

                                    </button>
                                </a>

                                <div className="p-2 border-white border-y-2">
                                    <p className="text-xl">Category: {Category}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Details