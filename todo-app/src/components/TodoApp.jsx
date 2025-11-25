import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

/*
 Features:
 - Thêm nhiệm vụ
 - Sửa nhiệm vụ
 - Xoá nhiệm vụ
 - Đánh dấu hoàn thành
 - Lưu vào localStorage
*/

const STORAGE_KEY = "ngoc_todo_app_v1";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setTodos(JSON.parse(raw));
      } catch (e) {
        setTodos([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, dueDate, priority) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate || null,
      priority: priority || "normal"
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id, updated) => {
    setTodos((prev) => prev.map(t => t.id === id ? { ...t, ...updated } : t));
    setEditingTodo(null);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter(t => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
  };

  const cancelEdit = () => setEditingTodo(null);

  const clearAll = () => {
    if (confirm("Bạn có chắc muốn xóa tất cả công việc?")) {
      setTodos([]);
    }
  };

  return (
    <div className="todo-container">
      <header className="todo-header">
        <h1> Todo App</h1>
        <p className="subtitle">Ứng dụng quản lý công việc đơn giản — lưu trên trình duyệt</p>
      </header>

      <div className="todo-card">
        <TodoForm onAdd={addTodo} onUpdate={updateTodo} editing={editingTodo} onCancelEdit={cancelEdit} />
        <div className="controls">
          <button className="btn btn-danger" onClick={clearAll}>Xóa tất cả</button>
        </div>

        <TodoList
          todos={todos}
          onRemove={removeTodo}
          onToggle={toggleComplete}
          onEdit={startEdit}
        />
      </div>

      <footer className="todo-footer">
        <small>Đã lưu cục bộ trên trình duyệt · Demo cho bài tập</small>
      </footer>
    </div>
  );
};

export default TodoApp;
