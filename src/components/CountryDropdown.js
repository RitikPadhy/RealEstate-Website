//import react and react hooks used to display data on the console
import React, {useState,useEffect, useContext} from 'react';      

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

//import headless ui
import { Menu } from '@headlessui/react';

//import house context
import { HouseContext, useHouse } from './HouseContext';

const CountryDropD = () => {
  //gets the different countries present in the 
  const {country, setCountry, countries} = useContext(HouseContext);
  console.log(countries);                       

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button className='dropdown-btn w-full text-left' onClick={() => setIsOpen(!isOpen)}>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px] '>Select your place</div>
        </div>
          {isOpen ? (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
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
