import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../Services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [categoryName,setCategoryName] = useState("")
  const [categories,setCategories] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const insertCategory = async () =>{
    if(categoryName){
      let body = {
        categoryName,allVideos:[ ]
      }
      // make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        // reset state
        setCategoryName("")
        // modal hide
        handleClose()
        // alert 
        toast.success("New Category added succesfully")
        // call getCategories
        getCategories()
      }
      else{
        toast.error("Uploading error!!! Please try after sometime...")
      }
    }
    else{
      // alert
      toast.info("Please fill the form completely!!!")
    }
  }

  const getCategories = async ()=>{
    const {data} = await getAllCategory()
    setCategories(data)
  }

  const removeCategory = async (id) =>{
    await deleteCategory(id)
    // get all category
    getCategories()
  }

  useEffect(()=>{
    getCategories()
  },[])
  console.log(categories);

  const dragOverCategory = (e)=>{
    console.log("dragging over category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId) => {
    console.log("Inside drop fundtion");
    // console.log(categoryId);
    // console.log("Category Id : "+categoryId);
    const videoCardId = e.dataTransfer.getData("cardId")
    // console.log("Video Card Id : " +videoCardId);
    // get video details
    const {data} = await getAVideo(videoCardId)
    let selectedCategory = categories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }

  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-primary"> Add New Category </button>
      </div>

      {
        categories?categories.map(item=>(
          <div className="border p-3 rounded mt-3 mb-3" droppable onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className="d-flex justify-content-between">
              <h5> {item?.categoryName} </h5>
              <button onClick={()=>removeCategory(item?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Row>
              {
                item?.allVideos&&item?.allVideos.map(card=>(
                  <Col sm={12} className='p-1 mb-2' >
                    <VideoCard displayData={card} insideCategory={true} />
                  </Col>
                ))
              }
            </Row>
          </div>
        )):<h5 className='fw-bolder text-danger mt-3'> No Categories available!!! </h5>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add New Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={insertCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Category