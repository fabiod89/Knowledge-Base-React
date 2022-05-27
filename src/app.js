import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import data from "./data"





function KBCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const arrow = <span class="material-symbols-rounded">
    arrow_forward_ios
    </span>
    
    return(<>


  <div style={{ width: '40rem',height: '4rem',textAlign: 'left'}} className="cardd" onClick={handleShow} cursor="pointer">
  
    {arrow} 
    
    {props.Title}
    <hr></hr>
    </div>
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
</>)
}

function App (){
    let [searchTerm, setSearch] = useState("")
    let results = data.map((x) => 
    {if ((x.Title.toLowerCase()).includes(searchTerm.toLowerCase()))
        return <>{<KBCard Title={x.Title} Content={x.Content}/>}</>})

    return (<>
            <h1 className="subtitle-header">How can we help you...</h1>
            <div className="search">
            <TextField style={{ width: '35rem'}} inputProps={{style: {fontSize: 30}}}  size="large" id="outlined-search" variant="standard" label="Search here..." type="search" onChange={(x)=> {setSearch(searchTerm = x.target.value)}} />
            </div>  

<div className='grid'>
            <Grid direction="row" container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
              {results}
  </Grid>
 </div>  
</>)}

export default App;