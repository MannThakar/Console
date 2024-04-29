import { useLocation } from "react-router-dom";


const Details = () => {

    const location = useLocation();
    const { name, description, link, img, Category, id } = location.state;

    console.log("name:", name, "des", description, "link", link, "img:", img, "cateogry:", Category, "id", id);
    return (
        <div className="h-screen bg-neutral-950">
            <div className="container">
                <div className="flex ">
                    <div className="flex bg-red-400 h-11/12">
                        <img src={img} alt={name} className="w-1/2"/>
                    </div>
                    <div className="w-1/2 bg-blue-500">
                        <h1>{name}</h1>
                        <h3>{description}</h3>
                        <button className="py-4 text-white bg-red-400 rounded-md px-7">
                            <a href={link} />
                            View Source
                        </button>

                        <div className="flex gap-4">
                            <h4>Category</h4><h4>{Category}</h4>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Details