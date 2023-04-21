import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const testTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

//test if "make dinner" is in the compoenent?

test("works - top priority is rendered", function () {
  const { container, debug } = render(<TopTodo todos={testTodos} />);

  expect(container.querySelector(".Todo")).toContainHTML("<b>Make dinner</b>");
});

test("works - priority is an integer", function () {
  const { container, debug } = render(<TopTodo todos={testTodos} />);
  debug(container.querySelector(".priority"));

  expect(container.querySelector(".priority")).toEqual(1);
});
