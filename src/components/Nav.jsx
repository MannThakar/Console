import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-neutral-950">
      <div className="container">
        <div className="flex items-center justify-between p-5 md:pb-6 md:pt-7">
          <div className="text-3xl font-bold text-white cursor-pointer md:text-5xl font-panchang">
            Console
          </div>
          <div className="space-x-4 ">
            <Link to="/about">
              <button className="hidden h-8 mr-4 text-xl font-bold text-white hover:border-b-2 md:inline-block">
                About
              </button>
            </Link>
            <a href="https://forms.gle/Dt7tNEEdab3KADfD8" target="blank">
              <button className="px-4 py-4 text-sm font-bold text-white rounded-md md:text-xl md:p-4 md:px-8 bg-primary-500">
                Add a Resource
              </button>
            </a>
          </div>
        </div>
        <hr className="" />
      </div>
    </div>
  );
};

export default Nav;
