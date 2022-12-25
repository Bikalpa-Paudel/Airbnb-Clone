import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

import data from "./data"


const newdata = data.map((item) =>{
  return <Card
      key={item.id}
      title={item.title}
      price={item.price}
      img={item.image}
      rating={item.rating}
      ratingNum={item.ratingNum}
      />
})
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Profile />
        <section className="cardComponent">
          {newdata}
        </section>
      </div>
    </>
  );
}

export default App;
