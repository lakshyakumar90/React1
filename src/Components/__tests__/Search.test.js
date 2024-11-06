import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Home/Body"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockRestaurantListData.json"
import { act } from "react"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("Search", ()=>{
    // beforeAll(()=>{}) will execute before all test cases
    // beforeEach(()=>{}) will execute before each test case
    // afterAll(()=>{}) will execute after all test cases
    // afterEach(()=>{}) will execute after each test case

    it("should render the body component with search button", async ()=>{
        await act(async()=>{
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        })
    
        const beforeSearch = screen.getAllByTestId("resCard");
        expect(beforeSearch.length).toBe(20);
    
        const searchButton = screen.getByRole("button", { name: "Search" });
        const searchInput = screen.getByTestId("searchInput");
    
        fireEvent.change(searchInput, { target: { value: "pizza" } });
        fireEvent.click(searchButton);
    
        const cards= screen.getAllByTestId("resCard");
        expect(cards.length).toBe(2);
    
        expect(searchButton).toBeInTheDocument();
    })
    
    it("should filter top rated restaurants", async()=>{
        await act(async()=>{
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        })
        const cardsBeforeFilter = screen.getAllByTestId("resCard")
        expect(cardsBeforeFilter.length).toBe(20);
    
        const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
        fireEvent.click(topRatedBtn);
    
        const cardsAfterFilter = screen.getAllByTestId("resCard")
        expect(cardsAfterFilter.length).toBe(8);
    })
})