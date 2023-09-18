import React from 'react'

const Herotitle = (props) => {
  return (
    <div className='flex flex-col place-content-center sm:text-left font-poppins sm:px-32 sm:py-16'>
        <h1 className='font-bold text-4xl'>{props.title}</h1>
        <p className='pt-10'>
            {props.paragraph}
        </p>
    </div>
  )
}

export default Herotitle