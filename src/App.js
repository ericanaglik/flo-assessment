import logo from './logo.svg';
import './App.scss';
import NavBar from './NavBar'
import Button from './Button'
import CardSection from './CardSection'
import IconCard from './IconCard'


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
        <CardSection 
          titleText={"Functional and Dog-Approved!"}
          buttonText={"Shop Dog-Friendly Rugs"}
        >
          <IconCard
            iconURL={"https://cdn.shopify.com/s/files/1/0284/2666/6115/files/Ruggable-Icon-ValueProp-Washable.svg?4206"}
            titleText={"Machine Washable"}
            descriptionText={"Meet the first rug made for your washing machine. With our washable Rug Covers, you’ll never have to throw away a dirty rug again!"}
          />
          <IconCard
            iconURL={"https://cdn.shopify.com/s/files/1/0284/2666/6115/files/Icon_PetFriendly.svg?4206"}
            titleText={"Stain Resistant"}
            descriptionText={"Ideal for high traffic homes where life and inevitable messes happen. You can wash the Cover and spot clean the Pad to remove stains and smells for a fresh, odor-free rug."}
          />
          <IconCard
            iconURL={"https://cdn.shopify.com/s/files/1/0284/2666/6115/files/Icon_Waterproof.svg?4206"}
            titleText={"Water Resistant"}
            descriptionText={"We get it, accidents happen. That’s why our rugs have a built-in water resistant layer that keeps liquid from seeping through and dripping onto the floor."}
          />
        </CardSection>
        <CardSection 
          titleText={"Cleanup Made Easy"}
          buttonText={"Shop Dog-Friendly Rugs"}
        />
        <CardSection 
          titleText={"Pup-Approved Rugs"}
          descriptionText={"Make your home the perfect pet sanctuary with our best-loved rugs!"}
          buttonText={"Shop Dog-Friendly Rugs"}
        />
      </div>
    </div>
  );
}

export default App;
