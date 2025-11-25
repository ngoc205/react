import React, { useEffect, useState } from "react";

/*
 Props:
 - onAdd(text, dueDate, priority)
 - onUpdate(id, {text,dueDate,priority})
 - editing (todo or null)
 - onCancelEdit()
*/

const TodoForm = ({ onAdd, onUpdate, editing, onCancelEdit }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("normal");

  useEffect(() => {
    if (editing) {
      setText(editing.text || "");
      setDueDate(editing.dueDate ? editing.dueDate.split("T")[0] : "");
      setPriority(editing.priority || "normal");
    } else {
      setText("");
      setDueDate("");
      setPriority("normal");
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return alert("Nhập nội dung công việc");
    if (editing) {
      onUpdate(editing.id, { text: text.trim(), dueDate: dueDate || null, priority });
    } else {
      onAdd(text, dueDate || null, priority);
    }
    setText("");
    setDueDate("");
    setPriority("normal");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Viết công việc..."
          className="input"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="input input-date"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="input select">
          <option value="low">Thấp</option>
          <option value="normal">Trung bình</option>
          <option value="high">Cao</option>
        </select>
        <button className="btn btn-primary" type="submit">{editing ? "Cập nhật" : "Thêm"}</button>
        {editing && (
          <button type="button" onClick={onCancelEdit} className="btn btn-ghost">Hủy</button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
