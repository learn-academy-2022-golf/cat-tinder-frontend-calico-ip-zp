import React from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CatNew = ({ createCat }) => {
const navigate = useNavigate()
const [newCat, setNewCat] = useState({
  name: "",
  age: "",
  enjoys: "",
  image: ""
})

const handleChange = (e) => {
  setNewCat({ ...newCat, [e.target.name]: e.target.value })
}

const handleSubmit = () => {
  createCat(newCat)
  navigate("/catindex")
}

  return (
<div>
  <p>Form for new Cat</p>
<Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="name">
          Name
        </Label>
        <Input
          name="name"
          placeholder="Please enter name."
          type="text"
          onChange={handleChange}
          value={newCat.name}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="age">
          Age
        </Label>
        <Input
          name="age"
          placeholder="Please enter age."
          type="number"
          onChange={handleChange}
          value={newCat.age}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="enjoys">
      Enjoys
    </Label>
    <Input
      name="enjoys"
      placeholder="Please enter your likes..."
      type="text"
      onChange={handleChange}
      value={newCat.enjoys}
    />
  </FormGroup>
  <FormGroup>
    <Label for="image">
      Image
    </Label>
    <Input
      name="image"
      placeholder="Share image."
      type="url"
      onChange={handleChange}
      value={newCat.url}
    />
  </FormGroup>
</Form>

<Button onClick={handleSubmit} name="submit">
Submit Cat Image
</Button> 
</div>
  )
}

export default CatNew