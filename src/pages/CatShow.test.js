import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats"
import { Card } from "reactstrap"


describe("<CatShow />", () => {
  it("renders without crashing", () => {
  const div = document.createElement("div")
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
   <Routes>
      <Route path="catshow/:id" element={<CatShow cats=
      {mockCats} />} />
     </Routes>
    </MemoryRouter>,
    div)
  })

  it("renders cat cards", () => {
    const div = document.createElement("div")
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
         <Route path="catshow/:id" element={<Card />} />
        </Routes>
       </MemoryRouter>,
       div)

       const CatShow = ({ cats }) => {
        const { id } = useParams()
        let currentCat = cats?.find((cat) => cat.id === +id)
      
      
      
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
               <p><CardTitle tag="h5">{currentCat.name}</CardTitle></p> 
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <p>Age: {currentCat.age}</p>
                  <p>Enjoys: {currentCat.enjoys}</p>
                </CardSubtitle>
      
              </CardBody>
            </Card>
          </>
        )
      }
  })

})


