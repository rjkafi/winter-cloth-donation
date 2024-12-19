import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div >
            <div >
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default AuthLayout;