import API from "../api/axios";

// Get all contacts for current user
export const getContacts = async () => {
  try {
    const response = await API.get("/contacts");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Create a new contact
export const createContact = async (contactData) => {
  // contactData = { name, email, phone }
  try {
    const response = await API.post("/contacts", contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Update a contact by id
export const updateContact = async (id, contactData) => {
  try {
    const response = await API.put(`/contacts/${id}`, contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};

// Delete a contact by id
export const deleteContact = async (id) => {
  try {
    const response = await API.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: error.message };
  }
};
