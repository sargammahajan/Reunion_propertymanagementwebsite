import React, { useState } from 'react';
import { Button, Createpage, Herotitle, statusCheck } from '.';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Challengeinfopage = (props) => {

  const [detailsVisible, setDetailsVisible] = useState(true);
  const [obj, setObj] = useState({...props.details})
  const status = statusCheck(new Date(obj.start), new Date(obj.end))

  function details(){
    return(
      <div className=' text-white'>
      <div className='bg-darkish-blue py-16'>
        <div className="bg-green-light mx-32 md:w-4/12 rounded text-black text-left font-inter font-semibold px-6 py-1.5"><AccessTimeIcon /> {status==="Upcoming"?`Starts on ${obj.start}`:`${status==="Past"?'Ended on':'Ends on'} ${obj.end}`}</div>
          <div className='py-16 px-20 sm:px-0'>
            <Herotitle 
                title={obj.title}
                paragraph="Solve the given AI problem"
            />
          </div>
          <div className=' w-1/2 mx-auto sm:px-32 sm:mx-0'>
              <Button btnText={obj.difficulty} />
          </div>
      </div>
          
          <div className='flex flex-col sm:flex-row justify-between h-18 bg-white text-black drop-shadow-md'>
            <div>
              <div className='text-black text-base font-inter font-bold sm:ml-32 pt-6 h-full sm:border-b-4 border-green-md'>Overview</div>
            </div>
            <div className='flex flex-row justify-center my-4 sm:mr-32'>
              <div onClick={()=>setDetailsVisible(false)} className='transition ease-in-out hover:bg-green-dark bg-green-md rounded-lg font-poppins text-white px-9 py-1.5 mx-3'>Edit</div>
              <div onClick={()=>props.onDelete(obj)} className='transition ease-in-out hover:bg-green-dark hover:text-white border-2 border-green-md text-green-md font-poppins rounded-lg px-7 py-1'>Delete</div>
            </div>
          </div>
          <div className='font-poppins bg-white text-black sm:text-left mx-16 my-8 sm:mx-32 lg:mr-96 '>
            <p>{obj.desc}</p>
          </div>
      </div>
    )
  }

  return (
    <div>
      {detailsVisible?details():<Createpage init = {obj} onSave={(e) => props.onEdit(e)}/>}
    </div>
  )

}

export default Challengeinfopage