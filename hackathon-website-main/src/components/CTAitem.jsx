import React from 'react'

const CTAitem = (props) => {
  return (
    <div className='text-black text-left bg-off-white rounded-md my-3 w-full md:w-[49%] px-8 py-20'>
        {props.icon}
        <h1 className='font-semibold font-poppins text-2xl py-4'>{props.title}</h1>
        <p className='font-poppins'>{props.content}</p>
    </div>
  )
}

export default CTAitem