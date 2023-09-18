import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { CardTag, Timer } from '.';
import { statusCheck } from '.';

const Hackathoncard = (props) => {

        const info = {}
        const newInfo = Object.assign(info, props)
        
        const startDate = new Date(props.start)
        const endDate = new Date(props.end)
        
        const status = statusCheck(startDate, endDate)
        const target = ((status==="Active")?endDate:((status==="Upcoming")?startDate:new Date()))

  return (
    <div className='w-full sm:w-2/5 md:w-2/5 lg:w-[22%] my-6 mx-6 sm:mx-6 rounded-3xl bg-white text-black'>
        <div className='h-40 rounded-t-2xl overflow-hidden'>
            <img className='w-full' src= {props.img} />
        </div>
        <div className='flex flex-col justify-center font-poppins'>
            <div className='w-full'><CardTag status={status}/></div>
            <h1 className='h-10 text-lg font-bold px-4 pb-4 mb-12'>{props.title}</h1>
            <div className='my-1 text-sm font-medium'>
                {status==="Active"?"Ends in":(status==="Past"?"Ended on":"Starts in")}
            </div>
            <div className='text-2xl font-bold mx-auto justify-between'>
                {status==="Past"?<div className='mb-14'>{endDate.toDateString()}</div>
                :<Timer end={target} />}
            </div>
            <div onClick={() => props.participate("Challengepage", newInfo)} className='flex flex-row transition ease-in-out justify-center hover:bg-green-dark cursor-pointer bg-active text-white font-semibold rounded-xl w-11/12 md:w-10/12 lg:w-3/5 py-3 px-3 mx-auto mb-4'>
                <div className='py-1'><TaskAltIcon /> </div>
                <div className='px-2 py-1'>Participate Now!</div>
            </div>
        </div>
    </div>
  )
}

export default Hackathoncard