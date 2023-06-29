import React,{useContext} from 'react';

//import components
import CountryDropdown from './CountryDropD'
import PropertyDropdown from './PropertyDropD'
import PriceRangeDropdown from './PriceRangeDropD'

//import icons
import {RiSearch2Line} from 'react-icons/ri';   //gets the search icon

//import context
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick} = useContext(HouseContext);
  return  (
  <div className='px-[30px] py-5 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-3 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
    {/*flex,flex-col and lg:flex-row allows it to be flex-col initially and flex on big screens,crating equal gaps between items,allowing it to be above another div,shadow-1 creates a shadow,choosing the background color, and allowing blur in the extra spaace above any component */}
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
    <button onClick={() => handleClick()} className='bg-blue-500 hover:bg-blue-600 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
      {/*on presssing change to blue-600,allowing to occupy the full width of 162px,with rounded corners,allowing spaces between the items,the search to be large and white*/}
      <RiSearch2Line />
    </button>
  </div>
  );
};

export default Search;
