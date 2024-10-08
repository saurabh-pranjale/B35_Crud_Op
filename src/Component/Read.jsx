import axios from "axios"
import { useEffect, useState } from "react"
import { Button,Modal } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from "./Edit";

const Read = () => {

    const [post, setPost] = useState([])

    const [show, setShow] = useState(false);
    const [id,setId] = useState(0)



    const handleClose = () => setShow(false);

    const handleShow = (id) =>{
        setId(id)
        setShow(true);
    } 


    const getData = async () => {
        const res = await axios.get('https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/menu')
        setPost(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const deleted = async (id) => {
        await axios.delete(`https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/menu/${id}`).then(() => { getData() })
        toast.success("Deleted")
    }

    return (
        <div>
            {post.map((item) => {
                const { id, name, drinks } = item
                return (
                    <div key={id} className="d-flex flex-row justify-content-evenly align-items-center bg-dark border border-2 border-dark my-2 py-2 text-white">
                        <h2>{id}</h2>
                        <h2>{name}</h2>
                        <h2>{drinks}</h2>
                        <Button variant={"outline-info"} onClick={()=>{handleShow(id)}}>Edit</Button>
                        <Button variant={"outline-info"} onClick={() => { deleted(id) }}>Delete</Button>
                    </div>
                )
            })}


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Edit id={id} handleClose={handleClose} />
                </Modal.Body>

            </Modal>
            <ToastContainer />
        </div>
    )
}

export default Read