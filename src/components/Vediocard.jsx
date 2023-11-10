import React from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteVideos } from '../services/allAPI';


function Vediocard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
   setShow(true)

  const {caption , embedLink}=displayVideo
  const today=new Date
 /*  console.log(today); */
 let timeStamp = new Intl.DateTimeFormat('en-us',{
    year:'numeric',
    month:'2-digit',
    day: '2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
   
  }).format(today)
 console.log(timeStamp);
let videoDetails={
  caption,
  embedLink,
  timeStamp
   
}
await addToHistory(videoDetails)
  }



  const removeVideo=async(id)=>{
    const response=await deleteVideos(id)
    //console.log(response);
    setDeleteVideoStatus(true)
  }
  const dragStarted=(e,id)=>{
    console.log(`card number ${id}started dragging`);
    //console.log(e);
    e.dataTransfer.setData("videoId",id)
  }



  return (
    <div>
              <Card style={{ width: '100%',height:'350px' }} draggable onDragStart={(e)=>dragStarted(e,displayVideo?.id)}>
          <Card.Img height={'258px'} onClick={handleShow} variant="top" src={displayVideo.URL} />
       
              <Card.Body>
             <Card.Title className='d-flex justify-content-between align-items-center'>
                    <h6>{`${(displayVideo.caption).slice(0,20)}..`}</h6>
                
                  <button onClick={()=>removeVideo(displayVideo?.id) } style={{backgroundColor:"transparent" , border:"none", color:"red"}}>  <i class="fa-solid fa-trash "></i></button>
                    
                  </Card.Title>
                 
                
              </Card.Body>
       
        </Card>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Vediocard