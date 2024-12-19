import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    const navigate=useNavigate();
   const handleToUpdate= (e) =>{
        e.preventDefault();
        navigate('/auth/updateprofile')
   }

    return (
        <div >
             <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center   text-yellow-700 mb-6">
          Welcome, <span className="text-indigo-400">{displayName}!</span>
        </h1>
        <div className="flex flex-col items-center">
          {/* User Image */}
          <div className="mb-4">
            <img
              src={photoURL}
              alt=""
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
          </div>
          {/* Profile Information */}
          <div className="text-center space-y-2">
            <p className="text-lg">
              <span className="font-semibold">Name:</span>{" "}
              {displayName }
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>
          {/* Update  Button */}
          <div className="mt-6">
            <button onClick={handleToUpdate}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md">
                Update Profile
              </button>
            </button>
            
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Dashboard;