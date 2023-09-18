import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = (props) => {
    
    const [filteredData, setFilteredData] = useState(props.list);
    const [wordEntered, setWordEntered] = useState("");
   

    const handleFilter = (event) => {
        
        const searchWord = event.target.value
        setWordEntered(event.target.value);

        const newFilter = (props.list).filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "") {
            setFilteredData(props.list);
        }
        else{
            setFilteredData(newFilter);
        }
    }
    
    return (
        <div className='text-center w-2/4 py-2'>
            
            <div className='flex w-full'>
                <input 
                    className='p-2 text-lg text-black rounded-l-2xl w-11/12' 
                    type="text" 
                    placeholder={props.placeholder}  
                    onChange={handleFilter}
                    value={wordEntered}
                />
                <div 
                    className='bg-white rounded-r-2xl py-1 px-3'
                    onClick={()=>props.onSearch(filteredData)}
                > 
                    <SearchIcon color="disabled"/>
                </div>
            </div>
        </div> 
    )    
}
    
export default Searchbar;