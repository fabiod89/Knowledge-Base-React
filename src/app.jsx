import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import test_data from "./test_data"
import { height } from '@mui/system';

function KBCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(<div>
<Grid>   
    <Card style={{ width: '55rem',height: '3rem',textAlign: 'center', padding: "2px"}} className="card" border="secondary" bg="primary" onClick={handleShow} cursor="pointer">
  
  <Card.Body>
    <Card.Title>{props.Title}</Card.Title>

  </Card.Body>
</Card>
</Grid>


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
        
            <h1>Knowledge Base</h1>
            <div className="search">
            <TextField  style={{ width: '55rem' }} id="outlined-search" label="How can we help.." type="search" onChange={(x)=> {setSearch(searchTerm = x.target.value)}} />
            </div>    
      
            <Grid className="grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {results}
        

  </Grid>
      
</>)}

export default App;