import { useState } from 'react'
import { Homepage, Createpage, Header, ChallengePage } from "./components/index"
import './App.css'
import data from "./constants"

function App() {

  const [whichPage, setWhichPage] = useState("Homepage")
  const [hackathonArray, setHackathonArray] = useState(data)
  const [challenge, setChallenge] = useState()
  
  function handleSave(newVal){
    setWhichPage("Homepage")
    setHackathonArray([
      ...hackathonArray,
      newVal
    ])
  }

  function handleDelete(e){
    setWhichPage("Homepage")
    setHackathonArray(hackathonArray.filter((item)=>item.id != e.id))
  }

  function handleEdit(e){
    setWhichPage("Homepage")
    var attempt = 
    setHackathonArray(hackathonArray.map((item) => {
      if (item.id === e.id) {
        item = {
          ...e
        }
      }
      return item
    }))
  }

  return (
    <div className="App">
    <div onClick={()=>setWhichPage("Homepage")}>
    <Header />
    </div>
      
      {whichPage==="Homepage"?<Homepage
        hackathonData = {hackathonArray}
        onCreateReq={(page, challengeDetails)=>{
            setWhichPage(page)
            setChallenge(challengeDetails)
          } 
        }
      />:
      (whichPage==="Createpage"?<Createpage init={challenge} onSave={handleSave}/>:
      <ChallengePage details={challenge} onEdit={handleEdit} onDelete={handleDelete}/>)}
    </div>
  )
}

export default App
