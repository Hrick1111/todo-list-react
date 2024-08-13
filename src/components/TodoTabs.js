import React from 'react';

const TodoTabs = ({ setActiveTab }) => {
  return (
    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="ex1-tab-1" data-mdb-tab-init href="#!" role="tab"
          aria-controls="ex1-tabs-1" aria-selected="true" onClick={() => setActiveTab('all')}>All</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="ex1-tab-2" data-mdb-tab-init href="#!" role="tab"
          aria-controls="ex1-tabs-2" aria-selected="false" onClick={() => setActiveTab('active')}>Active</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="ex1-tab-3" data-mdb-tab-init href="#!" role="tab"
          aria-controls="ex1-tabs-3" aria-selected="false" onClick={() => setActiveTab('completed')}>Completed</a>
      </li>
    </ul>
  );
};

export default TodoTabs;
