import React, { useState } from "react";

const AddTodoBtn = ({ onAddTodo }) => (
  <div className="action-add">
    <button onClick={onAddTodo}>Add new todo</button>
  </div>
);

const RemoveAllBtn = ({ onRemoveAll }) => (
  <div className="action-remove-all">
    <button onClick={onRemoveAll}>Remove all todos</button>
  </div>
);

// This component and every one placed between the TodoList
// and the final component which will use a TodoList callback
// should pass it down.
const Actions = ({ onAddTodo, onRemoveAll }) => (
  <div className="actions-container">
    <AddTodoBtn onAddTodo={onAddTodo} />
    <RemoveAllBtn onRemoveAll={onRemoveAll} />
    //...more actions
  </div>
);

const MenuOnTop = ({ onAddTodo, onRemoveAll }) => (
  <div className="menu-on-top">
    <Actions onAddTodo={onAddTodo} onRemoveAll={onRemoveAll} />
    {/* <Img url="some-path" /> */}
  </div>
);

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = () => setTodos([...todos, {}]);
  const removeAll = () => setTodos([]);
  
  return (
    <div className="todo-list">
      <MenuOnTop onAddTodo={addTodo} onRemoveAll={removeAll}/>
      ...todos
    </div>
  );
};

export default App