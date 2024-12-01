import HomeIcon from "./Icons/HomeIcon.jsx";
import XIcon from "./Icons/XIcon.jsx";
import IGIcon from "./Icons/IGIcon.jsx";
import DCIcon from "./Icons/DCIcon.jsx";

const Sidebar = () => {
    return (
        <div className="col-span-3 flex flex-col items-center justify-center">
            <div className="bg-gradient-to-r from-azul-bg-secundario-1 to-azul-bg-secundario-2 h-[28rem] w-64 rounded-2xl mt-24 2xl:h-[45rem] 2xl:w-[22rem]">
                <div className="h-full w-full flex flex-col ms-6 mt-10">
                    <div className="flex items-center text-texto-azul ">
                        <a
                            href="#"
                            className="flex items-center text-sm font-semibold text-texto-azul"
                        >
                            <HomeIcon fill="#029ee5" className="w-5 h-5 mr-6" />
                            <h1 className="font-basic-sans">HOME</h1>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
                <XIcon />
                <IGIcon />

                <DCIcon />
            </div>
        </div>
    );
};

export default Sidebar;
