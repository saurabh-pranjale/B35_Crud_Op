import axios from "axios"
import { useState,useEffect } from "react"
import { Form, Button } from "react-bootstrap"

const Edit = ({handleClose,id}) => {
const [name,setName] = useState("")
const [drinks,setDrinks] = useState("")



const getData = async () => {
    const res = await axios.get(`https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/menu/${id}`)
    setName(res.data.name || "")
    setDrinks(res.data.drinks  || "")
}

useEffect(() => {
    getData()
}, [])

    const updateData = (e) => {
        e.preventDefault()
       axios.put(`https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/menu/${id}`,{name,drinks})
       handleClose()
    }

    return (
        <div>
            <Form onSubmit={updateData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" placeholder="Enter Dish" onChange={(e)=>{setName(e.target.value)}} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Drinks</Form.Label>
                    <Form.Control value={drinks} type="text" placeholder="Enter Drink" onChange={(e)=>{setDrinks(e.target.value)}} />
                </Form.Group>

                <Button variant="success" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default Edit