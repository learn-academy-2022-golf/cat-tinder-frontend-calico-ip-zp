import { render } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
    it("renders without crashing.", () => {
        const div = document.createElement("div")
        render(<Home />, div)
    })
})

/* 

 PASS  src/components/Home.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        6.3 s
*/