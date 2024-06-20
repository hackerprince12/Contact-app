import { useEffect, useState } from "react";
import "./App.css";
import NotFoundContact from "./components/NotFoundContact";
import AddAndUpdate from "./components/AddAndUpdate";
import ContactCard from "./components/ContactCard";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
// import { FaRegUser } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { MdDriveFileRenameOutline } from "react-icons/md";
import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import useDisclous from "./hooks/useDisclous";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclous();

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return contactLists;
    });
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          console.log(contactLists);
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="max-auto main-div max-w-[370px]  px-4">
        <Navbar />
        <div className="flex">
          <div className="flex relative  flex-grow items-center">
            <CiSearch className="flex text-white text-3xl absolute ml-1  " />
            <input
              onChange={filterContacts}
              type="text"
              className="bg-transparent text-white pl-9 border-white border-2 rounded-lg  h-10 flex flex-grow"
            />
          </div>

          <CiCirclePlus
            onClick={onOpen}
            className="text-5xl  text-white cursor-pointer "
          />
        </div>

        <div className="mt-4 flex flex-col gap-2"> 
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer />
    </>
  );
}

export default App;
