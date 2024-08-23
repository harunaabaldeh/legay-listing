import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../store/AuthContext";

const UserProfilee = () => {
  const [username, setUsername] = useState("");
  const { userId } = useAuth();

  useEffect(() => {
    axiosInstance.get(`auth/profile/${userId}`).then((res) => {
      console.log(res.data);
      setUsername(res.data.userData.username);
    });
  }, []);

  console.log("USERNAME " + username);
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 h-40 flex items-center justify-center">
          <div className="relative">
            <img
              className="h-32 w-32 rounded-full border-4 border-white object-cover"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            {username}
          </h1>
          <p className="text-center text-gray-600">Software Developer</p>
          <p className="text-center text-gray-600">johndoe@example.com</p>

          {/* About Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">About Me</h2>
            <p className="text-gray-600 mt-2">
              Experienced Software Developer with a passion for creating
              efficient and user-friendly applications. Skilled in various
              technologies, including React, Node.js, and AWS.
            </p>
          </div>

          {/* Details Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Location:</span> New York, USA
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Joined:</span> January 2020
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Skills:</span> React, Node.js,
                  AWS
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold">Languages:</span> English,
                  Spanish
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="px-6 py-4 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilee;
