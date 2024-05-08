
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react';
const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen bg-neutral-950 p-1">
                <div className="container">
                    <div className="flex mt-2 mb-8" >
                        <button className="flex gap-1 p-4 px-8 text-base text-white" onClick={() => navigate("/")}> <ArrowLeft /> Back</button>
                    </div>
                    <div className="grid grid-cols-1 mt-20 md:grid-cols-2">
                        <div className="mt-4 ml-4">
                            <h1 className="font-bold text-white text-8xl font-satoshi">About</h1>
                            <h2 className="text-5xl font-bold font-satoshi text-textbg-500">Console</h2>
                        </div>
                        <div className="w-11/12 mx-auto mt-6 text-textbg-500 font-satoshi">
                            <h2 className="leading-tight md:text-3xl">Feeling lost in a समुन्दर of web dev and design resources? Console to the rescue!</h2><br />
                            <h2 className="text-xl tracking-wider text-left md:text-2xl">We offer a meticulously curated collection of tools, tutorials, and learning materials, all chosen by experienced developers and designers like you. Focus on what you do best – unleashing your creativity and building ज़बरदस्त web experiences.  Stop those endless searches and unleash your creative जुगाड़ with Console – your one-stop shop for frontend awesomeness!
                            </h2>
{/* 
                            <div className="flex gap-8 ">
                                <div className="flex gap-4 mt-7">
                                    <div>
                                        <img src="https://media.licdn.com/dms/image/D4D03AQH3ta0D-dpKuA/profile-displayphoto-shrink_400_400/0/1698847433289?e=1720051200&v=beta&t=BQI1tWChi8ms8WXtfw6NGoZtVS1cc2nNEws4GRLWPLk" alt="" className="w-8 h-8 rounded-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl text-white">Mann Thakar</h2>
                                        <h2>Front-End </h2>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-7">
                                    <div>
                                        <img src="https://media.licdn.com/dms/image/D4D03AQFe_Zm26S2Ueg/profile-displayphoto-shrink_400_400/0/1706896576584?e=1720051200&v=beta&t=a895erh7OY3_hUi-fnLpgzT5hCwQjXBG2KhFqYt8Pcs" alt="" className="w-8 h-8 rounded-full" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl text-white">Heli Joshi</h2>
                                        <h2></h2>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About