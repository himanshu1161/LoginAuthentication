import { useState } from 'react';
import axios from 'axios';
import useAuthSession from '../hooks/useAuthSession';
import Toast from '../component/Toast';
import { toast } from 'react-toastify';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, login, logout } = useAuthSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please fill in both fields');
      return;
    }
    try {
      const response = await axios.post('/api/login', { username, password });
      login(response.data.token);
    } catch (error) {
      toast.error('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toast />
      {user ? (
        <div className="bg-white p-8 rounded shadow-md">
          <p className="mb-4">Welcome, {user.username}</p>
          <button onClick={logout} className="px-4 py-2 bg-blue-500 text-white rounded">
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
          <h2 className="mb-4 text-2xl font-bold">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
