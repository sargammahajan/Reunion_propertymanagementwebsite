import React from 'react';

const Herofooteritem = (props) => {
  return (

    <div className='flex flex-row mx-10 my-8 sm:justify-center w-full sm:w-2/12 sm:my-0'>
    <div className='flex flex-row'>
            <div className='sm:py-2 md:py-1 lg:py-0'>{props.icon}</div>
            <div className='flex flex-col px-2 leading-3'>
                <h1 className='font-bold text-2xl text-left'>{props.title}</h1>
                <p className='text-left leading-4'>{props.content}</p>
            </div>
        </div>
    </div>
  )
}

export default Herofooteritem