import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch.jsx';
import TodoItem from './pages/TodoItem.jsx';
import HomePage from './pages/HomePage';
import TodosList from './pages/TodosList.jsx';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="todo-list" element={<TodosList />} />
        <Route path="todo-list/:todoItemIndex" element={<TodoItem />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default App;
