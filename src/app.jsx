import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import test_data from "./test_data"

function KBCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    
    return(<div>

    <Card className="card" onClick={handleShow} cursor="pointer">
        <Card.Body>{props.Title}</Card.Body>
    </Card>

      <Modal show={show} onHide={handleClose} size="lg" scrollable="true" fullscreen="true" aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.Content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</div>)
}

function App (){
    let [searchTerm, setSearch] = useState("")
    let results = test_data.map((x) => 
    {if ((x.Title.toLowerCase()).includes(searchTerm.toLowerCase()))
        return <>{<KBCard Title={x.Title} Content={x.Content}/>}</>})

    return (<>
        <input placeholder="Search here..." onChange={(x)=> {setSearch(searchTerm = x.target.value)}}/>
        {results}
        

            
       

        

</>)}

export default App;