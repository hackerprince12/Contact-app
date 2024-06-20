import React from 'react'
import Modal from "./Modal"
import {ErrorMessage, Field,Form ,Formik} from 'formik'
import {db} from '../config/firebase'
import  {doc,updateDoc,addDoc,collection} from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from "Yup";
// import { object, string, number, date, InferType } from 'yup';

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),

  email: Yup.string().email("Invalid Email").required("Email is required"),
});

const AddAndUpdate = ({isOpen,onClose,isUpdate,contact}) => {


  const addContact = async (contact)=>{

    try{
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef,contact);
      onClose();
      toast.success("Conatct Added Succesfully");
      
    }
    catch(error){
       console.log(error);
    }
  };

  //update
  const updateContact = async (contact,id)=>{

    try{
      const contactRef = doc(db,"contacts",id);
      await updateDoc(contactRef,contact);
       onClose();
       toast.success("contact updated Succesfully");
    }
    catch(error){
       console.log(error);
    }
  };
  return (

   
    <div>
       <Modal  isOpen={isOpen} onClose={onClose}>
          <Formik 
          validationSchema={contactSchemaValidation}
          initialValues={ 
            isUpdate ? {
            name:  contact.name,
            email:  contact.email,
             
            } :{
              name:"",
              email: "",
            }
          }
             
            onSubmit={(values)=>{
              isUpdate ? updateContact(values,contact.id) :
              
              addContact(values);
            }}>
            <Form className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name:</label>
                <Field  name="name" className="border h-10  px-1"/>
                <div className='text-red-500 text-xs'>
                  <ErrorMessage name="name"/>
                  </div>    
                  
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email:</label>
                <Field  name="email" className="border h-10 px-1 "/>
                <div className='text-red-500 text-xs'>
                  <ErrorMessage name="email"/>
                  </div> 

              </div>
              <button className='bg-orange-500 hover:bg-orange-400 rounded-sm px-3  border py-1 self-end '>{isUpdate ? "Update":"Add"} Contact</button>
            </Form>
          </Formik>
       </Modal>
    </div>
  )
}

export default AddAndUpdate;