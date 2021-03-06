import React from 'react';
import './App.css';
import Button from "./components/Button.js"
import Product from "./components/Product.js"
import Tile from "./components/Tile.js"

import Bag1 from "./assets/bag_1.png"
import Bag2 from "./assets/bag_2.png"
import Bag3 from "./assets/bag_3.png"
import Bag4 from "./assets/bag_4.png"
import Brand from "./assets/brand.png"
import Ourstory from "./assets/our_story.png"



function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
      <Button 
        text="to the collection" 
        />
      <Button 
        text="shop all bags" 
        />
      <Button  
        text="pre-order" 
        state="true"
        />
      </nav>
      <main>
        <Product 
        status = "Best seller"
        image = {Bag1}
        name = "The handy bag"
        price = "€400,-"/>
         <Product 
        status = "Best seller"
        image = {Bag2}
        name = "The stylish bag"
        price = "€250,-"/>
         <Product 
        status = "New collection"
        image = {Bag3}
        name = "The simple bag"
        price = "€300,-"/>
         <Product 
        status = "New collection"
        image = {Bag4}
        name = "The trendy bag"
        price = "€150,-"/>
      </main>
      <footer>
      <Tile>
          <h2>
              The Brand
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non modi sunt officiis rerum repellat itaque debitis esse molestias, amet, beatae veniam! Voluptates iure maiores placeat eaque deserunt, suscipit quaerat.
          </p>
      </Tile>
      <Tile>
        <img src={Brand} alt="geen afbeelding beschikbaar"/>
      </Tile>
      <Tile>
        <img src={Ourstory} alt="geen afbeelding beschikbaar"/>
      </Tile>
      <Tile>
          <h2>
              Our Story
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non modi sunt officiis rerum repellat itaque debitis esse molestias, amet, beatae veniam! Voluptates iure maiores placeat eaque deserunt, suscipit quaerat.
          </p>
      </Tile>
      </footer>
    </>  
  );
}

export default App;



