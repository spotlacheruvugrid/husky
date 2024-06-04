import HomeComp from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page Testing", () => {
  it("check whether text is getting rendered or not", () => {
    render(<HomeComp />);
    const check = screen.getByTestId("testid").textContent;

    // Assertion
    expect(check).toBe("Hello World");
  });

  it("check whether button is there in the dom are not", () => {
    render(<HomeComp />);
    const button = screen.getByRole("button" , { name : 'secondBtn'});
    expect(button).toBeInTheDocument();
  });
});
