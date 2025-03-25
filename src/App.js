import React from 'react';


//import routes and route
import {Routes,Route} from 'react-router-dom';


//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'

import ScrollToTop from './pages/ScrollToTop';

const App = () => {
  return (
    //keeping the width upto 1440 px and equal margin from both sides
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />                         {/*used to route to a different page by just adding 'path' and changing the id to the the URL of the home page */}
        <Route path='/property/:id' element={<PropertyDetails />} />  {/*basically routes local host with an extension of /property/:id and opens the Property Details*/}
      </Routes>
      <Footer />
    </div>
    );
};

export default App;
