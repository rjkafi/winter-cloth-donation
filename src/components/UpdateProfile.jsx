import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {
     
    const {updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate();

    const handleUpdateInformation = (e) =>{
        e.preventDefault();
        
        const name=e.target.name.value;
         const photoURL = e.target.photoURL.value;

         updateUserProfile({displayName:name, photoURL:photoURL})
         .then(()=>{
            navigate('/dashboard')
         })
         .catch(err =>{
            // console.log(err)
         })
         
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-10 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
                {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
                <form
                onSubmit={handleUpdateInformation} 
                className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                            Name
                        </label>
                        <input
                        name="name"
                            type="text"
                            placeholder="Enter new  name"
                            class="input mt-1 input-bordered input-accent w-full" />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">
                             Photo URL
                        </label>
                        <input
                        name="photoURL"
                            type="text"
                            placeholder="enter new photo URL"
                            class="input mt-1 input-bordered input-accent w-full" />
                    </div>
                    <div className="flex justify-center">
                    <button className="btn bg-blue-200 w-full">Update Information</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;