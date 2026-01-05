import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getContacts, createContact, updateContact, deleteContact } from "../services/contactService";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Fetch contacts safely
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await getContacts();
        if (isMounted) setContacts(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const openModal = (contact = null) => {
    if (contact) {
      setEditingContact(contact);
      setFormData({ name: contact.name, email: contact.email, phone: contact.phone });
    } else {
      setEditingContact(null);
      setFormData({ name: "", email: "", phone: "" });
    }
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        await updateContact(editingContact._id, formData);
      } else {
        await createContact(formData);
      }
      setModalOpen(false);
      const data = await getContacts();
      setContacts(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      await deleteContact(id);
      const data = await getContacts();
      setContacts(data);
    }
  };

  if (!user) return null;

  return (
    <div className="p-6 bg-linear-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col items-center mb-8">
  <h1 className="text-4xl font-bold text-white mb-2">My Contacts</h1>
  <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300">
    Welcome back, <span className="text-indigo-400 font-semibold">{user.username}</span>!
  </p>
</div>


        <div className="flex items-center gap-4">
          <Link
            to="/profile"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-indigo-400 font-semibold 
                       rounded-xl backdrop-blur-md shadow-md transition-all duration-200"
          >
            Profile
          </Link>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-xl shadow-lg" onClick={() => openModal()}>
            Add Contact
          </Button>
        </div>
      </div>

      {/* Contacts Grid */}
      {loading ? (
        <p className="text-white text-center mt-20">Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-300 text-center mt-20">No contacts found. Add your first contact!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map(contact => (
            <ContactCard
              key={contact._id}
              contact={contact}
              onEdit={openModal}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold text-white mb-4">
          {editingContact ? "Edit Contact" : "Add Contact"}
        </h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <InputField
            label="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Button type="submit" className="mt-4 w-full">
            {editingContact ? "Update Contact" : "Add Contact"}
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;
