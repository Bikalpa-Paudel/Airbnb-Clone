import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Profile />
        <Card />
      </div>
    </>
  );
}

export default App;
