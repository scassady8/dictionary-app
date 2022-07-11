import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer  className="text-center mt-2">
          <small>Coded by Shannon Cassady</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
