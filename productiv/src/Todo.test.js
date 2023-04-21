import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const testTodo = {
  id: 1,
  title: "test-todo",
  description: "test-description",
  priority: 1,
};

describe("todo component", function () {
  test("renders without crashing", function () {
    render(<Todo todo={testTodo} />);
  });

  test("renders a todo", function () {
    const { container, debug } = render(<Todo todo={testTodo} />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
  });
});

it("matches snapshot", function () {
  const { container } = render(<Todo todo={testTodo} />);

  expect(container).toMatchSnapshot();
});
