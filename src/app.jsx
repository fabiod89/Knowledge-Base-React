import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import test_data from "./test_data"

function KBCard(props) {return(<>
    <Card>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Body>{props.Content}</Card.Body>
    </Card>
</>)
}

function App (){
    let [searchTerm, setSearch] = useState("")
    let results = test_data.map((x) => 
    {if ((x.Title.toLowerCase()).includes(searchTerm.toLowerCase()))
        return <p>{<KBCard Title={x.Title} Content={x.Content}/>}</p>})

    return (<>
        <input placeholder="Search here..." onChange={(x)=> {setSearch(searchTerm = x.target.value)}}/>
        {results}
        

            
       

        

</>)}

export default App;