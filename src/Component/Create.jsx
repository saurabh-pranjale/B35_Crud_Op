import axios from "axios"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const Create = ({handleClose}) => {
const [name,setName] = useState("")
const [drinks,setDrinks] = useState("")

    const sedData = (e) => {
        e.preventDefault()
       axios.post('https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/menu',{name,drinks})
       handleClose()
    }

    return (
        <div>
            <Form onSubmit={sedData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Dish" onChange={(e)=>{setName(e.target.value)}} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Drinks</Form.Label>
                    <Form.Control type="text" placeholder="Enter Drink" onChange={(e)=>{setDrinks(e.target.value)}} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Create