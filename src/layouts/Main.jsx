import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Main = () => {
    return (
        <div className="bg-neutral-200">
            <Navbar></Navbar>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
            <Outlet></Outlet>
            </div>
            
            
            <Footer></Footer>
            
        </div>
    );
};

export default Main;