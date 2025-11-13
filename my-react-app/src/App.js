import React, { useState } from 'react';
import './App.css';

const mockUser = {
  username: 'testuser',
  password: 'password123',
};

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === mockUser.username && password === mockUser.password) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="books-container">
          <h2>Book List</h2>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
