import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdate from "./AddAndUpdate";
import { toast } from "react-toastify";
import useDisclous from "../hooks/useDisclous";
// import  {addDoc,collection} from 'firebase/firestore';

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclous();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Conatct Deleted Succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow-300  p-2 flex rounded-lg items-center justify-between "
      >
        <div className="flex gap-2 ">
          <FaRegUser className="text-orange-500 text-4xl  " />
          <div className="">
            <h2 className="text-sm font-semibold">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <MdDriveFileRenameOutline
            onClick={onOpen}
            className="text-green-500 cursor-pointer text-2xl"
          />
          <MdDelete
            onClick={() => deleteContact(contact.id)}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdate
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
