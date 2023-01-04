import { render } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders without crashing.", () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
    })
})

/* 

 PASS  src/components/NotFound.test.js (5.74 s)

Test Suites: 4 passed, 4 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        9.489 s
*/