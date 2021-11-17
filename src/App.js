import './App.css';
import { Header } from './components/Header/Header';
import { TaskList } from './components/Task-List/TaskList';

function App() {
  return (
    <div className="container">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
