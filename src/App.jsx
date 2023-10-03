import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch.jsx';
import TodoItem from './pages/TodoItem.jsx';
import HomePage from './pages/HomePage';
import TodosList from './pages/TodosList.jsx';

function App() {
  return (
    <main>
      <Routes>
        <Route path="todo-list" element={<HomePage />} />
        <Route path="list-todo" element={<TodosList />} />
        <Route path="list-todo/:todoItemIndex" element={<TodoItem />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default App;
