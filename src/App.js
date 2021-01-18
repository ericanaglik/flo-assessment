import './App.scss';
import {React, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Button from './Button'
import CardSection from './CardSection'
import IconCard from './IconCard'
import VideoCard from './VideoCard'
import ShopCard from './ShopCard'
import ArticleCard from './ArticleCard'
import Footer from './Footer'
import MobileFooter from './MobileFooter'

console.log(window)
function App() {
  const [windowDimension, setWindowDimension] = useState();

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    // so the windowDimension updates on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 732;

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
          backgroundColorClassName={"functional-dog-approved"}
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
          backgroundColorClassName={"cleanup-made-easy"}
        >
          <VideoCard
            videoURL={"https://cdn.shopify.com/s/files/1/0268/0337/2125/files/01-Dog_Gif-_Messy_Paws-_500x375-_Steps_-_20190807_A.mp4?3151"}
            titleText={"Stain"}
            number={"1"}
            descriptionText={"Muddy paws? Pet hair? Spills? Pee accidents? Don’t worry, we’ve got you covered."}
          />
          <VideoCard
            videoURL={"https://cdn.shopify.com/s/files/1/0268/0337/2125/files/02-Dog_Gif-_Messy_Paws-_500x375-_Steps_-_20190807_B.mp4?3151"}
            titleText={"Peel"}
            number={"2"}
            descriptionText={"When it’s time to wash, simply peel off the Rug Cover from the Rug Pad."}
          />
          <VideoCard
            videoURL={"https://cdn.shopify.com/s/files/1/0268/0337/2125/files/03-Dog_Gif-_Messy_Paws-_500x375-_Steps_-_20190807_C.mp4?3150"}
            titleText={"Wash"}
            number={"3"}
            descriptionText={"Toss it in the washer, dry, and enjoy your freshly cleaned rug!"}
          />
        </CardSection>
        <CardSection 
          titleText={"Pup-Approved Rugs"}
          descriptionText={"Make your home the perfect pet sanctuary with our best-loved rugs!"}
          buttonText={"See More Rugs"}
          backgroundColorClassName={"pup-approved-rugs "}
        >
          <ShopCard
            photoURL={"https://cdn.shopify.com/s/files/1/1033/0751/products/vintage-daisy-bordered-blue-A-RC-RE133-57_720x720.jpg?v=1604073800"}
            titleText={"Vintage Daisy Bordered Blue Rug"}
            rating={4.5}
            priceRange={"$80 - $399"}
          />
          <ShopCard
            photoURL={"https://cdn.shopify.com/s/files/1/1033/0751/products/cambria-sapphire-V2-A-RC-JB013-57_1f2eafb0-9bed-41e6-9ab3-414866b2296a_720x720.jpg?v=1602214970"}
            titleText={"Vintage Daisy Bordered Blue Rug"}
            rating={5}
            priceRange={"$80 - $399"}
          />
          <ShopCard
            photoURL={"https://cdn.shopify.com/s/files/1/1033/0751/products/linear-aztec-black-A-RC-0208-57_720x720.jpg?v=1571439103"}
            titleText={"Vintage Daisy Bordered Blue Rug"}
            rating={4.5}
            priceRange={"$80 - $399"}
          />
          <ShopCard
            photoURL={"https://cdn.shopify.com/s/files/1/1033/0751/products/soraya-trellis-ash-grey-A-RC-0342-57_720x720.jpg?v=1577031433"}
            titleText={"Vintage Daisy Bordered Blue Rug"}
            rating={4.5}
            priceRange={"$80 - $399"}
          />
        </CardSection>
        <CardSection 
          titleText={"Learn From the Pros"}
          backgroundColorClassName={"learn-from-the-pros"}
        >
          <ArticleCard
            photoURL={"https://cdn.shopify.com/s/files/1/1033/0751/files/UGC-content-2.jpg?v=1560468076"}
            titleText={"Your Pet Questions, Answered!"}
            descriptionText={"Got questions about Ruggable's commitment to making pet-friendly rugs? We've got the answers."}
          />
          <ArticleCard
            photoURL={"https://cdn.shopify.com/s/files/1/1033/0751/files/UGC-content.jpg?v=1560467904"}
            titleText={"Why You Need a Washable Rug"}
            descriptionText={"Still debating whether you need a washable rug? Here's why we think they're good investments for your home."}
          />
        </CardSection>
        <div className="ruggable-real-life-container">
          <h2><b>#Ruggable</b> in Real Life.</h2>
          <p>Look how our washable rugs have been pup-approved in real life.</p>
          <Button buttonText={"Shop Dog-Friendly Rugs"}/>
        </div>
      </div>
      { isMobile ? (<MobileFooter />) : (<Footer />) }
    </div>
  );
}

export default App;
