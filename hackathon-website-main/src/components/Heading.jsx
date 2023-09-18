import React from 'react'

const Heading = (props) => {
  return (
    <h1 className='text-base text-left text-black font-semibold font-inter px-4'>{props.text}</h1>
  )
}

export default Heading