import React, { useState } from 'react'
import uuid from 'react-uuid'
import { Dropdown } from "rsuite"
import 'rsuite/dist/rsuite.min.css'
import { Button, CTAitem, Herotitle, Herofooteritem, Searchbar, Hackathoncard, statusCheck } from "./index.js"
import { AIgroupicon, Programmergroupicon, Robotgroupicon, Rocket, Notebookcta, Peoplecta, Robotcta, IDcardcta } from "../assets/icons"

const Homepage = (props) => {

  const [searchedData, setSearchedData] = useState(props.hackathonData);
  const [difficulty, setDifficulty] = useState(["Easy", "Medium", "Hard"]); //sets difficulty
  const [statuses, setStatuses] = useState(["Past", "Active", "Upcoming"]); 

  const [asc, setAsc] = useState(true) //controls order of challenges

  //Initially ordering hackathons based on oldest to newest

  props.hackathonData.sort((a,b) => {
    let fs = new Date(a.end)
    let ls = new Date(b.end)
    return (fs.getTime()-ls.getTime())*(asc?1:-1)
  })

  //Initialising black form for create page

  const uID = uuid()

  const blankForm = {
    key: uID,
    id: uID,
    img: "",
    title: "",
    start: "",
    end: "",
    desc: "",
    difficulty: 'Easy'
  }

  function searchContent(newData){
    setSearchedData(newData);
  }

  return (
    <div className='bg-darkish-blue text-white'>

    {/* Hero Section */}

    <div className='flex flex-col overflow-hidden'>
            <div className='flex flex-col-reverse sm:flex-row justify-between my-20 sm:my-0'>
                <div className="flex flex-col justify-center px-20 sm:px-0">
                <Herotitle 
                    title="Accelerate Innovation with Global AI challenges"
                    paragraph="AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions."
                />
                <div onClick={()=>props.onCreateReq("Createpage", blankForm)} className='sm:mx-32 my-8 font-inter'>
                    <Button 
                        btnText="Create Challenge"
                    />
                </div>
                
                </div>
                
                <div className='flex place-content-center py-[102px] bg-darkish-blue lg:pr-32'>
                  <div>
                    <Rocket />
                  </div>
              </div>
            </div>
        <footer className='flex flex-row flex-wrap py-16 justify-evenly bg-dark-blue font-inter'>
            <Herofooteritem 
                icon=<AIgroupicon /> 
                title="100K+" 
                content="AI model Submissions"
            />
            <Herofooteritem 
                icon=<Programmergroupicon />
                title="50K+" 
                content="Data Scientists"
            />
            <Herofooteritem 
                icon=<Robotgroupicon />
                title="100+" 
                content="Challenges hosted"
            />
        </footer>
    </div>  

      {/* CTA Section */}

      <div className='bg-white'>
        <h1 className='text-3xl text-black font-semibold py-24'>
          <span>Why Participate in </span><span className='text-green-md'>AI Challenges?</span>
        </h1>
        <div className='flex flex-row flex-wrap place-content-between px-8 md:px-16 lg:px-32 pb-24'>
            <CTAitem 
              icon=<Notebookcta />
              title="Prove your skills" 
              content="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
            />
            <CTAitem 
              icon=<Peoplecta /> 
              title="Learn from community" 
              content="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
            />
            <CTAitem 
              icon=<Robotcta />
              title="Challenge yourself" 
              content="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
            />
            <CTAitem 
              icon=<IDcardcta />
              title="Earn recognition" 
              content="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
            />
        </div>  
      </div>

      {/* Explore Section */}

      <div>
        <div className='bg-dark-blue text-3xl font-poppins font-semibold py-24'>
            <h1 className='pb-16 text-3xl'>Explore Challenges</h1>
            <div className='flex justify-center'>
           
            <Searchbar 
              placeholder="Search"
              list={props.hackathonData}
              onSearch = {searchContent}
            />
            <div className='m-2.5 rounded-lg '>
            <Dropdown style={{backgroundColor: "white", borderRadius: "0.5rem"}} title="Filter">              
              <Dropdown.Menu title="Difficulty">            
                <Dropdown.Item onSelect={()=>setDifficulty(["Easy"])}>Easy</Dropdown.Item>
                <Dropdown.Item onSelect={()=>setDifficulty(["Medium"])}>Medium</Dropdown.Item>
                <Dropdown.Item onSelect={()=>setDifficulty(["Hard"])}>Hard</Dropdown.Item>
              <Dropdown.Item onSelect={()=>setDifficulty(["Easy", "Medium", "Hard"])}>Reset...</Dropdown.Item>
              </Dropdown.Menu>
              <Dropdown.Menu title="Status">            
                <Dropdown.Item onSelect={()=>setStatuses(["Past"])}>Past</Dropdown.Item>
                <Dropdown.Item onSelect={()=>setStatuses(["Active"])}>Active</Dropdown.Item>
                <Dropdown.Item onSelect={()=>setStatuses(["Upcoming"])}>Upcoming</Dropdown.Item>
                <Dropdown.Item onSelect={()=>setStatuses(["Past", "Active", "Upcoming"])}>Reset...</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className='my-2.5 rounded-lg'>
            <Dropdown style={{backgroundColor: "white", borderRadius: "0.5rem"}} title="Sort">
              <Dropdown.Item onSelect={()=>setAsc(true)}>Oldest to Newest</Dropdown.Item>
              <Dropdown.Item onSelect={()=>setAsc(false)}>Newest to Oldest</Dropdown.Item>
            </Dropdown>
            </div>
            </div>            
        </div>

        <div className='flex flex-row flex-wrap justify-center bg-darkish-blue py-16'>
            {searchedData.filter((item) => difficulty.includes(item.difficulty)
            ).filter((item) => statuses.includes(statusCheck(new Date(item.start), new Date(item.end)))     
            ).map((h) => 
              <Hackathoncard 
                key = {h.id}
                id = {h.id}
                img = {h.img}
                title = {h.title}
                start = {h.start}
                end = {h.end}
                desc = {h.desc}
                difficulty = {h.difficulty}
                participate = {(name, info) => {
                  props.onCreateReq(name, info)
                }}
              />
            )}
        </div>
    </div>
        
    </div>
  )
}

export default Homepage