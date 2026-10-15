import Filterserch from "./Filterserch";
function App(){
  const names = ["ayub","ali","ahamd","wasim"];

  const result = names.filter((name)=>
    name.startsWith("w")
  )


  return(
    <>
    <h1>Filter and map method</h1>

    {result.map((name)=>(
      <p key={name}>{name}</p>
    ))}

    <Filterserch/>

    </>


  )

}
export default App;
