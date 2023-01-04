import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import Header from "./Header";

describe("<Header />", ()=> {
    it("renders without crashing.", ()=> {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
            <Header />
            </BrowserRouter>,
            div
        )
    })
})



// PASS  src/components/Header.test.js
// <Header />
// ✓ renders without crashing. (586 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        3.423 s