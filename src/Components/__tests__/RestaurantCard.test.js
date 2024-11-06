import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Home/RestaurantCard"
import MOCK_DATA from "../mocks/resCardMockData.json"
import "@testing-library/jest-dom"

it('should render the RestaurantCard component with props data', () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

   const name = screen.getByText("Pizza Hut");
   expect(name).toBeInTheDocument();
});