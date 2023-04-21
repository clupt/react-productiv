import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** Show editable todo item.
 *
 * State
 *  - isEditing
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing((edit) => !edit);

    // console.log("isEditing-toggleEdit", isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update(todo);
  }

  return (
    <div className="EditableTodo">
      {isEditing ? (
        <TodoForm initialFormData={todo} handleSave={handleSave} />
      ) : (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
          <Todo todo={todo} />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
