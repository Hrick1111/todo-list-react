import React from 'react';

const ToDoList = ({ todos, toggleCompletion }) => {
  return (
    <div className="tab-content" id="ex1-content">
      <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
        <ul className="list-group mb-0">
          {todos.map(todo => (
            <li key={todo.id} className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
              style={{ backgroundColor: '#f4f6f7' }}>
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
                aria-label="..."
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
