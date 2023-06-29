//import react and react hooks used to display data on the console
import React, {useState,useEffect, useContext} from 'react';      

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext, useHouse } from './HouseContext';

const CountryDropD = () => {
  //gets the unique countries present in the description of the images
  const {country, setCountry, countries} = useContext(HouseContext);                 
  //sets IsOpen as false meaning it is not open initially
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown'>      {/*making a menu for the country */}
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>  {/*On clicking the value of IsOpen changes */}
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>    {/*value of country from HouseContext*/}
          <div className='text-[13px] '>Select your place</div>
        </div>
        {/*If IsOpen is true,show the down icon. If IsOpen is false, show the up icon.*/}
          {isOpen ? (                                                   
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {/*countries is shown as a country with an index,then on clicking a country is shown with the an index in the menu and all the countries get displayed in the dropdown*/}
        {countries.map((country,index) =>  {
          return (
            <Menu.Item onClick={()=>setCountry(country)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default CountryDropD