import Button from "./Button";

const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:scale-105
                    transition-transform duration-300 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-white">{contact.name}</h2>
        <p className="text-gray-300">{contact.email}</p>
        <p className="text-gray-300">{contact.phone}</p>
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <Button className="bg-green-500 hover:bg-green-600" onClick={() => onEdit(contact)}>Edit</Button>
        <Button className="bg-red-500 hover:bg-red-600" onClick={() => onDelete(contact._id)}>Delete</Button>
      </div>
    </div>
  );
};

export default ContactCard;
