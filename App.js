import React from 'react';


import BannerImage from './bannerImage'
import CardList from './cardList'
import HeaderMenu from './headerMenu'
import DivHeader from './header'
import Signup from './signup'
import './App.css';

import 'semantic-ui-css/semantic.min.css'
const faker = require('faker')

var image = faker.image.nature();

function App() {
  return (
    <>
    {/* Header with links */}
    
    <HeaderMenu />
    
    {/* Banner image */}
    <BannerImage image={image}/>

    {/* Header, reusable by setting alightment (this is the property in text-align) - can be set to centered, left, and right */}
    <DivHeader title="Requesters" alignment="centered" />
    <CardList />
    <Signup />
    </>

  );
}

export default App;
