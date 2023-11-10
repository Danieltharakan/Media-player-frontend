import React, { useEffect } from 'react'
import { Col, Modal, Row, ToastContainer } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addTooCategory, deleteCategory,getAllCategory, getaVideo, updateCategory } from '../services/allAPI';
import Vediocard from './Vediocard';



function Category() {
  const [allCategory,setAllCategory]=useState([])
  const [categoryName,setcategoryName]=useState({})

    

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async()=>{
    console.log(categoryName);
    if(categoryName)
    {
     let body={
      categoryName,
      allvideos:[]
     }
     //make api call
     const response=await addTooCategory(body)
     console.log(response);
     if(response.status>=200 && response.status<300){
      alert('category successfully added')
      //to make state null
      setcategoryName('')
      //to close the modal
      handleClose()
     }
     else{
      alert('something went wrong.please try again later')
     }
    }
    else{
      alert('please fill the categoryname')
    }
  }
//function to get all category
const getAlCategory=async ()=>{
  const {data}=await getAllCategory()
  setAllCategory(data)
}
console.log(allCategory);

const removeCategory=async(id)=>{
  await deleteCategory(id)
  getAlCategory()
}


//dragover eventlistener
const dragover=(e)=>{
  e.preventDefault()
  console.log('inside dragover');
}


const videoDrop = async(e,categoryid)=>{
  console.log(`droped inside the categoryId ${categoryid}`);
  //to get the video id that is send from videocard component
  const videoid=e.dataTransfer.getData("videoID")
  console.log(videoid);

//api to get the particular video that is dragged
const{data}= await getaVideo(videoid)
console.log(data);

//to find a particular category with the specified eid
let selectedCategory= allCategory?.find((item)=>item.id===categoryid)
console.log(selectedCategory);

//data added to the array in the particular category with specifies id
selectedCategory.allvideos.push(data)
console.log(selectedCategory);

await updateCategory(categoryid,selectedCategory)
getAlCategory()
}



useEffect(()=>{
  getAlCategory()
},[]) 

  return (
    <>
    <div>
        <button className='btn btn warning' onClick={handleShow} style={{backgroundColor:"orange",color:"white",borderRadius:"10px",width:"200px",height:"50px"}}>Add new category</button>
    </div>
    {
          allCategory?.length>0?
          allCategory?.map((item)=>(
            <div className='mt-4 border border-secondary rounded p-3'>
              <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
                <h6>{item.categoryName}</h6>
                <button onClick={()=>removeCategory(item?.id)} className='btn btn-danger' style={{border:'none'}}><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <Row>
                <Col sm={12}>
                  {
                    item.allvideos?.length>0?
                    item.allvideos.map(card=>(<Vediocard displayVideo={card}/>)):
                    <p>
                      nothing to display
                    </p>
                  }

                </Col>
              </Row>
            </div>
          )): <p>Nothing added yet</p>
        } 

  


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action=''  className='border borderr-secondary p-3 rounded'>
 

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category name</Form.Label>
        <Form.Control onChange={(e)=>setcategoryName(e.target.value)} type="text" placeholder="Enter Category Name"  />
      </Form.Group>

       

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" closeOnClick draggable/>
    </>
  )
}

export default Category