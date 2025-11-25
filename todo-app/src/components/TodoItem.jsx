import React from "react";

const priorityColor = (p) => {
  if (p === "high") return "#ef4444";
  if (p === "normal") return "#f59e0b";
  return "#10b981";
};

const TodoItem = ({ todo, onRemove, onToggle, onEdit }) => {
  return (
    <li className={`todo-item ${todo.completed ? "done" : ""}`}>
      <div className="left">
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <div className="content">
          <div className="text">{todo.text}</div>
          <div className="meta">
            {todo.dueDate && <span className="due">🗓 {new Date(todo.dueDate).toLocaleDateString()}</span>}
            <span className="priority" style={{ background: priorityColor(todo.priority) }}>{todo.priority}</span>
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="btn btn-ghost" onClick={()=> onEdit(todo)}>Sửa</button>
        <button className="btn btn-danger" onClick={()=> onRemove(todo.id)}>Xóa</button>
      </div>
    </li>
  );
};

export default TodoItem;
