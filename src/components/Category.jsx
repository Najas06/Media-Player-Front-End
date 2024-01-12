import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategories } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState()
  // console.log("categoery name ===>",categoryName);
  const [allCategory, setAllCategory] = useState()

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      if (response.status == 201) {
        toast.success(`Success Added The Category ${categoryName}`);
        setCategoryName("");
        handleClose();
        getCategories();
      }
    }
    else {
      toast.warn("Please enter a category Name")
    }
  }
  const getCategories = async () => {
    const response = await getAllCategories();
    const { data } = response;
    console.log("======All === Categories :", response);
    setAllCategory(data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  const handleDelete = async (id) => {
    await deleteCategory(id);
    getCategories();
  }
  return (
    <>
      <div className='ms-5'>
        <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      </div>
      <div>
        {
          allCategory.length>0?
            allCategory.map(item => (
              <div className="m-3 border border-secondary rounded p-3 ">
                <div className="d-flex justify-content-center align-items-center text-center">
                  <h6>{item.categoryName}</h6>
                  <button className="btn btn-danger ms-2" onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            ))
             :
            <p>No Category to Display</p>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="fa-solid fa-list text-warning me-3"></i>
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Form</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-warning' variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={3000} theme="colored"
      />
    </>

  )
}

export default Category