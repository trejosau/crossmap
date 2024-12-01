import ArrowBackIcon from "./Icons/ArrowBackIcon.jsx";
import UploadIcon from "./Icons/UploadIcon.jsx";

const Main = () => {
    return (
        <div className="flex-1">
            <div className="w-[97%] h-[95%] bg-black bg-opacity-25 rounded-2xl p-3 relative">
                <ArrowBackIcon className="fill-white absolute top-5 left-5" />
                <div className="h-[92%] w-[65%] flex flex-col  mx-auto">
                    <div className=" w-full h-[17rem] bg-inputs mx-auto 2xl:h-[30rem]">
                        <UploadIcon />
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-white font-semibold">
                                TITULO
                            </label>
                            <span className="text-gray-400 text-sm">0/30</span>
                        </div>

                        <input
                            type="text"
                            className="bg-inputs rounded-lg w-full outline-none py-1 px-4 text-white focus:ring-2 focus:ring-indigo-500"
                            placeholder="Escribe el título"
                        />
                    </div>

                    <div className="mt-5">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-white font-semibold ">
                                DESCRIPCIÓN
                            </label>
                            <span className="text-gray-400 text-sm">0/150</span>
                        </div>
                        <textarea
                            className="bg-inputs rounded-lg w-full h-24 outline-none px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 resize-none"
                            placeholder="Escribe una descripción"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
