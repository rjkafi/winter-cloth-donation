import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");
  
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const emailFromQuery = params.get("email");
      if (emailFromQuery) setEmail(emailFromQuery);
    }, [location.search]);
  
    const handleResetPassword = () => {
      if (email) {
        alert(`A password reset email will be sent to: ${email}`);
        window.location.href = "https://mail.google.com/";
      } else {
        alert("Please enter a valid email address.");
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <button
                type="button"
                onClick={handleResetPassword}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ForgetPassword;