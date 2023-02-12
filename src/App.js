import Navbar from './Navbar';
import Home from './Home';

function App() {
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>Liked { likes } 回</p>
        <p>{ Math.random() }</p>

      </div>
    </div>
  );
}

export default App;
