import API from "../api/axios";

// Register a new user
export const registerUser = async (userData) => {
  // userData = { username, email, password }
  try {
    const response = await API.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Login user
export const loginUser = async (loginData) => {
  // loginData = { email, password }
  try {
    const response = await API.post("/users/login", loginData);
    // Store token in localStorage
    if (response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Get current user info (requires JWT in headers)
export const getCurrentUser = async () => {
  try {
    const response = await API.get("/users/current");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("token");
};
