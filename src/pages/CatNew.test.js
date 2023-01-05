import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatNew from "./CatNew"

describe("<CatNew />", () => {
beforeEach(() => {
    render(
        <BrowserRouter>
        <CatNew />
        </BrowserRouter>
    )  
})
it("renders a new cat card for new cat user.", () => {
   const element = screen.getByText("Create a new cat")
   expect(element).toBeInTheDocument()
   expect(element).toHaveTextContent("Create a new cat")
    })

it("has a form to input name, age, enjoys, and image", () => {
        const formName = screen.getByText("Name")
        expect(formName.getAttribute("For")).toEqual("name")

        const formAge = screen.getByText("Age")
        expect(formAge.getAttribute("For")).toEqual("age")
    
        const formEnjoys = screen.getByText("Enjoys")
        expect(formEnjoys.getAttribute("For")).toEqual("enjoys")
    
        const formImage = screen.getByText("Image")
        expect(formImage.getAttribute("For")).toEqual("image")
    })
})