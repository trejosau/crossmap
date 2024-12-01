import SearchIcon from "./Icons/SearchIcon.jsx";
import VerifiedIcon from "./Icons/VerifiedIcon.jsx";
import NotiIcon from "./Icons/NotiIcon.jsx";

const Header = () => {
    return (
        <div className=" h-20 flex items-center justify-between pe-32">
            <div className="bg-inputs w-64 h-8 rounded-2xl flex items-center px-4">
                <SearchIcon className=" hover:fill-texto-azul hover:cursor-pointer hover:scale-110 transition-all" />
                <input
                    type="text"
                    placeholder="Buscar"
                    className="bg-transparent text-texto-azul ml-4 outline-none placeholder-gray-400 w-full focus:text-texto-azul focus:ring-0 hover:text-texto-azul"
                />
            </div>

            <div className="flex content-between gap-4">
                <div className="rounded-full bg-black bg-opacity-25 border-dorado-detalle border w-8 h-8 flex items-center justify-center">
                    <VerifiedIcon className="fill-dorado-detalle " />
                </div>
                <div className="rounded-full bg-inputs  w-8 h-8 flex items-center justify-center">
                    <NotiIcon className="fill-white " />
                </div>
            </div>
        </div>
    );
};

export default Header;
