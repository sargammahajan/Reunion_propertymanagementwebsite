import React, { useState } from 'react'
import { Select, TextField, MenuItem } from '@mui/material';
import Heading from './Heading';

const Createpage = (props) => {

  const [values, setValues] = useState({
    ...props.init
  });

  const today = new Date();
  
  function handleSubmit(event) {

    const start = new Date(values.start)
    const end = new Date(values.end)

    if(values.title === ""){
      alert("No title")
    }
    else if(values.img === ""){
      alert("Please add an image")
    }
    else if(values.desc === ""){
      alert("Please add a challenge description")
    }
    else if(end.getTime()<today.getTime()||end.getTime()<start.getTime()){
      alert("Invalid Date")
    }
    else {
      props.onSave(values)
    }
    event.preventDefault();
  }

  function  handleChange(event) {
    
    const {name, value} = event.target;
      setValues((prevVal) => {
        if (name === "img"){
          const path =  URL.createObjectURL(event.target.files[0])
          return {
            ...prevVal,
            [name]: path
          }
        }
        else
          return {
            ...prevVal,
            [name]: value
          }
      });
  }

  return (
    
    <div>
      
      <div className='bg-off-white text-2xl text-left text-black font-bold font-inter py-8 px-20'>
        Challenge Details
      </div>
      <div>
        <form 
          className='flex flex-col lg:w-1/2 space-y-8 > * + * py-8 px-4 sm:px-20 text-left'
          onSubmit={handleSubmit}
        >
          <Heading text="Challenge Name"/>
            <TextField 
                name='title'
                type="text"
                value={values.title} 
                onChange={handleChange}
                placeholder='Enter the name of your challenge'
                InputLabelProps={{
                shrink: true,
                }}
              />
          <Heading text="Start Date"/>
            <TextField 
                name='start'
                type="datetime-local"
                value={values.start} 
                onChange={handleChange}
                placeholder='Enter the name of your challenge'
                InputLabelProps={{
                shrink: true,
                }}
              />
          <Heading text="End Date"/>
            <TextField 
                name='end'
                type="datetime-local"
                value={values.end} 
                onChange={handleChange}
                placeholder='Enter the name of your challenge'
                InputLabelProps={{
                shrink: true,
                }}
              />

          <Heading text="Challenge Description"/>
            <TextField 
                name='desc'
                type="text"
                multiline
                rows={10}
                value={values.desc} 
                onChange={handleChange}
                placeholder='Enter the name of your challenge'
                InputLabelProps={{
                shrink: true,
                }}
              />
          <Heading text="Image"/>
            <TextField 
                name="img"
                type="file"
                onChange={handleChange}
              />

          <Heading text="Preview"/>
            <div className='h-40 w-2/3 sm:w-[45%] border-2 rounded-2xl overflow-hidden'>
              <img src={values.img} />
            </div>  

          <Heading text="Level Type"/>
            <Select
                  name='difficulty' 
                  value={values.difficulty} 
                  onChange={handleChange}
                >
                  <MenuItem value="Easy">Easy</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Hard">Hard</MenuItem>
              </Select>

          <button type="submit" className='transition ease-in-out bg-active hover:bg-green-dark text-white font-semibold rounded-xl w-full md:w-full lg:w-1/2 py-3 px-3 mb-4'>
              <div className='px-2'>Save Changes</div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Createpage