import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo }) {
  // console.log("todo in TODOOOOO=", todo);
  return (
    <div className="Todo">
      <div className="priority">
        <b>{todo.title}</b> <small>{todo.priority}</small>
      </div>
      <div>
        <small>{todo.description}</small>
      </div>
    </div>
  );
}

export default Todo;
