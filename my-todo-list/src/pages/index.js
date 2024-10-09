import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Yeni to-do əlavə edin..."
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>
          Əlavə Et
        </button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => handleToggleComplete(index)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)} style={{ padding: '5px' }}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
