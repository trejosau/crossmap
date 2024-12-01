import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

const App = () => {
    return (
        <div className="bg-gradient-to-b from-azul-bg-principal-1 to-azul-bg-principal-2 h-screen overflow-hidden">
            <div className="grid grid-cols-12 h-full">
                <Sidebar />

                <div className="col-span-9  h-full flex flex-col">
                    <Header />

                    <Main />
                </div>
            </div>
        </div>
    );
};

export default App;
