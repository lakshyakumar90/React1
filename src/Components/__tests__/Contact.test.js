import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactUs from "../Contact Us/ContactUs";
import "@testing-library/jest-dom";

test("Should load ContactUs Component and submit the form", async () => {
  render(<ContactUs />);

  //It will give error because getByRole will recieve multiple headings and it did not know which one to return
  // to avoid this use getAllBy =>
//   test("Should load ContactUs Component", ()=>{
//     render(<ContactUs/>);
//     const heading = screen.getByRole("heading")
//     expect(heading).toBeInTheDocument(); 
// const allHeadings = screen.getAllByRole("heading"); 
// using not
// const xyz = screen.not.toBe(2);

  // Step 1: Check if the form fields are rendered
  const nameInput = screen.getByLabelText(/Your Name/i);
  const emailInput = screen.getByLabelText(/Email Address/i);
  const subjectInput = screen.getByLabelText(/Subject/i);
  const messageInput = screen.getByLabelText(/Message/i);

  
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(subjectInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();

  // Step 2: Fill in the form
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(subjectInput, { target: { value: "Order Issue" } });
  fireEvent.change(messageInput, { target: { value: "I have a question about my order." } });

  // Step 3: Submit the form
  const submitButton = screen.getByRole("button", { name: /Send Message/i });
  fireEvent.click(submitButton);

  // Step 4: Check if the form is reset (state was cleared)
  await waitFor(() => {
    expect(nameInput.value).toBe("");  // Check that the input was reset
    expect(emailInput.value).toBe("");
    expect(subjectInput.value).toBe("");
    expect(messageInput.value).toBe("");
  });

//when you console.log over here it will return a JSX Object => Virtual DOM Object

  // Optionally check if the form data was logged (using jest.spyOn)
  // Check for form submission effect (if logging is critical to the test)
  // Example: Test if console.log was called (Optional)
  // const consoleSpy = jest.spyOn(console, "log");
  // expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', expect.any(Object));
  // consoleSpy.mockRestore(); // Restore original console.log behavior if needed
});
