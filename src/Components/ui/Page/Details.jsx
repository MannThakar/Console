import { useLocation } from "react-router-dom";
import Nav from "../Page/Nav";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

const Details = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { name, description, link, img, Category, id } = location.state;

    console.log("name:", name, "des", description, "link", link, "img:", img, "cateogry:", Category, "id", id);
    return (
        <>

            <div className="p-1 bg-neutral-950">
                <Nav />
                <div className="container">
                    <div className="flex mb-8 mt-11" >
                        <button className="flex gap-1 p-4 px-8 text-base text-white" onClick={() => navigate("/")}> <ArrowLeft /> Back</button>
                    </div>
                    <div className="grid h-screen grid-cols-2 ">
                        <div className="h-5/6">
                            <div className="flex items-center justify-center h-full bg-opacity-0 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
                                <img src={img} alt="" className="w-1/2 rounded-md h-1/2 shadow-[0px_4px_16px_rgba(255,255,255,0.1),_0px_8px_24px_rgba(255,255,255,0.1),_0px_16px_56px_rgba(255,255,255,0.1)]" />
                            </div>
                        </div>
                        <div className="text-white font-author ">
                            <div className="flex flex-col gap-4 pl-6 rounded-lg h-5/6 ">
                                <h2 className="mt-20 text-4xl font-bold">{name}</h2>
                                <p className="text-2xl ">{description}</p>
                                <a href={link} >
                                    <button className=" bg-stone-300">
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