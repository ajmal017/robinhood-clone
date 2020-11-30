import './App.css';
import './components/Header';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">

      <Header />

      <div className="app_body">

        <div className="app_container">

          <NewsFeed />

          <Stats />
          
        </div>

      </div>

    </div>
  );
}

export default App;
