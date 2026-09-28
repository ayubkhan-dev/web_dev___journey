import Container from "./component/Container"
import Button from "./component/Button";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {

  const fooditem = ['sabzi','roti','salad','daal'];

  return (
    <>
     <Container>
    <h1 className="heading">Halty Food</h1>

    <ul className="list-group">
    {fooditem.map(item => <li key={item} className="list-group-item">{item}</li>
         
     )}
    </ul>
</Container>

<Button></Button>
</>


  )
}

export default App
