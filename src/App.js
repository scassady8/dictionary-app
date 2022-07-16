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
        <footer  className="text-center">
          <p>
            <small>
              This project was coded by {" "}
              <a href="https://github.com/scassady8"
                target="_blank"
                rel="noopener noreferrer">Shannon Cassady
              </a>
                {" "} and is{" "}
              <a href="https://github.com/scassady8/dictionary-app"
                target="_blank"
                rel="noopener noreferrer">open source
              </a>.
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
