import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { uploadAllvideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function Homeee({setuploadVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video,setvideos]=useState({
    id:"",
    caption:"",
    URL:"",
    embedLink:""

  })
 
 const embdedVideoLink=(e)=>{
  const {value}=e.target
  console.log(value.slice(-11));
  const link=`https://www.youtube.com/embed/${value.slice(-11)}`
  setvideos({...video,embedLink:link})
 }

 console.log(video);

 const handleUpload = async ()=>{
  const {id,caption,URL,embedLink} = video
  if(!id || !caption || !URL || !embedLink){
    toast.warning('please fill the form completely')
   
   
  }
  else{
    const response = await uploadAllvideo(video)
    console.log(response);
    if(response.status>=200 && response.status<300){
      toast.success(`${response.data.caption} is successfully Uploaded`)
      //to change the value of uploadVideoStatus
      setuploadVideoStatus(response.data)
      //making the state value none
      setvideos({
        id:"",
        caption:"",
        url:"",
        embedLink:""
      })
      
       //to close this modal
    handleClose()
    }
    else{
      console.log(response);
      toast.error('something Went wrong. Try again later')
    }
  }
}


  
  return (
    < >
      <div className="d-flex upload-container container justify-content-between">
            <div className='d-flex gap-2'>
              <h5><i style={{color:"orange"}} class="fa-solid fa-film"></i>Upload video</h5>
              <button onClick={handleShow} style={{background:'transparent',border:'none'}}><i class="fa-solid fa-cloud-arrow-up fa-2x" style={{color:'gold'}}></i></button>
            </div>
            <div className=''>
              <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}> <h5>Watch History</h5></Link>
            </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form  className='border borderr-secondary p-3 rounded'>
          
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control  onChange={(e)=>setvideos({...video, id:e.target.value})} type="text" placeholder="Enter Vedio ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setvideos({...video, caption:e.target.value})} type="text" placeholder="Enter Vedio Caption" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>setvideos({...video, URL:e.target.value})} type="text" placeholder="Enter vedio image Url" /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={embdedVideoLink} type="text" placeholder="Enter Youtube Vedio LInk" />
      </Form.Group>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' closeOnClick draggable/>
      <div className=''>
            <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}> <h5>Watch History</h5></Link>
</div>
    </>
  )
}

export default Homeee
