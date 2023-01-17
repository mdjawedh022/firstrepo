import { render } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar size="xs" name="Anand Kulkarni" />);
  });
});

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar size="sm" name="Baburoa" />);
  });
});

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar size="md" name="Albert S" />);
  });
});

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar size="lg" name="Ritesh Firodiya" />);
  });
});