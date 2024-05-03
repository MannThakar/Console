import { useLocation } from "react-router-dom";
import Nav from "../Page/Nav";
import { ArrowLeft,MoveRight } from 'lucide-react';
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
                    <div className="grid h-screen md:grid-cols-2 gird-cols-1">
                        <div className="h-5/6">
                            <div className="flex items-center justify-center h-full bg-opacity-0 border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
                                <img src={img} alt="" className="rounded-md h-1/2 shadow-[0px_4px_16px_rgba(255,255,255,0.1),_0px_8px_24px_rgba(255,255,255,0.1),_0px_16px_56px_rgba(255,255,255,0.1)]" />
                            </div>
                        </div>
                        <div className="text-white font-author ">
                            <div className="flex flex-col pl-2 rounded-lg md:gap-4 md:pl-12 h-5/6 ">
                                <h2 className="text-4xl font-bold md:mt-20 ">{name}</h2>
                                <p className="mt-2 md:text-2xl">{description}</p>
                                <a href={link} target="_blank">
                                    <button className="flex items-center justify-center gap-2 mt-3 text-xl font-medium text-black rounded-md bg-button-500 h-14 w-52">
                                        View Source <MoveRight/>
                                    </button>
                                </a>
                                <div className="p-2 mt-5 border-stone-400 border-y">
                                    <p className="text-xl "><span className="font-semibold">Category:</span> {Category}</p>
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