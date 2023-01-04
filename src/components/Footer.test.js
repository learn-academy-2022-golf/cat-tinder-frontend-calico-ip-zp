import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import Footer from "./Footer";

describe("<Footer />", ()=> {
    it("renders without crashing.", ()=> {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
            <Footer />
            </BrowserRouter>,
            div
        )
    })
})

/* 
 PASS  src/components/Footer.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        6.506 s

*/