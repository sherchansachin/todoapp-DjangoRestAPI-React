import React, { useState } from 'react'
import { Form, Modal, Button, Col, Row } from 'react-bootstrap';


const TodoCards = ({ id, title, body, completeTodo, editTodo, deleteTodo }) =>{

    const [show, setShow] = useState(false);

    const [newTitle, setTitle] = useState(title)
    const [newBody, setBody] = useState(body)


    const handleClose = () => {
        setShow(false);
        setTitle(title)
        setBody(body)
    }
    const handleShow = () => setShow(true);

    const editTodoHandler = (title, body) =>{
        handleClose()
        const todo = {
            id,
            title,
            body,
        }
        editTodo(todo)

        setTitle(title)
        setBody(body)
    }


    return( 
        <>


        <div className='todo-list'>
            
                <Row className=' pt-2'>
                    <Col md={6} className='text-left'>
                        <h3 className='mb-4'>{title}</h3>
                        <p>{body}</p>
                    </Col>
        
                    <Col md={6} className='text-right'>
                    <Form>
                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check type = 'checkbox' label='Complete' 
                            onChange={() => completeTodo(id)}/>
                    </Form.Group>
                        </Form>
                        
                        <svg onClick={handleShow} className='e-icon mr-4' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.9em" width="1.9em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>

                        <svg onClick={ () => deleteTodo(id)} className='d-icon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.9em" width="1.9em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                       
                    </Col>
                </Row>
            
        </div>


        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                        <form>
                            <div className = 'form-group'>
                                <label>Rename Title</label>
                                <input type='text' className='form-control' value={newTitle} onChange ={e => setTitle(e.target.value)}/>
                            </div>

                            <div className = 'form-group'>
                                <label>Description</label>
                                <textarea rows='4' className='form-control' value={newBody} onChange ={e => setBody(e.target.value)}></textarea>
                            </div>
                        </form>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={() => editTodoHandler(newTitle, newBody)}>
                Update Todo
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default TodoCards;