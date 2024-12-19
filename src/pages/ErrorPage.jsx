import { Navigate, useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    const handleToGoBackHome = () => {
        navigate('/');  
    };
    return (
        <div className="flex flex-col 
            justify-center items-center py-28">
            <h4 className=" text-center text-3xl font-bold">
                 404 Not found page !!
            </h4>
            <button onClick={handleToGoBackHome} className="btn mt-10">Go Back Home</button>
        </div>
    );
};

export default ErrorPage;