import React from 'react'
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


const CatShow = ({ cats }) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)



  return (
    <>
      <Card
        style={{
          width: "14rem"
        }}
        key={id}
      >
        <img alt={`profile of a currentCat named ${currentCat.name}`} src={currentCat.image} />
        <CardBody>
        <CardTitle tag="h5">{currentCat.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            <p>Age: {currentCat.age}</p>
            <p>Enjoys: {currentCat.enjoys}</p>
          </CardSubtitle>

        </CardBody>
      </Card>
    </>
  )
}

export default CatShow