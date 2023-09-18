import React from 'react'

const Button = (props) => {
  return (
    <div className='transition ease-in-out hover:bg-[#cccccc] bg-white rounded py-2 text-center text-darkish-blue font-inter font-semibold md:w-2/3 lg:w-3/4 xl:w-1/4 hover:cursor-pointer'>{props.btnText}</div> 
  )
}

export default Button