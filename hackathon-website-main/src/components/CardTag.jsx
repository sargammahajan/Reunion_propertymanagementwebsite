import React from 'react'

const CardTag = (props) => {

    function renderStatus(){
        if (props.status === "Upcoming")
            return <div className='rounded-md bg-pre-light text-light-black font-poppins font-semibold w-[30%] mx-auto my-4 py-1 text-sm'>
                Upcoming
            </div>
        else if (props.status === "Active")
            return <div className='rounded-md bg-active-light text-active font-poppins font-semibold w-[28%] mx-auto my-4 py-1 text-sm'>
                Active
            </div>
        else
            return <div className='rounded-md bg-over-light text-light-black font-poppins font-semibold w-[28%] mx-auto my-4 py-1 text-sm'>
                Past
            </div>
    }

  return (
    <div className='w-full'>
        {renderStatus()}
    </div>
  )
}

export default CardTag