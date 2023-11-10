import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl =useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-between w-100' >
    <Col></Col>
    <Col lg={5}>
      <h3 className='mb-3'>Welcome TO <span className='text-warning'>Media Player</span></h3>
      <p Style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit animi tempora quod, repellendus ullam eveniet necessitatibus quia unde fugit, modi eos velit? Obcaecati omnis labore commodi recusandae vel voluptatem!</p>
      <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5 ' >Get Started<i class="fa-solid fa-arrow-right" ></i>
</button>
    </Col>
    <Col ></Col>
    <Col lg={5}><img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no img" /> </Col>
      </Row>

      <div className='container mt-5 mb-5  d-flex align-items-center justify-content-center flex-column '>
<h3>Feature</h3>
<div className='cards mt-5 mb-5 '>
<Row>
  <Col> <Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card></Col>
  <Col><Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
        <Card.Body>
          <Card.Title>Categorized Vedio</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card></Col>
  <Col>
      <Card className='p-4' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         
        </Card.Body>
      </Card></Col>
 
      
</Row>
</div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col lg={5}>
            <h3 className='mb-5' style={{color:"gold",fontFamily:"fantasy"}}>SIMPLE FAST AND POWERFULL</h3>
            <p className='mb-5'><span style={{fontSize:"25px",color:"gray"}}>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati ducimus fugiat ab blanditiis maxime dolore! Alias, quam numquam vitae sed, impedit mollitia odit autem, nobis dignissimos iure et nihil?</p>
            <p className='mb-5'><span style={{fontSize:"25px",color:"gray"}}>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati ducimus fugiat ab blanditiis maxime dolore! Alias, quam numquam vitae sed, impedit mollitia odit autem, nobis dignissimos iure et nihil?</p>
            <p className='mb-5'><span style={{fontSize:"25px",color:"gray"}}>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati ducimus fugiat ab blanditiis maxime dolore! Alias, quam numquam vitae sed, impedit mollitia odit autem, nobis dignissimos iure et nihil?</p></Col>

          <Col lg={5} style={{marginLeft:"100px",width:"600px"}}><iframe width="100%" height="600" src="https://www.youtube.com/embed/32RAq6JzY-w" title="FAST X | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
        </Row>
      </div>
      </>
      
  )
}

export default LandingPage