import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
      <div data-mdb-input-init className="form-outline flex-fill">
        <input
          type="text"
          id="form2"
          className="form-control"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <label className="form-label" htmlFor="form2">  New task  </label>
      </div>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-info ms-2">Add</button>
    </form>
  );
};

export default TodoForm;
