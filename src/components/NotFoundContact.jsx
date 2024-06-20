import React from 'react'

const NotFoundContact = () => {
  return (
   <>
   <div className='flex h-[75vh] flex-col justify-center items-center'>
    <img className='h-20 w-20 '   src='/userimg.webp'/>
    <h3 className='text-2xl font-bold text-gray-500 p-2'>Contact Not Found</h3>
   </div>
   </>
  )
}

export default NotFoundContact