import Carousel from "./components/Carousel.jsx";
import firstImg from './components/images/first.jpg'
import secondImg from './components/images/second.jpg'
import thirdImg from './components/images/third.jpg'

function App() {
    const images = [firstImg, secondImg, thirdImg]

    return (
    <div className="App">
      <Carousel images={images}/>
    </div>
  );
}

export default App;
