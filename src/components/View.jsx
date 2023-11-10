import React, { useEffect, useState } from 'react'

import Vediocard from './Vediocard'
import { Row,Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'


function View({uploadVideoStatus}) {

  const [allvideo , setAllvideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)


  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos()
    const {data}=response
    /* console.log(data); */
    setAllvideo(data)
  }
console.log(allvideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])

  return (
    <div>
       <Row>
        {allvideo.length>0?
        allvideo?.map((video)=>(
<Col sm={12} md={6} lg={4} xl={3}>
            <Vediocard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </Col>
        ))
          :
          <p>Nothing to display</p>
        
}
       </Row>
        
        </div> 
  )
}

export default View