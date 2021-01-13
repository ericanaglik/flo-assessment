import logo from './logo.svg';
import './App.scss';
import NavBar from './NavBar'
import Button from './Button'


function App() {
  return (
    <div>
      <NavBar/>
      <div className="landing-container">
        <div className="header">
          <h1>The Perfect Rug for Dog Owners</h1>
          <Button buttonText={"Shop Dog-Friendly Rugs"}/>
        </div>
        <div className="how-it-works-section">
          <img src="https://cdn.shopify.com/s/files/1/0284/2666/6115/files/Peelup_HowItWorks.jpg?v=1579042343"></img>
          <div className="text-container">
            <h2>How Our Rugs Work</h2>
            <p>Ruggable is a 2-piece system that features a lightweight Rug Cover and a non-slip Rug Pad. All our Covers are water resistant, stain-resistant and can be detached and reattached to its Pad without losing its grip, so you can put them in the wash as often as you need.</p>
            <Button buttonText={"Shop Best Sellers"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
