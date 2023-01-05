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


  })

})


