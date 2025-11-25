import React, { useMemo, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemove, onToggle, onEdit }) => {
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("new"); // new, old, priority

  const filtered = useMemo(() => {
    let arr = [...todos];
    if (filter === "active") arr = arr.filter(t => !t.completed);
    if (filter === "completed") arr = arr.filter(t => t.completed);
    if (q.trim()) arr = arr.filter(t => t.text.toLowerCase().includes(q.toLowerCase()));

    if (sort === "new") arr.sort((a,b)=> b.id - a.id);
    if (sort === "old") arr.sort((a,b)=> a.id - b.id);
    if (sort === "priority") {
      const rank = { high: 0, normal: 1, low: 2 };
      arr.sort((a,b)=> rank[a.priority] - rank[b.priority]);
    }
    return arr;
  }, [todos, filter, q, sort]);

  return (
    <div style={{ marginTop: 18 }}>
      <div className="list-controls">
        <div>
          <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="small-select">
            <option value="all">Tất cả</option>
            <option value="active">Chưa hoàn thành</option>
            <option value="completed">Hoàn thành</option>
          </select>
          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="small-select" style={{ marginLeft: 8 }}>
            <option value="new">Mới nhất</option>
            <option value="old">Cũ nhất</option>
            <option value="priority">Theo ưu tiên</option>
          </select>
        </div>
        <input placeholder="Tìm kiếm..." value={q} onChange={(e)=>setQ(e.target.value)} className="search-input" />
      </div>

      {filtered.length === 0 ? (
        <p className="empty">Không có công việc nào</p>
      ) : (
        <ul className="todo-list">
          {filtered.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
