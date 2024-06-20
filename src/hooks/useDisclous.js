import React, { useState } from 'react'

const useDisclous = () => {
  
  const [isOpen, setOpen] = useState(false);

  const onOpen=()=>{
    setOpen(true);
  }
  const onClose= ()=>{
    setOpen(false);
  }
  return {
    onClose,onOpen,isOpen
  }
 
}

export default useDisclous