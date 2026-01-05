const express=require("express");
const router=express.Router();
const validateToken=require("../middleware/validateTokenHadler.js")
const {getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContact
}=require("../controllers/contactController.js")

router.use(validateToken);
router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports=router;