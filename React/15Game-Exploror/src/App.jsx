import { useState } from "react"


function App() {
  const Games = ["cricket","footbal","waking","runing","bascketball"]
  const [serch,setSerch] = useState("")

  const filtergame = Games.filter((game)=>(
    game.toLocaleLowerCase().includes(serch.toLocaleLowerCase())
  ))

 

  return (
    <>
    <h2>Game serch project</h2>
    <input type="text" 
    placeholder="Serch for game..."
    value={serch}
    onChange={(e)=>setSerch(e.target.value)} />


    {filtergame.length > 0 ?(
      <ul>
        {filtergame.map((game)=>(
          <li key={game}>{game}</li>
        ))}
      </ul>
    ) : (
  <h3>No Games Found!</h3>
)}


    </>
 

    


  )
}

export default App
