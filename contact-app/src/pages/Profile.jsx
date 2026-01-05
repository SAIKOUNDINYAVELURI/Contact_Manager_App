import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";

const Profile = () => {
  const { user, handleLogout } = useContext(AuthContext);

  if (!user) return null; // optional loader

  return (
    <div className="flex flex-col items-center justify-center min-h-screen
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-10 w-96 text-center">
        <h1 className="text-3xl font-semibold text-white mb-6">My Profile</h1>
        <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Username:</span> {user.username}</p>
        <p className="text-gray-300 mb-2"><span className="font-semibold text-white">Email:</span> {user.email}</p>
        <Button className="mt-6 bg-red-500 hover:bg-red-600" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
