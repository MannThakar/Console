

const Nav = () => {
    return (

        <div className="container">
            <div className="flex items-center justify-between pb-6 pt-7">
                <div className="text-5xl font-bold text-white cursor-pointer font-panchang">Console</div>
                <div className="space-x-4">
                    <button className="p-4 px-8 text-xl font-bold text-white ">About</button>
                    <a href="https://forms.gle/Dt7tNEEdab3KADfD8" target="blank"><button className="p-4 px-8 text-xl font-bold text-white rounded-md bg-primary-500">Add a Resource</button></a>
                </div>
            </div>
            <hr className="" />
        </div>

    )
}

export default Nav